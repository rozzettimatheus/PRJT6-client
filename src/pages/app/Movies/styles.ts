import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';
import YouTube from 'react-youtube';
import { ChevronDown } from '@styled-icons/heroicons-outline';

export const Content = styled.div`
  max-width: var(--max-width);
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

export const GenresContainer = styled.div`
  padding: 2.8rem 0;
  width: 100%;
  max-width: var(--max-width);

  button {
    margin: 0 0 0 auto;
  }
`;

export const GenresSelect = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.2rem;
  background: transparent;
  border: 0;
  position: relative;
  border-radius: var(--border-radius);
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--hover-color);
  }

  color: var(--text);
  font-size: 1.6rem;
  font-weight: 500;
`;

export const ArrowDown = styled(ChevronDown)`
  height: 2rem;
  width: 2rem;
  color: var(--text);
  margin-left: 0.5rem;
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translate(-18%,-10%);
  } 

  to {
    opacity: 1;
    transform: translate(-18%, 0%);
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 42px;
  width: 202px;
  max-height: 350px;
  transform: translateX(-18%);
  background: var(--bg-nav);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  overflow-y: scroll;
  transition: all 0.4s;
  z-index: 1000;

  a {
    font-size: 1.4rem;
    padding: 1.4rem;
  }

  animation: ${appearFromTop} 0.3s;

  @media (max-height: 502px) {
    width: 160px;
    max-height: 270px;
    top: 35px;
  }

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--border-color);
    border-radius: var(--border-radius);
    transition: background-color 0.2s;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${lighten(0.06, '#3a3a3a')};
  }
`;

export const Player = styled(YouTube)`
  width: 854px;
  height: 480px;
  margin-bottom: 30px;

  @media only screen and (max-width: 1450px) {
    & {
      width: 640px;
      height: 360px;
    }
  }

  @media only screen and (max-width: 850px) {
    & {
      width: 426px;
      height: 240px;
    }
  }

  @media (max-width: 800px) {
    & {
      display: none;
    }
  }
`;

export const MoviesContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--max-width);
  flex-direction: column;
  margin-bottom: 45px;
`;

export const GenreSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const GenreTitle = styled.div`
  margin: 0 0 0 auto;

  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 14px;

    color: var(--title);
  }
`;

export const MoviesList = styled.div`
  display: flex;
  border-top: 2px solid var(--border-color);
  padding-top: 2.5rem;
  height: 300px;

  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--border-color);
    border-radius: var(--border-radius);
    transition: background-color 0.2s;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${lighten(0.06, '#3a3a3a')};
  }
`;

export const PosterCard = styled(Link)`
  min-width: 168px;
  height: 225px;
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

  & + a {
    margin-left: 42px;
  }
`;
