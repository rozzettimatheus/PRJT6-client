import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import backgroundCover from '../../../../assets/background.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch; /** estica ao máximo */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /** centralizar o form */
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  } 

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /** centralizar o form */
  justify-content: center;

  animation: ${appearFromLeft} 900ms;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  /** diretamente do pai */
  > a {
    color: #ff9000;
    display: flex;
    align-items: center;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundCover}) no-repeat center;
  background-size: cover;
`;