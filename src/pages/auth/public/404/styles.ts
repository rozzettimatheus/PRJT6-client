import styled from 'styled-components';

import background from '../../../../assets/background.jpg';

export const Container = styled.div`
  height: calc(100vh - 60px);
  background: url(${background}) no-repeat;
  background-attachment: fixed;
  background-size: cover;
  -webkit-filter: blur(6px);
  -moz-filter: blur(6px);
  -o-filter: blur(6px);
  -ms-filter: blur(6px);
  filter: blur(6px);
  opacity: var(--bg-cover-opacity);
`;
export const Content = styled.div`
  width: 70%;
  max-width: var(--max-width);
  background: rgba(0, 0, 0, 0.7);
  border-radius: var(--border-radius);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 2.7rem;
  text-align: center;

  h2 {
    color: var(--text);
  }
`;
