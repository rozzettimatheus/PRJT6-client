import React from 'react';

import { ReactComponent as SpinnerSVG } from '../../assets/spinner.svg';

import { Container } from './styles';

const Loader: React.FC = () => {
  return (
    <Container>
      <SpinnerSVG
        style={{ background: 'transparent', height: '55px', width: '55px' }}
      />
    </Container>
  );
};

export default Loader;
