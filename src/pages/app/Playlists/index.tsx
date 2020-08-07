import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import Container from '../../../components/Container';
import PlaylistItem from '../../../components/PlaylistItem';
import Loader from '../../../components/Loader';

import { PlaylistContainer, PlaylistHeader } from './styles';

interface PlaylistData {
  id: string;
  name: string;
  followers: number;
  items: number;
}

const Playlists: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [lists, setLists] = useState<PlaylistData[]>([]);

  useEffect(() => {
    api.get('/playlist/popular').then((response: any) => {
      const data: PlaylistData[] = response.data.map((playlist: any) => ({
        id: playlist.id,
        name: playlist.name,
        followers: playlist.qtdFollowers,
        items: playlist.qtdMovie + playlist.qtdTv,
      }));

      setLists(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <PlaylistContainer>
        <PlaylistHeader>
          <h1>Top Playlists</h1>
        </PlaylistHeader>

        {lists.map(list => (
          <PlaylistItem
            key={list.id}
            page={`/playlists/${list.id}`}
            title={list.name}
            items={list.items}
            followers={list.followers}
          />
        ))}
      </PlaylistContainer>
    </Container>
  );
};

export default Playlists;
