import React, { useMemo } from 'react';

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
  AvatarIcon,
} from './styles';

interface Props {
  page: string;
  title: string;
  items: number;
  followers: number;
  isPrivate?: boolean;
  isDeletable?: boolean;
}

const PlaylistItem: React.FC<Props> = ({
  page,
  title,
  items,
  followers,
  isPrivate,
  isDeletable,
}) => {
  const formatItems = useMemo(
    () => (items === 1 ? 'item salvo' : 'items salvos'),
    [items],
  );
  const formatFollowers = useMemo(
    () => (followers === 1 ? 'seguidor' : 'seguidores'),
    [followers],
  );

  return (
    <Container to={page}>
      <div>
        <PlaylistInfoContainer>
          <AvatarWrapper>
            <div>
              <AvatarIcon />
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
            <button type="button" onClick={() => console.log('excluiu')}>
              <DeleteIcon />
            </button>
          </Delete>
        )}
      </div>
    </Container>
  );
};

export default PlaylistItem;
