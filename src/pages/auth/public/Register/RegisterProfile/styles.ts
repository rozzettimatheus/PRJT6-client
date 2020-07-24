import styled, { keyframes } from 'styled-components';

import { ReactComponent as LogoSVG } from '../../../../../assets/logo-outlined.svg';
import backgroundCover from '../../../../../assets/background.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: var(--wrapper-max-width);
`;

export const Logo = styled(LogoSVG)`
  height: var(--logo);
  max-height: var(--logo);

  @media (max-width: 550px) {
    & {
      height: var(--logo-media);
    }
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
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
  width: var(--animated-container);
  max-width: var(--form-max-width);

  animation: ${appearFromRight} 900ms;

  @media (max-width: 650px) {
    width: var(--animated-container-media);
  }

  form {
    margin: var(--form-margin);
    width: 100%;
    text-align: center;

    h1 {
      margin-bottom: var(--form-title-size);
      font-size: var(--form-title-margin-bottom);
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundCover}) no-repeat center;
  opacity: var(--bg-cover-opacity);
  background-size: cover;
`;
