import React, { createContext, useCallback, useState, useContext } from 'react';
import qs from 'qs';

import api from '../services/api';

interface User {
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

  const signIn = useCallback(async ({ username: email, password }) => {
    const registerResponse = await api.post('register', {
      username: email,
      password,
    });

    const { username } = registerResponse.data;

    const tokenResponse = await api.post(
      'auth/token',
      `username=${username}&password=${password}&grant_type=password`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic Y29tLmNpbmVwbHVzLmRldjo=',
        },
      },
    );

    const { access_token } = tokenResponse.data;

    const user: User = {
      username,
    };

    localStorage.setItem('@CinePlus:token', access_token);
    localStorage.setItem('@CinePlus:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${access_token}`;

    setData({ access_token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@CinePlus:token');
    localStorage.removeItem('@CinePlus:user');

    setData({} as AuthData);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
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
