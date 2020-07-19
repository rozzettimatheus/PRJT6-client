import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';
import YouTube from 'react-youtube';
import { ChevronDown } from 'styled-icons/heroicons-outline';

export const GenresContainer = styled.div`
  display: flex;
  padding: 28px 0;
  justify-content: flex-end;
  width: 1100px;
`;

export const GenresSelect = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  background: transparent;
  border: 0;
  position: relative;
  border-radius: var(--border-radius);
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--hover-color);
  }

  color: var(--text);
  font-size: 16px;
  font-weight: 500;
`;

export const ArrowDown = styled(ChevronDown)`
  height: 20px;
  width: 20px;
  color: var(--text);
  margin-left: 5px;
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translate(-25%,-20%);
  } 

  to {
    opacity: 1;
    transform: translateY(-25%, 0%);
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  width: 202px;
  transform: translateX(-25%);
  background: var(--bg-nav);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: all 0.2s;

  animation: ${appearFromTop} 0.2s;
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
`;

export const TVSeriesContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const GenreSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 25px;
`;

export const GenreTitle = styled.div`
  display: flex;
  justify-content: flex-end;

  h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 14px;

    color: var(--title);
  }
`;

export const TVSeriesList = styled.div`
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

export const PosterCard = styled.button`
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

  & + button {
    margin-left: 42px;
  }
`;
