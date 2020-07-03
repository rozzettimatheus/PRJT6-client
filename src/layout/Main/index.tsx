import React from 'react';

import { Wrapper } from './styles';

import Header from '../../components/Header';

const Main: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default Main;
