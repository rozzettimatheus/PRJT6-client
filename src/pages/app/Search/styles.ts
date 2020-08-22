import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  max-width: var(--max-width);
  width: 100%;
  border-bottom: 2px solid var(--border-color);
  padding: 1.4rem 0;
  text-align: end;
  margin-top: 2.4rem;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    color: var(--text);
  }
`;

export const SearchSection = styled.section`
  max-width: var(--max-width);
  width: 90%;
  padding: 1.3rem;
  height: 120px;
  display: flex;
  align-items: center;

  form {
    display: flex;
    width: 100%;
    align-items: center;
  }
`;

export const SubmitButton = styled.button`
  border: 0;
  border-radius: var(--border-radius);
  height: 5rem;
  width: 90px;
  padding: 0 1.4rem;
  margin-left: 0.5rem;
  background: var(--purple);
  color: var(--white);
  font-weight: 700;
  text-transform: uppercase;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#bb86fc')};
  }
`;

export const Query = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  padding: 1rem;
`;

export const QueryGrid = styled.section`
  width: 100%;
  display: grid;
  grid-gap: 30px;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(168px, 1fr));
`;

export const PosterCard = styled.button`
  height: 225px;
  width: 168px;
  display: flex;
  justify-content: center;
  position: relative;
  border: 0;
  border-radius: var(--border-radius);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-7px);
  }
`;
