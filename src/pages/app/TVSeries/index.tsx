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
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState<GenresData[]>([]);
  const [sections, setSections] = useState<SeriesSectionData[]>([]);
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

      <TVSeriesContainer>
        {sections.map(section => (
          <GenreSection key={section.title}>
            <GenreTitle>
              <h3>{section.title}</h3>
            </GenreTitle>
            <TVSeriesList>
              {section.series.map(serie => (
                <PosterCard
                  key={serie.id}
                  style={{ backgroundImage: `url(${serie.poster_path})` }}
                />
              ))}
            </TVSeriesList>
          </GenreSection>
        ))}
      </TVSeriesContainer>
    </Wrapper>
  );
};

export default TVSeries;
