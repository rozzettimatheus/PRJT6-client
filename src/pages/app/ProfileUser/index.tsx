/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Play } from '@styled-icons/ionicons-outline';

import api from '../../../services/api';

import Container from '../../../components/Container';
import ProfileHeader from '../../../components/ProfileHeader';
import PlaylistItem from '../../../components/PlaylistItem';
import Loader from '../../../components/Loader';

import {
  Main,
  PlaylistHeader,
  PlaylistHead,
  PlaylistsContainer,
  NotFound,
} from './styles';

interface UserParams {
  id: string;
}

interface Profile {
  id: number;
  description: string | null;
  email: string;
  fullname: string;
  image: string | null;
}

interface PlaylistData {
  id: string;
  name: string;
  followers: number;
  items: number;
  isPrivate: boolean;
}

interface User {
  id: number;
  profile: Profile;
  followers: Array<object>;
  following: Array<object>;
  playlists: Array<PlaylistData>;
  username: string;
}

const ProfileUser: React.FC = () => {
  const [error, setError] = useState(false);
  const [person, setPerson] = useState<User>({} as User);
  const { params } = useRouteMatch<UserParams>();

  useEffect(() => {
    async function getData(): Promise<void> {
      const { data } = await api.get(`user/detail/${params.id}`);

      if (!data) {
        setError(true);
        return;
      }

      const {
        id,
        profile: { description, email, fullname, image },
        followers,
        following,
        playlists,
      } = data;

      const profile: Profile = {
        id,
        description,
        email,
        fullname,
        image,
      };

      const playlistsArray: PlaylistData[] = playlists.map((playlist: any) => {
        return {
          id: playlist.id,
          name: playlist.name,
          isPrivate: playlist.private,
          items: Number(playlist.qtdMovie + playlist.qtdTv),
          followers: playlist.qtdFollowers,
        };
      });

      const user: User = {
        id,
        profile,
        followers,
        following,
        username: email,
        playlists: playlistsArray,
      };

      setPerson(user);
    }

    getData();
  }, [params]);

  if (!person.username) {
    return <Loader />;
  }

  if (error) {
    return (
      <Container>
        <NotFound>
          <p>Ops, user not found :(</p>
        </NotFound>
      </Container>
    );
  }

  return (
    <Container>
      {person.profile && (
        <>
          <ProfileHeader
            username={person.username}
            fullname={person.profile.fullname}
            image={person.profile.image}
            description={person.profile.description}
            followers={person.followers.length}
            following={person.following.length}
            playlists={person.playlists.length}
          />

          <Main>
            <PlaylistHeader>
              <PlaylistHead>
                <div>
                  <Play size={20} color="#fff" />
                  <span>Playlists</span>
                </div>
              </PlaylistHead>
            </PlaylistHeader>

            <PlaylistsContainer>
              {person.playlists.length ? (
                person.playlists.map(data => (
                  <PlaylistItem
                    key={data.id}
                    title={data.name}
                    followers={data.followers}
                    items={data.items}
                    page={`/playlists/${data.id}`}
                    isPrivate={data.isPrivate}
                  />
                ))
              ) : (
                <p style={{ color: 'var(--text-darken)' }}>No playlists here</p>
              )}
            </PlaylistsContainer>
          </Main>
        </>
      )}

      <div style={{ marginBottom: '30px' }} />
    </Container>
  );
};

export default ProfileUser;
