import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface Profile {
  id: number;
  description: string | null;
  email: string;
  fullname: string;
  image: string | null;
}

interface User {
  id: number;
  profile: Profile;
  followers: Array<object>;
  following: Array<object>;
  playlists: Array<object>;
  username: string;
}

interface AuthData {
  access_token: string;
  user: User;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthData>(() => {
    const access_token = localStorage.getItem('@CinePlus:token');
    const user = localStorage.getItem('@CinePlus:user');

    if (access_token && user) {
      api.defaults.headers.authorization = `Bearer ${access_token}`;

      return {
        access_token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthData;
  });

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post(
      'auth/token',
      `username=${username}&password=${password}&grant_type=password`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic Y29tLmNpbmVwbHVzLmRldjo=',
        },
      },
    );

    const { access_token } = response.data;

    api.defaults.headers.authorization = `Bearer ${access_token}`;

    const userResponse = await api.get('/user/details');

    const user = userResponse.data;

    localStorage.setItem('@CinePlus:token', access_token);
    localStorage.setItem('@CinePlus:user', JSON.stringify(user));

    setData({ access_token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@CinePlus:token');
    localStorage.removeItem('@CinePlus:user');

    setData({} as AuthData);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      const access_token = localStorage.getItem('@CinePlus:token');

      localStorage.setItem('@CinePlus:user', JSON.stringify(user));

      if (access_token) {
        setData({
          access_token,
          user,
        });
      }
    },
    [setData],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
