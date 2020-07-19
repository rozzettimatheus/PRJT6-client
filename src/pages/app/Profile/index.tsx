import React from 'react';
import { Play, Add } from 'styled-icons/ionicons-outline';

import Wrapper from '../../../components/Wrapper';
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
  return (
    <Wrapper>
      <ProfileHeader />

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
          <PlaylistItem page="/movies" />
          <PlaylistItem page="" />
          <PlaylistItem page="" />
          <PlaylistItem page="" />
        </PlaylistsContainer>
      </Main>
    </Wrapper>
  );
};

export default Profile;
