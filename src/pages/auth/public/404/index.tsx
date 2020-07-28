import React from 'react';

import { Container, Content } from './styles';

const Page404: React.FC = () => {
  return (
    <>
      <Container />
      <Content>
        <h2>Sorry, the request URL was not found or it was removed.</h2>
      </Content>
    </>
  );
};

export default Page404;
