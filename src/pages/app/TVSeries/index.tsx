import React, { useState, useCallback, useEffect } from 'react';

import Wrapper from '../../../components/Wrapper';
import DropdownItem from '../../../components/DropdownItem';
import Loader from '../../../components/Loader';

import poster from '../../../assets/poster.jpg';

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

const iterate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sections = [1, 2, 3];

const TVSeries: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

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
              <DropdownItem page="/">Ação</DropdownItem>
              <DropdownItem page="/">Romance</DropdownItem>
              <DropdownItem page="/">Faroeste</DropdownItem>
              <DropdownItem page="/">Terror</DropdownItem>
            </DropdownMenu>
          )}
        </GenresSelect>
      </GenresContainer>

      <Player videoId="cVHwlqyMyhM" />

      <TVSeriesContainer>
        {sections.map(section => (
          <GenreSection>
            <GenreTitle>
              <h3>Ação</h3>
            </GenreTitle>
            <TVSeriesList>
              {iterate.map(iter => (
                <PosterCard style={{ backgroundImage: `url(${poster})` }} />
              ))}
            </TVSeriesList>
          </GenreSection>
        ))}
      </TVSeriesContainer>
    </Wrapper>
  );
};

export default TVSeries;
