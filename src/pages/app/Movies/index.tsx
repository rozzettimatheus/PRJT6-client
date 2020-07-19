import React from 'react';

import Wrapper from '../../../components/Wrapper';

import {
  GenresContainer,
  GenresSelect,
  ArrowDown,
  MoviesContainer,
  GenreSection,
  GenreTitle,
  MoviesList,
  PosterCard,
  Background,
  InfoBox,
  InfoIcon,
  Player,
} from './styles';

const iterate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sections = [1, 2, 3];

const Movies: React.FC = () => {
  return (
    <Wrapper>
      <GenresContainer>
        <GenresSelect>
          Buscar por
          <ArrowDown />
        </GenresSelect>
      </GenresContainer>

      <Player videoId="cVHwlqyMyhM" />

      <MoviesContainer>
        {sections.map(section => (
          <GenreSection>
            <GenreTitle>
              <h3>Ação</h3>
            </GenreTitle>
            <MoviesList>
              {iterate.map(iter => (
                <PosterCard>
                  <Background>
                    <InfoBox>
                      <InfoIcon />
                      <span>Detalhes</span>
                    </InfoBox>
                  </Background>
                </PosterCard>
              ))}
            </MoviesList>
          </GenreSection>
        ))}
      </MoviesContainer>
    </Wrapper>
  );
};

export default Movies;
