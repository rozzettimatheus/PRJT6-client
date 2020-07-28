import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

import { ReactComponent as LogoSVG } from '../../assets/logo-outlined.svg';

export const Container = styled.header`
  height: var(--nav-height);
  border-bottom: 2px solid var(--border-color);
  background-color: var(--bg-nav);

  a {
    cursor: pointer !important;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  width: 90%;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 4px 0;
`;

export const Logo = styled(LogoSVG)`
  height: 50px;
  width: 50px;
`;

export const NavContainer = styled.ul`
  display: flex;
  flex: 3;

  > ul {
    display: flex;
    width: 100%;
    justify-content: space-around;

    li {
      a {
        padding: 20px 35px;
        transition: color 0.3s ease;

        &:not(.active):hover {
          border-radius: var(--border-radius);
          background: ${lighten(0.04, '#292929')};
        }

        &.active {
          border-bottom: 2px solid var(--purple);

          svg {
            color: var(--purple);
          }
        }
      }
    }
  }
`;

export const NavIcons = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  height: 100%;

  > button {
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--bg-nav);
    padding: 2px;

    img {
      height: 30px;
      border-radius: 50%;
    }

    &.active {
      border: 2px solid var(--text);
    }
  }

  > ul {
    display: flex;
    width: 100%;
    justify-content: flex-end;

    li {
      padding: 15px 0 15px 6px;
    }
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40%);
  } 

  to {
    opacity: 1;
    transform: translateX(-50%);
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 54px;
  width: 202px;
  transform: translateX(-50%);
  background: var(--bg-nav);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: all 0.3s;
  z-index: 100;

  animation: ${appearFromLeft} 0.4s;
`;

export const ShareButton = styled.button`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  border: 0;
  transition: background-color 0.3s;
  padding: 13px 15px;
  font-size: 14px;
  color: var(--text);
  transition: all 0.3s;
  background: transparent;

  svg {
    height: 20px;
    width: 20px;
    margin-right: 10px;
    color: var(--text);
    transition: all 0.3s;
  }

  &:hover {
    background-color: var(--hover-color);
    color: var(--white);

    svg {
      color: var(--white);
    }
  }
`;
