import React, { useMemo } from 'react';

import avatar from '../../assets/avatar.png';

import { Container, Wrapper } from './styles';

interface ItemProps {
  fullname: string;
  image: string | null;
  searchId: number;
}

const UserItem: React.FC<ItemProps> = ({ fullname, image, searchId }) => {
  const imageSrc = useMemo(() => {
    return image ? `https://cineplus.herokuapp.com/imagens/${image}` : avatar;
  }, [image]);

  return (
    <Container to={`/profiles/${searchId}`}>
      <Wrapper>
        <div className="image-container">
          <img src={imageSrc} alt={fullname} />
        </div>
        <div className="name-container">
          <strong>{fullname}</strong>
        </div>
      </Wrapper>
    </Container>
  );
};

export default UserItem;
