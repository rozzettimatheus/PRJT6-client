import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../../services/api';
import getVideoIDFromURL from '../../../utils/getVideoIDFromURL';

import Container from '../../../components/Container';
import DropdownItem from '../../../components/DropdownItem';
import Loader from '../../../components/Loader';

import {
  Content,
  Header,
  GenresContainer,
  GenresSelect,
  ArrowDown,
  DropdownMenu,
  TVSeriesContainer,
  GenreSection,
  GenreTitle,
  TVSeriesList,
  PosterCard,
  Player,
} from './styles';

interface GenresData {
  name: string;
  id: number;
}

interface SeriePosterData {
  id: number;
  poster_path: string;
}

interface SeriesSectionData {
  title: string;
  series: SeriePosterData[];
}

const TVSeries: React.FC = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState<GenresData[]>([]);
  const [sections, setSections] = useState<SeriesSectionData[]>([]);
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

  const handleSearchTVSerie = useCallback(
    (id: number) => {
      history.push(`/tvseries/${id}`);
    },
    [history],
  );

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

    api.get('/tv/toptrending/video').then(response => {
      const { url } = response.data;
      setVideoId(getVideoIDFromURL(url));
    });

    api.get('tv/popular').then(response => {
      const tvseries = response.data;
      const tvseriesArray = Object.keys(tvseries).map(key => {
        return {
          title: key,
          series: tvseries[key],
        };
      });
      setSections(tvseriesArray);
      setLoading(false);
    });
  }, []);

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
          <h1>Top TV Series</h1>
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
                    page={`/tvseries/${formatGenreURL(genre.name)}`}
                    title={genre.name}
                  />
                ))}
              </DropdownMenu>
            )}
          </GenresSelect>
        </GenresContainer>

        <Player videoId={videoId} />

        <TVSeriesContainer>
          {sections.map(section => (
            <GenreSection key={section.title}>
              <GenreTitle>
                <h3>{section.title}</h3>
              </GenreTitle>
              <TVSeriesList>
                {section.series.map(serie => (
                  <PosterCard
                    onClick={() => handleSearchTVSerie(serie.id)}
                    key={serie.id}
                    style={{ backgroundImage: `url(${serie.poster_path})` }}
                  />
                ))}
              </TVSeriesList>
            </GenreSection>
          ))}
        </TVSeriesContainer>
      </Content>
    </Container>
  );
};

export default TVSeries;
