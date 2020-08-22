import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import api from '../../../services/api';

import Loader from '../../../components/Loader';
import Container from '../../../components/Container';
import Card from '../../../components/Card';

import { Header, Grid } from '../MediaGrid/styles';

interface PosterData {
  id: number;
  poster_path: string;
}

const Upcoming: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [posters, setPosters] = useState<PosterData[]>([]);
  const { search } = useLocation();

  useEffect(() => {
    setLoading(true);

    const params = new URLSearchParams(search);
    const page = params.get('page');

    api.get(`/upcomingmovies/${page}`).then(response => {
      const rawPosters: PosterData[] = response.data;

      const filteredPosters = rawPosters.filter(
        poster => Object.keys(poster).length !== 0,
      );

      setPosters(filteredPosters);
      setLoading(false);
    });
  }, [search]);

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

      <div style={{ height: '20px' }} />
    </Container>
  );
};

export default Upcoming;
