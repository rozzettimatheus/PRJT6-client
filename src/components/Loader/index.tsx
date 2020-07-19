import React from 'react';

import { ReactComponent as SpinnerSVG } from '../../assets/spinner.svg';

import { Container } from './styles';

const Loader: React.FC = () => {
  return (
    <Container>
      <SpinnerSVG
        style={{ background: 'transparent', height: '70px', width: '70px' }}
      />
    </Container>
  );
};

export default Loader;
