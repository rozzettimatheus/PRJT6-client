import React from 'react';

import Card from '../Card';

import { Section, Title, List, Empty } from './styles';

interface Media {
  id: number;
  poster_path: string;
}

interface ScrollSectionProps {
  title: string;
  data: Array<Media>;
  type: 'tv' | 'movie';
  fallback?: string;
}

const ScrollableSection: React.FC<ScrollSectionProps> = ({
  title,
  data,
  type,
  fallback,
}) => {
  return (
    <Section>
      <Title>
        <h3>{title}</h3>
      </Title>

      <List>
        {data.length ? (
          data.map(media => <Card item={media} mediaType={type} />)
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
