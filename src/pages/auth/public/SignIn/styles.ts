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
  align-items: center;
  justify-content: center;
  width: 50%;
  max-width: 420px;
  /* border: 1px solid red; */

  animation: ${appearFromLeft} 900ms;

  > img {
    height: 70px;
  }

  form {
    margin: 60px 0;
    width: 100%;
    text-align: center;

    h1 {
      margin-bottom: 2.4rem;
      font-size: 2.4rem;
    }

    a {
      color: var(--title-lighter);
      display: block;
      margin-top: 2.4rem;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: var(--purple);
    display: flex;
    align-items: center;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: ${shade(0.2, '#7159c1')};
    }

    svg {
      margin-right: 14px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundCover}) no-repeat center;
  opacity: 0.7;
  background-size: cover;
`;
