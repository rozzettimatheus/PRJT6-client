import React, { useState, useCallback, useEffect } from 'react';

import api from '../../../services/api';
import getVideoIDFromURL from '../../../utils/getVideoIDFromURL';

import Wrapper from '../../../components/Wrapper';
import DropdownItem from '../../../components/DropdownItem';
import Loader from '../../../components/Loader';

import {
  GenresContainer,
  GenresSelect,
  ArrowDown,
  DropdownMenu,
  MoviesContainer,
  GenreSection,
  GenreTitle,
  MoviesList,
  PosterCard,
  Player,
} from './styles';

interface GenresData {
  name: string;
  id: number;
}

interface MoviePosterData {
  id: number;
  poster_path: string;
}

interface MovieSectionData {
  title: string;
  films: MoviePosterData[];
}

const Movies: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState<GenresData[]>([]);
  const [sections, setSections] = useState<MovieSectionData[]>([]);
  const [videoId, setVideoId] = useState('');

  const toggleDropdown = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const closeDropdown = useCallback(() => {
    if (open) {
      setOpen(false);
    }
  }, [open]);

  useEffect(() => {
    // get genres
    api.get('/genres/list').then(response => setGenres(response.data));

    // get video url
    api.get('/movies/toptrending/video').then(response => {
      const { url } = response.data;
      setVideoId(getVideoIDFromURL(url));
    });

    api.get('movies/popular').then(response => {
      const movies = response.data;
      const moviesArray = Object.keys(movies).map(key => {
        return {
          title: key,
          films: movies[key],
        };
      });
      setSections(moviesArray);
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
    <Wrapper onClick={closeDropdown}>
      <GenresContainer>
        <GenresSelect onClick={toggleDropdown}>
          Buscar por
          <ArrowDown />
          {open && (
            <DropdownMenu>
              {genres.map(genre => (
                <DropdownItem key={genre.id} page="/">
                  {genre.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </GenresSelect>
      </GenresContainer>

      <Player videoId={videoId} />

      <MoviesContainer>
        {sections.map(section => (
          <GenreSection key={section.title}>
            <GenreTitle>
              <h3>{section.title}</h3>
            </GenreTitle>
            <MoviesList>
              {section.films.map(film => (
                <PosterCard
                  key={film.id}
                  style={{ backgroundImage: `url(${film.poster_path})` }}
                />
              ))}
            </MoviesList>
          </GenreSection>
        ))}
      </MoviesContainer>
    </Wrapper>
  );
};

export default Movies;
