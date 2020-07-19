import React, { useState, useEffect } from 'react';

import Wrapper from '../../../components/Wrapper';
import PlaylistItem from '../../../components/PlaylistItem';
import Loader from '../../../components/Loader';

import { PlaylistContainer, PlaylistHeader } from './styles';

const Playlists: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
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

        <PlaylistItem page="/teste" />
        <PlaylistItem page="/teste" />
        <PlaylistItem page="/teste" />
        <PlaylistItem page="/teste" />
        <PlaylistItem page="/teste" />
        <PlaylistItem page="/teste" />
        <PlaylistItem page="/teste" />
        <PlaylistItem page="/teste" />
        <PlaylistItem page="/teste" />
      </PlaylistContainer>
    </Wrapper>
  );
};

export default Playlists;
