/* eslint-disable prefer-destructuring */
import React, { useCallback, useMemo } from 'react';

import randomUI from '../../utils/generateRandomColors';
import formatName from '../../utils/formatPlaylistName';

import {
  Container,
  PlaylistInfoContainer,
  AvatarWrapper,
  PlaylistInfo,
  Info,
  UserNumbers,
  LockIcon,
  Delete,
  DeleteIcon,
} from './styles';

interface Props {
  page: string;
  title: string;
  items: number;
  followers: number;
  isPrivate?: boolean;
  isDeletable?: boolean;
  onDelete?: any;
}

const PlaylistItem: React.FC<Props> = ({
  page,
  title,
  items,
  followers,
  isPrivate,
  isDeletable,
  onDelete,
}) => {
  const formatItems = useMemo(
    () => (items === 1 ? 'saved item' : 'saved items'),
    [items],
  );
  const formatFollowers = useMemo(
    () => (followers === 1 ? 'follower' : 'followers'),
    [followers],
  );

  const formatAvatarSrc = useCallback(() => {
    const { background, color } = randomUI();

    const { first, second } = formatName(title);

    return `https://ui-avatars.com/api/?name=${first}+${second}&rounded=true&background=${background}&color=${color}`;
  }, [title]);

  return (
    <Container to={page}>
      <div>
        <PlaylistInfoContainer>
          <AvatarWrapper>
            <div>
              <img src={formatAvatarSrc()} alt={title} />
            </div>
          </AvatarWrapper>

          <PlaylistInfo>
            <Info>
              <div>
                <strong>{title}</strong>
                {isPrivate && <LockIcon />}
              </div>
              <UserNumbers>
                <span>
                  <strong>{items}</strong> {formatItems} |{' '}
                  <strong>{followers}</strong> {formatFollowers}
                </span>
              </UserNumbers>
            </Info>
          </PlaylistInfo>
        </PlaylistInfoContainer>
        {isDeletable && (
          <Delete>
            <button type="button" onClick={onDelete}>
              <DeleteIcon />
            </button>
          </Delete>
        )}
      </div>
    </Container>
  );
};

export default PlaylistItem;
