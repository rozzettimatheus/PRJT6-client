import React from 'react';
import { Play, Add } from '@styled-icons/ionicons-outline';

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
      <ProfileHeader followers={0} following={0} playlists={0} />

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
            title="Playlist daora"
            followers={25}
            items={40}
            page="/movies"
            isDeletable
          />
          <PlaylistItem
            title="Best movies ever"
            followers={25}
            items={40}
            page="/"
            isDeletable
            isPrivate
          />
          <PlaylistItem
            title="Sem nome"
            followers={25}
            items={40}
            page="/"
            isDeletable
          />
          <PlaylistItem
            title="Teste"
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
