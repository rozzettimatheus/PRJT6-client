import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
} from '../MediaGrid/styles';

interface PosterData {
  id: number;
  poster_path: string;
  movietvshowId: number;
}

const Upcoming: React.FC = () => {
  const { search } = useLocation();

  const [page, setPage] = useState(() => {
    const params = new URLSearchParams(search);

    return Number(params.get('page'));
  });
  const [loading, setLoading] = useState(false);
  const [posters, setPosters] = useState<PosterData[]>([]);

  useEffect(() => {
    setLoading(true);

    console.log(page);

    api.get(`/upcomingmovies/${page}`).then(response => {
      const rawPosters: PosterData[] = response.data;

      const filteredPosters = rawPosters.filter(
        poster => Object.keys(poster).length !== 0,
      );

      setPosters(filteredPosters);
      setLoading(false);
    });
  }, [page, search]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Header>
        <h2>Upcoming Movies</h2>
      </Header>

      <Grid>
        {posters.map(poster => (
          <Card key={poster.id} item={poster} mediaType="movie" />
        ))}
      </Grid>

      <Pagination>
        {page !== 1 ? (
          <Paginate
            to={`/upcoming/movies?page=${page - 1}`}
            onClick={() => setPage(prev => prev - 1)}
          >
            <LeftArrow />
            Go Back
          </Paginate>
        ) : (
          <div />
        )}

        <Paginate
          to={`/upcoming/movies?page=${page + 1}`}
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

export default Upcoming;
