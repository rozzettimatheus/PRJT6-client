import React from 'react';
import { Play, Add } from '@styled-icons/ionicons-outline';

import { useAuth } from '../../../hooks/auth';

import Wrapper from '../../../components/Container';
import ProfileHeader from '../../../components/ProfileHeader';
import PlaylistItem from '../../../components/PlaylistItem';

import {
  Main,
  PlaylistHeader,
  PlaylistHead,
  PlaylistButtonContainer,
  PlaylistsContainer,
} from './styles';

const Profile: React.FC = () => {
  const {
    user: { profile, username },
  } = useAuth();

  return (
    <Wrapper>
      <ProfileHeader
        username={username}
        fullname={profile.fullname}
        image={profile.image}
        description={profile.description}
        self
        followers={0}
        following={0}
        playlists={0}
      />

      <Main>
        <PlaylistHeader>
          <PlaylistHead>
            <div>
              <Play size={20} color="#fff" />
              <span>Minhas playlists</span>
            </div>
          </PlaylistHead>

          <PlaylistButtonContainer>
            <button type="submit">
              <Add />
            </button>
          </PlaylistButtonContainer>
        </PlaylistHeader>

        <PlaylistsContainer>
          <PlaylistItem
            title="Sem nome"
            followers={25}
            items={40}
            page="/"
            isDeletable
          />
        </PlaylistsContainer>
      </Main>
    </Wrapper>
  );
};

export default Profile;
