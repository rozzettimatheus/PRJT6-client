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
  const formatItems = useMemo(() => {}, []);
  const formatFollowers = useMemo(() => {}, []);

  return (
    <Container to={page}>
      <div>
        <PlaylistInfoContainer>
          <AvatarWrapper>
            <div>
              <img
                src="https://ui-avatars.com/api/?rounded=true&size=128&name=Gabriel+Matheus"
                alt="icon"
              />
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
                  <strong>{items}</strong> itens salvos |{' '}
                  <strong>{followers}</strong> seguidores
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
