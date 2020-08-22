import React, { useState, useCallback } from 'react';

import avatar from '../../assets/avatar.png';

import {
  Container,
  AvatarContainer,
  UserSection,
  UsernameContainer,
  UserList,
  UserInfo,
} from './styles';

interface ProfileHeaderProps {
  followers: number;
  following: number;
  playlists: number;
  image: string | null;
  fullname: string;
  username: string;
  description: string | null;
  self?: boolean;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  followers,
  following,
  playlists,
  image,
  description,
  fullname,
  username,
  self,
}) => {
  const [subscription, setSubscription] = useState(false);

  const toggleSubscription = useCallback(() => {
    setSubscription(!subscription);
  }, [subscription]);

  return (
    <Container>
      <AvatarContainer>
        <div>
          <div>
            <img
              src={
                image
                  ? `https://cineplus.herokuapp.com/imagens/${image}`
                  : avatar
              }
              alt={fullname}
            />
          </div>
        </div>
      </AvatarContainer>

      <UserSection>
        <UsernameContainer>
          <h2>{fullname}</h2>
          {!self && (
            <button
              type="button"
              className={subscription ? 'active' : ''}
              onClick={toggleSubscription}
            >
              {subscription ? 'Seguindo' : 'Seguir'}
            </button>
          )}
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
          <h1>{username}</h1>
          <p>{description || ''}</p>
        </UserInfo>
      </UserSection>
    </Container>
  );
};

export default ProfileHeader;
