import React from 'react';

import { Card, ImageContainer, InfoContainer } from './styles';

const BackdropCard: React.FC = () => {
  return (
    <Card type="button" onClick={() => console.log('card')}>
      <ImageContainer>
        <img
          src="https://m.media-amazon.com/images/M/MV5BMzk5OTIyZGUtNTc3Yi00ZTRhLWFlNjItMTdmNWRhN2IxNzc0XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SY1000_SX1500_AL_.jpg"
          alt="poster"
        />
      </ImageContainer>

      <InfoContainer>
        <strong>Aladdin</strong>
        <span>(2020)</span>
      </InfoContainer>
    </Card>
  );
};

export default BackdropCard;
