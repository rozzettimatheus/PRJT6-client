import React, { useCallback } from 'react';

import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import { Card as CardComponent, XIcon } from './styles';

interface Item {
  id: number;
  poster_path: string;
  movietvshowId: number;
}

interface Props {
  item: Item;
  mediaType: 'movie' | 'tv';
  isDeletable?: boolean;
  playlist?: number;
}

const Card: React.FC<Props> = ({ item, mediaType, isDeletable, playlist }) => {
  const { updateUser } = useAuth();
  const handleDelete = useCallback(
    async (e: any) => {
      e.preventDefault();

      await api.delete(`/playlist/item/delete/${playlist}/${item.id}`);

      const { data } = await api.get('/user/details');

      updateUser(data);
    },
    [item, playlist, updateUser],
  );

  return (
    <CardComponent
      to={`/${mediaType}/${item.id}`}
      style={{ backgroundImage: `url(${item.poster_path})` }}
    >
      {isDeletable && (
        <button onClick={handleDelete} type="button">
          <XIcon />
        </button>
      )}
    </CardComponent>
  );
};

export default Card;
