import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import Wrapper from '../../../components/Wrapper';
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
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <PlaylistContainer>
        <PlaylistHeader>
          <h1>mais populares</h1>
        </PlaylistHeader>

        {lists.map(list => (
          <PlaylistItem
            key={list.id}
            page="/"
            title={list.name}
            items={list.items}
            followers={list.followers}
          />
        ))}
      </PlaylistContainer>
    </Wrapper>
  );
};

export default Playlists;
