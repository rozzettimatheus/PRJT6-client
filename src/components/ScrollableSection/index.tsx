import React from 'react';

import { Section, Title, List, Card } from './styles';

interface Media {
  id: number;
  poster_path: string;
}

interface ScrollSectionProps {
  title: string;
  data: Array<Media>;
  type: 'tvseries' | 'movie';
}

const ScrollableSection: React.FC<ScrollSectionProps> = ({
  title,
  data,
  type,
}) => {
  return (
    <Section>
      <Title>
        <h3>{title}</h3>
      </Title>

      <List>
        {data &&
          data.map(media => (
            <Card
              key={media.id}
              style={{ backgroundImage: `url(${media.poster_path})` }}
              to={`/${type}/${media.id}`}
            />
          ))}
      </List>
    </Section>
  );
};

export default ScrollableSection;
