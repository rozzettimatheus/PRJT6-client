import React from 'react';

import Card from '../Card';

import { Section, Title, List, Empty } from './styles';

interface Media {
  id: number;
  poster_path: string;
  movietvshowId: number;
}

interface Delete {
  deletable: boolean;
  // onClick: () => void;
}

interface ScrollSectionProps {
  title: string;
  data: Array<Media>;
  type: 'tv' | 'movie';
  fallback?: string;
  deleteProps?: Delete;
  playId?: number;
}

const ScrollableSection: React.FC<ScrollSectionProps> = ({
  title,
  data,
  type,
  fallback,
  deleteProps,
  playId,
}) => {
  return (
    <Section>
      <Title>
        <h3>{title}</h3>
      </Title>

      <List>
        {data.length ? (
          data.map(media => (
            <Card
              isDeletable={deleteProps?.deletable}
              key={media.id}
              item={media}
              mediaType={type}
              playlist={playId}
            />
          ))
        ) : (
          <Empty>
            <p>{fallback}</p>
          </Empty>
        )}
      </List>
    </Section>
  );
};

export default ScrollableSection;
