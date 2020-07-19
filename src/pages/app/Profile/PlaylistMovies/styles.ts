import styled, { css } from 'styled-components';
import { Edit } from 'styled-icons/boxicons-solid';

interface TabProps {
  selected?: boolean;
}

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-top: 1px solid var(--border-color);
  position: relative;
`;

export const PlaylistHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const Tabs = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
  width: 40%;
`;

export const Tab = styled.div<TabProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  width: 25%;

  ${props =>
    props.selected &&
    css`
      border-top: 1px solid var(--text);
    `}

  a {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    color: var(--disabled-text);
    font-size: 14px;
    font-weight: bold;

    ${props =>
      props.selected &&
      css`
        color: var(--text);
      `}
  }
`;

export const PlaylistTitle = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  top: -55px;
  padding: 1rem;

  img {
    height: 3.2rem;
    margin-right: 8px;
  }

  span {
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--text);
    letter-spacing: 0.3px;
  }

  button {
    height: 22px;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background: transparent;
    margin-left: 8px;
  }
`;

export const EditIcon = styled(Edit)`
  height: 18px;
  color: var(--edit-icon);
`;

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 60px)) 1fr;
  grid-gap: 40px;
  padding: 20px 0;

  @media only screen and (max-width: 900px) {
    & {
      grid-template-columns: 40px repeat(12, 1fr) 40px;
      grid-gap: 20px;
    }
  }

  @media only screen and (max-width: 860px) {
    & {
      grid-template-columns: 1fr repeat(10, 1fr) 1fr;
      grid-gap: 20px;
    }
  }

  @media only screen and (max-width: 810px) {
    & {
      grid-template-columns: 1fr repeat(6, 1fr) 1fr;
      grid-gap: 20px;
    }
  }

  @media only screen and (max-width: 740px) {
    & {
      grid-template-columns: 1fr repeat(4, 1fr) 1fr;
      grid-gap: 10px;
    }
  }
`;

export const SectionCards = styled.section`
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 60px));
  grid-gap: 40px;

  @media only screen and (max-width: 900px) {
    & {
      grid-column: 2 / span 12;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 20px;
    }
  }

  @media only screen and (max-width: 860px) {
    & {
      grid-column: 2 / span 10;
      grid-template-columns: repeat(10, 1fr);
      grid-gap: 20px;
    }
  }

  @media only screen and (max-width: 810px) {
    & {
      grid-column: 2 / span 6;
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 20px;
    }
  }

  @media only screen and (max-width: 740px) {
    & {
      grid-column: 2 / span 4;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;
    }
  }
`;
