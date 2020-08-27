/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import api from '../../../services/api';

import Container from '../../../components/Container';
import Input from '../../../components/Input';
import UserItem from '../../../components/UserItem';
import Select from '../../../components/Select';
import PlaylistItem from '../../../components/PlaylistItem';
import Card from '../../../components/Card';

import {
  Header,
  SearchSection,
  SubmitButton,
  Query,
  QueryGrid,
} from './styles';

interface DataSearch {
  search: string;
  type: string;
}

interface UserData {
  id: number;
  fullname: string;
  image: string;
}

interface PlaylistData {
  id: string;
  name: string;
  followers: number;
  items: number;
}

interface MediaData {
  id: number;
  poster_path: string;
  movietvshowId: number;
  type: 'tv' | 'movie';
}

const Search: React.FC = () => {
  const [loading, setLoading] = useState(false);

  // query datatypes
  const [users, setUsers] = useState<UserData[] | null>(null);
  const [playlists, setPlaylists] = useState<PlaylistData[] | null>(null);
  const [movies, setMovies] = useState<MediaData[] | null>(null);
  const [series, setSeries] = useState<MediaData[] | null>(null);

  const formRef = useRef<FormHandles>(null);

  const clearAll = useCallback(() => {
    setUsers(null);
    setPlaylists(null);
    setMovies(null);
    setSeries(null);
  }, []);

  const handleSubmit = useCallback(
    (data: DataSearch) => {
      const { search, type } = data;

      if (!type) return;

      const query = search.split(' ').join('%');

      let playlistData: PlaylistData[];
      let movieData: MediaData[];
      let seriesData: MediaData[];

      clearAll();

      if (!query && (type === 'tv' || type === 'movie')) return;

      setLoading(true);

      api.get(`/search/${type}/${query}`).then(response => {
        switch (type) {
          case 'user':
            setUsers(response.data);
            break;
          case 'playlist':
            playlistData = response.data.map((item: any) => ({
              id: item.id,
              name: item.name,
              followers: item.qtdFollowers,
              items: item.qtdMovie + item.qtdTv,
            }));
            setPlaylists(playlistData);
            break;
          case 'movie':
            movieData = response.data.map((item: any) => ({
              id: item.id,
              poster_path: item.poster_path,
              type: 'movie',
            }));
            setMovies(movieData);
            break;
          case 'tv':
            seriesData = response.data.map((item: any) => ({
              id: item.id,
              poster_path: item.poster_path,
              type: 'tv',
            }));
            setSeries(seriesData);
            break;
          default:
            break;
        }

        setLoading(false);
      });

      formRef.current?.reset();
    },
    [clearAll],
  );

  const options = [
    { value: 'movie', label: 'Movies' },
    { value: 'tv', label: 'TV Series' },
    { value: 'user', label: 'Users' },
    { value: 'playlist', label: 'Playlists' },
  ];

  return (
    <Container>
      <Header>
        <h1>Search</h1>
      </Header>

      <SearchSection>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Select name="type" options={options} />
          <Input name="search" placeholder="Search everything..." />
          <SubmitButton type="submit">Search</SubmitButton>
        </Form>
      </SearchSection>

      {loading && <div style={{ color: 'var(--text-darken)' }}>loading...</div>}

      {users && (
        <Query>
          {users.map(user => (
            <UserItem
              key={user.id}
              searchId={user.id}
              fullname={user.fullname}
              image={user.image}
            />
          ))}
        </Query>
      )}

      {playlists && (
        <Query>
          {playlists.map(playlist => (
            <PlaylistItem
              page={`/playlists/${playlist.id}`}
              key={playlist.id}
              title={playlist.name}
              items={playlist.items}
              followers={playlist.followers}
            />
          ))}
        </Query>
      )}

      {movies && (
        <QueryGrid>
          {movies.map(movie => (
            <Card key={movie.id} item={movie} mediaType={movie.type} />
          ))}
        </QueryGrid>
      )}

      {series && (
        <QueryGrid>
          {series.map(serie => (
            <Card key={serie.id} item={serie} mediaType={serie.type} />
          ))}
        </QueryGrid>
      )}

      <div style={{ height: '20px' }} />
    </Container>
  );
};

export default Search;
