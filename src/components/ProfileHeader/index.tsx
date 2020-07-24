import React, { useState, useCallback, useMemo } from 'react';

import { useAuth } from '../../hooks/auth';

import avatar from '../../assets/avatar.png';

import {
  Container,
  AvatarContainer,
  UserSection,
  UsernameContainer,
  UserList,
  UserInfo,
} from './styles';

interface NumberProps {
  followers: number;
  following: number;
  playlists: number;
}

const ProfileHeader: React.FC<NumberProps> = ({
  followers,
  following,
  playlists,
}) => {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState(false);

  const toggleSubscription = useCallback(() => {
    setSubscription(!subscription);

    // resto da logica de se inscrever
  }, [subscription]);

  return (
    <Container>
      <AvatarContainer>
        <div>
          <div>
            <img src={user.avatar ? user.avatar : avatar} alt={user.fullname} />
          </div>
        </div>
      </AvatarContainer>

      <UserSection>
        <UsernameContainer>
          <h2>{user.fullname}</h2>
          <button
            type="button"
            className={subscription ? 'active' : ''}
            onClick={toggleSubscription}
          >
            {subscription ? 'Seguindo' : 'Seguir'}
          </button>
        </UsernameContainer>
        <UserList>
          <li>
            <span>
              <strong>{playlists}</strong> playlists
            </span>
          </li>
          <li>
            <span>
              <strong>{followers}</strong> seguidores
            </span>
          </li>
          <li>
            <span>
              <strong>{following}</strong> seguindo
            </span>
          </li>
        </UserList>
        <UserInfo>
          <h1>{user.username}</h1>
          <p>{user.description}</p>
        </UserInfo>
      </UserSection>
    </Container>
  );
};

export default ProfileHeader;
