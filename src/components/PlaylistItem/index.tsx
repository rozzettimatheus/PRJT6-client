import React from 'react';

import {
  Container,
  PlaylistInfo,
  Delete,
  DeleteIcon,
  PlaylistIcon,
  PlaylistInfoContainer,
} from './styles';

const PlaylistItem: React.FC = () => {
  return (
    <Container>
      <div>
        <PlaylistInfoContainer>
          <div>
            <div>
              <PlaylistIcon />
            </div>
          </div>

          <PlaylistInfo />
        </PlaylistInfoContainer>
        <Delete>
          <button type="button">
            <DeleteIcon />
          </button>
        </Delete>
      </div>
    </Container>
  );
};

export default PlaylistItem;
