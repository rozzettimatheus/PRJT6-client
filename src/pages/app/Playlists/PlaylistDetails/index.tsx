import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import api from '../../../../services/api';

import Container from '../../../../components/Container';
import ScrollableSection from '../../../../components/ScrollableSection';

import avatar from '../../../../assets/avatar.png';

import {
  Header,
  FollowersSection,
  Title,
  FollowersList,
  AvatarUser,
  Empty,
} from './styles';

import Loader from '../../../../components/Loader';

interface RouteParam {
  id: string;
}

interface Follower {
  id: number;
  image: string | null;
  name: string;
  userId: number;
}

interface Item {
  id: number;
  itemType: string;
  poster_path: string;
}

interface PlaylistResponse {
  id: number;
  name: string;
  movies: Array<Item>;
  series: Array<Item>;
  playlistFollowers: Array<Follower>;
  qtdFollowers: number;
  qtdMovie: number;
  qtdTv: number;
  userId: number;
}

const PlaylistDetails: React.FC = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { params } = useRouteMatch<RouteParam>();
  const [playlistData, setPlaylistData] = useState<PlaylistResponse>(
    {} as PlaylistResponse,
  );

  useEffect(() => {
    setLoading(true);
    api.get(`playlist/detail/${params.id}`).then(response => {
      const {
        id,
        name,
        userId,
        items,
        playlistfollowers: playlistFollowers,
      } = response.data;

      const movies = items.filter(
        (item: Item) => item.itemType.toLocaleLowerCase() === 'movie',
      );

      const series = items.filter(
        (item: Item) => item.itemType.toLocaleLowerCase() === 'tv',
      );

      setPlaylistData({
        id,
        name,
        qtdFollowers: playlistFollowers.length,
        qtdMovie: movies.length,
        qtdTv: series.length,
        userId,
        movies,
        series,
        playlistFollowers,
      });
    });

    setLoading(false);
  }, [params.id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Header>
        <h2>{playlistData.name}</h2>

        <div>
          <span>
            <strong>{playlistData.qtdFollowers}</strong>
            {'  '}Followers
          </span>

          <span>
            <strong>{playlistData.qtdMovie}</strong>
            {'  '}Movies
          </span>

          <span>
            <strong>{playlistData.qtdTv}</strong>
            {'  '}TV Series
          </span>
        </div>
      </Header>

      {playlistData.playlistFollowers && (
        <FollowersSection>
          <Title>
            <h3>Followers</h3>
          </Title>
          <FollowersList>
            {playlistData.qtdFollowers ? (
              playlistData.playlistFollowers.map(follower => (
                <AvatarUser
                  key={follower.id}
                  onClick={() => history.push(`/profiles/${follower.id}`)}
                >
                  <img
                    src={
                      follower.image
                        ? `https://cineplus.herokuapp.com/imagens/${follower.image}`
                        : avatar
                    }
                    alt={follower.name}
                  />
                  <span>{follower.name}</span>
                </AvatarUser>
              ))
            ) : (
              <Empty>
                <p>Ops, no followers here :(</p>
              </Empty>
            )}
          </FollowersList>
        </FollowersSection>
      )}

      {playlistData.movies && (
        <ScrollableSection
          title="Movies"
          type="movie"
          data={playlistData.movies}
          fallback="Ops, no movies here :("
        />
      )}

      {playlistData.series && (
        <ScrollableSection
          title="TV Series"
          type="tv"
          data={playlistData.series}
          fallback="Ops, no tv series here :("
        />
      )}
    </Container>
  );
};

export default PlaylistDetails;
