import React, { useCallback, useEffect, useState } from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';

import api from '../../../services/api';

import Container from '../../../components/Container';
import { Content, Header, Grid, PosterCard } from './styles';

interface IGenreParams {
  genre: string;
}

interface PosterData {
  id: number;
  poster_path: string;
}

const MediaGrid: React.FC = () => {
  const { params } = useRouteMatch<IGenreParams>();
  const location = useLocation();
  const [posters, setPosters] = useState<PosterData[]>([]);

  const formatHeaderTitle = useCallback((genre: string) => {
    return genre
      .split('_')
      .join(' ')
      .replace(/\b(and)\b/i, '&');
  }, []);

  useEffect(() => {
    const param = new URLSearchParams(location.search);

    api
      .get(`/movies/bygenre/${param.get('page')}/${param.get('id')}`)
      .then(response => setPosters(response.data));
  }, [location.search]);

  return (
    <Container>
      <Content>
        <Header>
          <h2>{formatHeaderTitle(params.genre)}</h2>
        </Header>

        <Grid>
          {posters.map(poster => (
            <PosterCard
              key={poster.id}
              onClick={() => console.log('ola')}
              style={{ backgroundImage: `url(${poster.poster_path})` }}
            />
          ))}
        </Grid>
      </Content>
    </Container>
  );
};

export default MediaGrid;
