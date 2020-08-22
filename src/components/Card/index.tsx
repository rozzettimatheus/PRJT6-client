import React from 'react';

import { Card as CardComponent } from './styles';

interface Item {
  id: number;
  poster_path: string;
}

interface Props {
  item: Item;
  mediaType: 'movie' | 'tv';
}

const Card: React.FC<Props> = ({ item, mediaType }) => {
  return (
    <CardComponent
      to={`/${mediaType}/${item.id}`}
      style={{ backgroundImage: `url(${item.poster_path})` }}
    />
  );
};

export default Card;
