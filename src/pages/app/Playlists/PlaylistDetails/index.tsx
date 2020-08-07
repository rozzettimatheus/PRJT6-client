import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import api from '../../../../services/api';

import Container from '../../../../components/Container';

import {
  Header,
  FollowersSection,
  Title,
  FollowersList,
  AvatarUser,
  MediaSection,
  MediaList,
  MediaCard,
} from './styles';

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
  movietvshowId: number;
}

interface PlaylistResponse {
  id: number;
  name: string;
  items: Array<Item>;
  playlistFollowers: Array<Follower>;
  isPrivate: boolean;
  qtdFollowers: number;
  qtdMovie: number;
  qtdTv: number;
  userId: number;
}

const PlaylistDetails: React.FC = () => {
  const { params } = useRouteMatch<RouteParam>();
  const [playlistData, setPlaylistData] = useState<PlaylistResponse>(
    {} as PlaylistResponse,
  );

  useEffect(() => {
    api.get(`playlist/detail/${params.id}`).then(response => {
      const {
        id,
        name,
        private: isPrivate,
        qtdFollowers,
        qtdMovie,
        qtdTv,
        userId,
        items,
        playlistfollowers: playlistFollowers,
      } = response.data;

      setPlaylistData({
        id,
        name,
        isPrivate,
        qtdFollowers,
        qtdMovie,
        qtdTv,
        userId,
        items,
        playlistFollowers,
      });
    });
  }, [params.id]);

  return (
    <Container>
      <Header>
        <img
          src="https://ui-avatars.com/api/?rounded=true&size=128"
          alt={playlistData.name}
        />

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

      <FollowersSection>
        <Title>
          <h3>Followers</h3>
        </Title>
        {playlistData.playlistFollowers ? (
          <FollowersList>
            {playlistData.playlistFollowers.map(follower => (
              <AvatarUser key={follower.id}>
                <img
                  src="https://instagram.faqa3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/100987893_249534669715410_46825820815097856_n.jpg?_nc_ht=instagram.faqa3-1.fna.fbcdn.net&_nc_ohc=dszZJEMy3KMAX_0k5Xy&oh=1f47299238c9be020670134584b46411&oe=5F4E987E"
                  alt={follower.name}
                />
                <span>{follower.name}</span>
              </AvatarUser>
            ))}
          </FollowersList>
        ) : (
          <div>
            <h1>vazio</h1>
          </div>
        )}
      </FollowersSection>

      <MediaSection>
        <Title>
          <h3>Movies</h3>
        </Title>
        <MediaList>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
            <MediaCard
              key={number}
              to="/"
              style={{
                backgroundImage: `url(https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg)`,
              }}
            />
          ))}
        </MediaList>
      </MediaSection>

      <MediaSection>
        <Title>
          <h3>TV Series</h3>
        </Title>
        <MediaList>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
            <MediaCard
              key={number}
              to="/"
              style={{
                backgroundImage: `url(https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg)`,
              }}
            />
          ))}
        </MediaList>
      </MediaSection>
    </Container>
  );
};

export default PlaylistDetails;
