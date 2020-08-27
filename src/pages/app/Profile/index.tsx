/* eslint-disable react/jsx-curly-newline */
import React, { useCallback, useState } from 'react';
import { Play, Add } from '@styled-icons/ionicons-outline';

import { useAuth } from '../../../hooks/auth';

import Wrapper from '../../../components/Container';
import ProfileHeader from '../../../components/ProfileHeader';
import PlaylistItem from '../../../components/PlaylistItem';
import AddPlaylistModal from '../../../components/AddPlaylistModal';

import {
  Main,
  PlaylistHeader,
  PlaylistHead,
  PlaylistButtonContainer,
  PlaylistsContainer,
} from './styles';
import api from '../../../services/api';

const Profile: React.FC = () => {
  const { user, updateUser } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = useCallback(
    async (e: Event, id: number, userId: number) => {
      e.preventDefault();

      if (userId === user.id) {
        await api.delete(`/playlist/delete/${id}`);
      } else {
        await api.delete(`/playlist/unfollow/${id}`);
      }

      const { data } = await api.get('/user/details');

      updateUser(data);
    },
    [updateUser, user.id],
  );

  return (
    <Wrapper>
      <ProfileHeader
        username={user.username}
        fullname={user.profile.fullname}
        image={user.profile.image}
        description={user.profile.description}
        self
        followers={user.followers.length}
        following={user.following.length}
        playlists={user.playlists.length}
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
            <button type="submit" onClick={() => setIsModalOpen(true)}>
              <Add />
            </button>
          </PlaylistButtonContainer>
        </PlaylistHeader>

        <PlaylistsContainer>
          {user.playlists.map(playlist => (
            <PlaylistItem
              key={playlist.id}
              title={playlist.name}
              followers={playlist.qtdFollowers}
              items={playlist.qtdMovie + playlist.qtdTv}
              page={`/playlists/${playlist.id}`}
              isDeletable
              isPrivate={playlist.private}
              onDelete={(event: Event) =>
                handleDelete(event, playlist.id, playlist.userId)
              }
            />
          ))}

          <AddPlaylistModal
            close={() => setIsModalOpen(false)}
            isOpen={isModalOpen}
          />
        </PlaylistsContainer>
      </Main>
    </Wrapper>
  );
};

export default Profile;
