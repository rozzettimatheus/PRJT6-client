import React, { useCallback, useEffect, useState } from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';

import api from '../../../services/api';

import Loader from '../../../components/Loader';
import Container from '../../../components/Container';
import Card from '../../../components/Card';

import {
  Header,
  Grid,
  Pagination,
  Paginate,
  LeftArrow,
  RightArrow,
} from './styles';

interface GenreParams {
  genre: string;
}

interface PosterData {
  id: number;
  poster_path: string;
  movietvshowId: number;
}

const MediaGrid: React.FC = () => {
  const location = useLocation();
  const [page, setPage] = useState(() => {
    const params = new URLSearchParams(location.search);

    return Number(params.get('page'));
  });
  const [loading, setLoading] = useState(false);
  const [t, setT] = useState('');
  const [id, setId] = useState<string | null>('');
  const { params } = useRouteMatch<GenreParams>();
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

    if (location.pathname.search('tvseries') >= 0) {
      type = 'tv';
    }

    setT(type);
    setId(param.get('id'));

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
    return <Loader />;
  }

  return (
    <Container>
      <Header>
        <h2>{formatHeaderTitle(params.genre)}</h2>
      </Header>

      <Grid>
        {posters.map(poster => (
          <Card
            key={poster.id}
            item={poster}
            mediaType={t === 'movies' ? 'movie' : 'tv'}
          />
        ))}
      </Grid>

      <Pagination>
        {page !== 1 ? (
          <Paginate
            to={`${location.pathname}?id=${id}&page=${page - 1}`}
            onClick={() => setPage(prev => prev - 1)}
          >
            <LeftArrow />
            Go Back
          </Paginate>
        ) : (
          <div />
        )}

        <Paginate
          to={`${location.pathname}?id=${id}&page=${page + 1}`}
          onClick={() => setPage(prev => prev + 1)}
        >
          Next Page
          <RightArrow />
        </Paginate>
      </Pagination>

      <div style={{ height: '20px' }} />
    </Container>
  );
};

export default MediaGrid;
