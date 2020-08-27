import React, { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import FollowingModal from '../FollowingModal';
import FollowersModal from '../FollowersModal';

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
  const { pathname } = useLocation();
  const { user, updateUser } = useAuth();

  const [id, setId] = useState('');
  const [followingModal, setFollowingModal] = useState(false);
  const [followersModal, setFollowersModal] = useState(false);

  const [subscription, setSubscription] = useState(() => {
    const userId = Number(pathname.split('/').slice(-1)[0]);
    const found = user.following.find(follow => follow.id === userId);

    return !!found;
  });

  useEffect(() => {
    const userId = pathname.split('/').slice(-1)[0];

    setId(userId);
  }, [pathname]);

  const toggleSubscription = useCallback(async () => {
    if (subscription) {
      await api.delete(`/user/unfollow/${id}`);
    } else {
      await api.post(`/user/follow/${id}`);
    }

    setSubscription(!subscription);

    const { data } = await api.get('/user/details');
    updateUser(data);
  }, [id, subscription, updateUser]);

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
              {subscription ? 'Following' : 'Follow'}
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
            <button type="button" onClick={() => setFollowersModal(true)}>
              <strong>{followers}</strong> followers
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setFollowingModal(true)}>
              <strong>{following}</strong> following
            </button>
          </li>
        </UserList>
        <UserInfo>
          <h1>{username}</h1>
          <p>{description || ''}</p>
        </UserInfo>
      </UserSection>

      {self && (
        <FollowingModal
          isOpen={followingModal}
          close={() => setFollowingModal(false)}
        />
      )}
      {self && (
        <FollowersModal
          isOpen={followersModal}
          close={() => setFollowersModal(false)}
        />
      )}
    </Container>
  );
};

export default ProfileHeader;
