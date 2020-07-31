import React, { useCallback, useEffect, useState } from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';

import api from '../../../services/api';

import Loader from '../../../components/Loader';
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
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const param = new URLSearchParams(location.search);

    let type = 'movies';

    if (location.pathname.search('tvseries')) {
      type = 'tv';
    }

    api
      .get(`/${type}/bygenre/${param.get('page')}/${param.get('id')}`)
      .then(response => {
        const rawPosters: PosterData[] = response.data;

        const filteredPosters = rawPosters.filter(
          poster => Object.keys(poster).length !== 0,
        );

        setPosters(filteredPosters);
        setLoading(false);
      });
  }, [location]);

  if (loading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

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
