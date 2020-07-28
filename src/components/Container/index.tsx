import React from 'react';

import { Wrapper } from './styles';

interface ClickProps {
  onClick?: () => void;
}

const Container: React.FC<ClickProps> = ({ children, onClick }) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default Container;
