import React, { useState, useCallback, useEffect } from 'react';

import api from '../../../services/api';
import getVideoIDFromURL from '../../../utils/getVideoIDFromURL';

import Wrapper from '../../../components/Wrapper';
import DropdownItem from '../../../components/DropdownItem';
import Loader from '../../../components/Loader';

import poster from '../../../assets/poster.jpg';

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

const iterate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sections = [1, 2, 3];

interface GenresData {
  name: string;
  id: number;
}

const Movies: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState<GenresData[]>([]);
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
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [loading]);

  useEffect(() => {
    // get genres
    api.get('/genres/list').then(response => setGenres(response.data));

    // get video url
    api.get('/movies/toptrending/video').then(response => {
      const url = getVideoIDFromURL(response.data);
      setVideoId(url);
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
          <GenreSection>
            <GenreTitle>
              <h3>Ação</h3>
            </GenreTitle>
            <MoviesList>
              {iterate.map(iter => (
                <PosterCard style={{ backgroundImage: `url(${poster})` }} />
              ))}
            </MoviesList>
          </GenreSection>
        ))}
      </MoviesContainer>
    </Wrapper>
  );
};

export default Movies;
