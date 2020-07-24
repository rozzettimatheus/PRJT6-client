import React from 'react';
import { Link } from 'react-router-dom';

import {
  Main,
  PlaylistHeader,
  Tabs,
  Tab,
  PlaylistTitle,
  EditIcon,
  MoviesContainer,
  SectionCards,
} from './styles';

import Wrapper from '../../../../components/Wrapper';
import ProfileHeader from '../../../../components/ProfileHeader';
import BackdropCard from '../../../../components/BackdropCard';

const PlaylistMovies: React.FC = () => {
  return (
    <Wrapper>
      <ProfileHeader followers={0} following={0} playlists={0} />

      <Main>
        <PlaylistHeader>
          <Tabs>
            <Tab selected>
              <Link to="/profile/playlist/movies">FILMES</Link>
            </Tab>
            <Tab>
              <Link to="/profile/playlist/tvseries">SÉRIES</Link>
            </Tab>
          </Tabs>
        </PlaylistHeader>

        <PlaylistTitle>
          <img
            src="https://ui-avatars.com/api/?rounded=true&size=128&name=Gabriel+Matheus"
            alt="icon"
          />
          <span>best terror movies</span>
          <button type="button" onClick={() => console.log('editing')}>
            <EditIcon />
          </button>
        </PlaylistTitle>

        <MoviesContainer>
          <SectionCards>
            <BackdropCard />
            <BackdropCard />
            <BackdropCard />
            <BackdropCard />
          </SectionCards>
        </MoviesContainer>
      </Main>
    </Wrapper>
  );
};

export default PlaylistMovies;
