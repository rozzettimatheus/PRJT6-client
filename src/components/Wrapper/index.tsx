import React from 'react';

import { Container, Content } from './styles';

interface ClickProps {
  onClick?: () => void;
}

const Wrapper: React.FC<ClickProps> = ({ children, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Content>{children}</Content>
    </Container>
  );
};

export default Wrapper;
