import React from 'react';

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
}

const PlaylistItem: React.FC<Props> = ({ page }) => {
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
                <strong>Best Terror Movies</strong>
                <LockIcon />
              </div>
              <UserNumbers>
                <span>
                  <strong>20</strong> itens salvos | <strong>20</strong>{' '}
                  seguidores
                </span>
              </UserNumbers>
            </Info>
          </PlaylistInfo>
        </PlaylistInfoContainer>
        <Delete>
          {/* eslint-disable-next-line no-console */}
          <button type="button" onClick={() => console.log('excluiu')}>
            <DeleteIcon />
          </button>
        </Delete>
      </div>
    </Container>
  );
};

export default PlaylistItem;
