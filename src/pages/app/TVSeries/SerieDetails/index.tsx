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
  Seasons,
  Overview,
} from './styles';

interface Genre {
  id: number;
  name: string;
}

interface SerieData {
  id: number;
  name: string;
  poster_path: string;
  overview: string;
  year_start: number;
  year_end: number;
  genres: Array<Genre>;
  seasons: number;
  episodes: number;
}

const SerieDetails: React.FC = () => {
  const { pathname } = useLocation();
  const [addModal, setAddModal] = useState(false);
  const [serie, setSerie] = useState<SerieData>({} as SerieData);

  useEffect(() => {
    const serieId = pathname.split('/').slice(-1)[0];

    api.get(`/tv/detail/${serieId}`).then(response => {
      const {
        name,
        poster_path,
        overview,
        first_air_date,
        last_air_date,
        number_of_seasons,
        number_of_episodes,
        genres,
        id,
      } = response.data;

      const year_start = new Date(first_air_date).getFullYear();
      const year_end = new Date(last_air_date).getFullYear();

      setSerie({
        name,
        poster_path,
        overview,
        year_start,
        year_end,
        seasons: number_of_seasons,
        episodes: number_of_episodes,
        genres,
        id,
      });
    });
  }, [pathname]);

  if (!serie.name) {
    return <Loader />;
  }

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <img src={serie.poster_path} alt={serie.name} />
        </ImageContainer>

        <Content>
          <Title>
            <h1>{serie.name}</h1>
          </Title>

          <AddButton onClick={() => setAddModal(true)} type="button">
            <AddIcon />
            ADD TO PLAYLIST
          </AddButton>

          <Year>
            <strong>
              {serie.year_start} / {serie.year_end}
            </strong>
          </Year>

          <Seasons>
            <span>{serie.seasons} Seasons</span>
            <span>{serie.episodes} Episodes</span>
          </Seasons>

          <Genres>
            {serie.genres.map(genre => (
              <Link
                key={genre.id}
                to={`/tvseries/${genre.name.toLocaleLowerCase()}?id=${
                  genre.id
                }&page=1`}
              >
                {genre.name}
              </Link>
            ))}
          </Genres>

          <Overview>
            <h4>Overview</h4>
            <p>{serie.overview}</p>
          </Overview>
        </Content>
      </Wrapper>

      <AddToPlaylistModal isOpen={addModal} close={() => setAddModal(false)} />
    </Container>
  );
};

export default SerieDetails;
