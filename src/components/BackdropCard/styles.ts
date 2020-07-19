import styled from 'styled-components';

export const Card = styled.button`
  grid-column-end: span 4;
  display: flex;
  flex-direction: column;
  background-color: var(--card-color);
  transition: all 0.3s ease 0s;
  border: 0;
  border-radius: var(--border-radius);
  overflow: hidden;

  &:hover {
    transform: translateY(-7px);
    background-color: var(--hover-color);

    img {
      filter: brightness(100%);
    }

    strong {
      color: var(--white);
    }

    span {
      color: var(--text);
    }
  }

  @media only screen and (max-width: 1000px) {
    & {
      grid-column-end: span 6;
    }
  }

  @media only screen and (max-width: 900px) {
    & {
      grid-column-end: span 12;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  padding-top: 56.26%; /** aspect ration 9/16 */
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease 0s;
    filter: brightness(50%);
  }
`;

export const InfoContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: start;
  width: 100%;

  strong {
    color: var(--edit-icon);
    font-size: 2.4rem;
    font-weight: 500;
    transition: all 0.3s ease 0s;
  }

  span {
    padding-top: 0.5rem;
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--text-darken);
    transition: all 0.3s ease 0s;
  }
`;
