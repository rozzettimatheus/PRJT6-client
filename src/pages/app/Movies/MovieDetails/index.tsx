import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import api from '../../../../services/api';

import Container from '../../../../components/Container';
import Loader from '../../../../components/Loader';
import AddToPlaylistModal from '../../../../components/AddToPlaylistModal';

import {
  Wrapper,
  ImageContainer,
  Content,
  AddButton,
  AddIcon,
  Title,
  Year,
  Genres,
  Overview,
  Runtime,
} from './styles';

interface Genre {
  id: number;
  name: string;
}

interface MovieData {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  year: number;
  genres: Array<Genre>;
  runtime: number;
}

const MovieDetails: React.FC = () => {
  const [addModal, setAddModal] = useState(false);
  const { pathname } = useLocation();
  const [movie, setMovie] = useState<MovieData>({} as MovieData);

  useEffect(() => {
    const movieId = pathname.split('/').slice(-1)[0];

    api.get(`/movies/detail/${movieId}`).then(response => {
      const {
        title,
        poster_path,
        runtime,
        genres,
        overview,
        id,
        release_date,
      } = response.data;

      const year = new Date(release_date).getFullYear();

      setMovie({
        title,
        poster_path,
        runtime,
        genres,
        overview,
        id,
        year,
      });
    });
  }, [pathname]);

  if (!movie.title) {
    return <Loader />;
  }

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <img src={movie.poster_path} alt={movie.title} />
        </ImageContainer>

        <Content>
          <Title>
            <h1>{movie.title}</h1>
          </Title>

          <AddButton onClick={() => setAddModal(true)} type="button">
            <AddIcon />
            ADD TO PLAYLIST
          </AddButton>

          <Year>
            <strong>{movie.year}</strong>
          </Year>

          <Genres>
            {movie.genres.map(genre => (
              <Link
                key={genre.id}
                to={`/movies/${genre.name.toLocaleLowerCase()}?id=${
                  genre.id
                }&page=1`}
              >
                {genre.name}
              </Link>
            ))}
          </Genres>

          <Overview>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
          </Overview>

          <Runtime>
            <span>Runtime: </span>
            <strong>{movie.runtime} minutes</strong>
          </Runtime>
        </Content>
      </Wrapper>

      <AddToPlaylistModal isOpen={addModal} close={() => setAddModal(false)} />
    </Container>
  );
};

export default MovieDetails;
