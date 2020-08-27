import styled from 'styled-components';
import { ListPlus } from '@styled-icons/boxicons-regular';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 4.2rem;
`;

export const ImageContainer = styled.div`
  img {
    height: 70vh;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  margin-left: 2.2rem;
`;

export const Title = styled.div`
  margin-bottom: 1.5rem;

  h1 {
    font-size: 4rem;
    color: var(--text-accent);
  }
`;

export const Year = styled.div`
  strong {
    color: var(--text);
    font-size: 2.4rem;
  }
`;

export const Genres = styled.div`
  margin: 1.4rem 0;

  a {
    padding: 0.8rem 1.2rem;
    background: var(--card-color);
    margin-right: 12px;
    border-radius: var(--border-radius);
    color: var(--text);
    transition: all 0.2s;

    &:hover {
      background: var(--purple);
    }
  }
`;

export const Seasons = styled.div`
  margin-top: 1.3rem;
  display: flex;

  justify-content: flex-end;

  span {
    padding: 0.7rem;
    background: var(--hover-color);
    border-radius: var(--border-radius);
    color: var(--text-darken);
    margin: 1rem 12px 0 0;
  }
`;

export const Overview = styled.div`
  margin-top: 3.2rem;
  overflow: hidden;

  h4 {
    font-size: 2.2rem;
    color: var(--text);
  }

  p {
    line-height: 2.4rem;
    color: var(--text);
    margin-top: 1.4rem;
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  color: var(--text);
  height: 45px;
  align-self: flex-end;
  border: 0;
  background: transparent;
  padding: 0.5rem;
  transition: opacity 0.2s;
  font-weight: 700;

  &:hover {
    opacity: 0.7;

    svg {
      opacity: 0.7;
    }
  }
`;

export const AddIcon = styled(ListPlus)`
  height: 28px;
  width: 28px;
  color: var(--text);
  margin-right: 8px;
  transition: opacity 0.2s;
`;
