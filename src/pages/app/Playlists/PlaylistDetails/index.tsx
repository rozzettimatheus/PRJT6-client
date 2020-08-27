import React, { useState, useEffect, useCallback } from 'react';
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom';

import api from '../../../../services/api';
import { useAuth } from '../../../../hooks/auth';

import Container from '../../../../components/Container';
import ScrollableSection from '../../../../components/ScrollableSection';
import EditPlaylistNameModal from '../../../../components/EditPlaylistNameModal';

import avatar from '../../../../assets/avatar.png';

import {
  Header,
  EditButton,
  EditIcon,
  FollowersSection,
  Title,
  FollowersList,
  AvatarUser,
  Empty,
  FollowButton,
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
  movietvshowId: number;
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
  const { user, updateUser } = useAuth();
  const { pathname } = useLocation();
  const [playlistId] = useState(() => {
    const [, , id] = pathname.split('/');

    return Number(id);
  });
  const history = useHistory();
  const { params } = useRouteMatch<RouteParam>();
  const [own, setOwn] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [playlistData, setPlaylistData] = useState<PlaylistResponse>(
    {} as PlaylistResponse,
  );
  const [isSubscribed, setSubscription] = useState(() => {
    const playlistId = Number(pathname.split('/').slice(-1)[0]);

    const playlist = user.playlists.find(item => item.id === playlistId);

    return !!playlist;
  });

  const toggleSubscription = useCallback(async () => {
    const playlistId = Number(pathname.split('/').slice(-1)[0]);

    if (!isSubscribed) {
      await api.post(`playlist/follow/${playlistId}`);
    } else {
      await api.delete(`playlist/unfollow/${playlistId}`);
    }

    setSubscription(!isSubscribed);

    const { data } = await api.get('user/details');

    updateUser(data);
  }, [pathname, isSubscribed, updateUser]);

  useEffect(() => {
    api.get(`playlist/detail/${params.id}`).then(response => {
      const {
        id,
        name,
        userId,
        items,
        playlistfollowers: playlistFollowers,
      } = response.data;

      if (userId === user.id) {
        setOwn(true);
      }

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
  }, [params.id, user.id, editModal]);

  if (!playlistData.name) {
    return <Loader />;
  }

  return (
    <Container>
      <Header>
        <h2>
          {playlistData.name}
          {own && (
            <EditButton onClick={() => setEditModal(true)} type="button">
              <EditIcon />
            </EditButton>
          )}
        </h2>

        {!own && (
          <FollowButton
            className={isSubscribed ? 'active' : ''}
            type="button"
            onClick={toggleSubscription}
          >
            {isSubscribed ? 'Following' : 'Follow'}
          </FollowButton>
        )}

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
          deleteProps={{
            deletable: own,
          }}
          playId={playlistId}
        />
      )}

      {playlistData.series && (
        <ScrollableSection
          title="TV Series"
          type="tv"
          data={playlistData.series}
          fallback="Ops, no tv series here :("
          playId={playlistId}
          deleteProps={{
            deletable: own,
          }}
        />
      )}

      {own && (
        <EditPlaylistNameModal
          close={() => setEditModal(false)}
          isOpen={editModal}
          current={{ id: playlistData.id, name: playlistData.name }}
        />
      )}
    </Container>
  );
};

export default PlaylistDetails;
