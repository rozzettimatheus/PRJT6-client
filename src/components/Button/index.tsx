import React, { ButtonHTMLAttributes } from 'react';

import { ReactComponent as LoaderSVG } from '../../assets/spinner.svg';
import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<IButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <Container type="button" {...rest} disabled={loading}>
      {loading ? (
        <LoaderSVG style={{ height: '40px', background: 'transparent' }} />
      ) : (
        children
      )}
    </Container>
  );
};

export default Button;
