import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

/**
 * Igual a uma interface vazia
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    // caso passe o type, o React reescreve
    <Container type="button" {...rest}>
      {loading ? 'Carregando...' : children}
    </Container>
  );
};

export default Button;
