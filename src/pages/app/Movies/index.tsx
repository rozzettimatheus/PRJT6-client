import React, { useState, useCallback, useEffect, useRef } from 'react';

import api from '../../../services/api';
import getVideoIDFromURL from '../../../utils/getVideoIDFromURL';

import Container from '../../../components/Container';
import DropdownItem from '../../../components/DropdownItem';
import Loader from '../../../components/Loader';
import ScrollableSection from '../../../components/ScrollableSection';

import {
  Header,
  GenresContainer,
  GenresSelect,
  ArrowDown,
  DropdownMenu,
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
  const buttonRef = useRef(document.createElement('button'));

  const handleToggleDropdown = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleCloseDropdown = useCallback(e => {
    if (buttonRef.current.contains(e.target)) {
      return;
    }

    setOpen(false);
  }, []);

  const formatGenreURL = useCallback((name: string) => {
    return name.split(' ').join('_').replace(/&/g, 'and').toLowerCase();
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleCloseDropdown);

    return () => {
      document.removeEventListener('mousedown', handleCloseDropdown);
    };
  }, [handleCloseDropdown]);

  useEffect(() => {
    api.get('/genres/list').then(response => setGenres(response.data));

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
    return <Loader />;
  }

  return (
    <Container>
      <Header>
        <h1>Top Movies</h1>
      </Header>

      <GenresContainer>
        <GenresSelect ref={buttonRef} onClick={handleToggleDropdown}>
          Search for
          <ArrowDown />
          {open && (
            <DropdownMenu>
              {genres.map(genre => (
                <DropdownItem
                  key={genre.id}
                  page={`/movies/${formatGenreURL(genre.name)}?id=${
                    genre.id
                  }&page=1`}
                  title={genre.name}
                />
              ))}
            </DropdownMenu>
          )}
        </GenresSelect>
      </GenresContainer>

      <Player videoId={videoId} />

      {sections.map(section => (
        <ScrollableSection
          key={section.title}
          title={section.title}
          type="movie"
          data={section.films}
        />
      ))}
    </Container>
  );
};

export default Movies;
