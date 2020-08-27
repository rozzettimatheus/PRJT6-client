import React, { useState, useRef, useCallback, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Tv,
  Movie,
  CalendarEvent,
  PlayCircle,
  Search,
} from '@styled-icons/boxicons-regular';
import { User, Adjustments } from '@styled-icons/heroicons-outline';

import { useAuth } from '../../hooks/auth';

import DropdownItem from '../DropdownItem';

import avatar from '../../assets/avatar.png';

import {
  Container,
  Content,
  Logo,
  NavContainer,
  NavIcons,
  LogoContainer,
  DropdownMenu,
} from './styles';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const nodeRef = useRef(document.createElement('div'));
  const { signOut, user } = useAuth();

  const handleToggleDropdown = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleClick = useCallback(e => {
    if (nodeRef.current.contains(e.target)) {
      return;
    }

    setOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [handleClick]);

  return (
    <Container>
      <Content>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <NavContainer>
          <ul>
            <li>
              <NavLink to="/movies" title="Search for movies">
                <Movie color="#dad7d2" size={25} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/tvseries" title="Search for tv series">
                <Tv color="#dad7d2" size={25} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/upcoming/movies?page=1"
                title="See the most upcoming movies coming through"
              >
                <CalendarEvent color="#dad7d2" size={25} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/playlists"
                title="See the top playlists in Cineplus"
              >
                <PlayCircle color="#dad7d2" size={25} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/search" title="Search everything in Cineplus">
                <Search color="#dad7d2" size={25} />
              </NavLink>
            </li>
          </ul>
        </NavContainer>

        <NavIcons ref={nodeRef}>
          <button
            className={open ? 'active' : ''}
            onClick={handleToggleDropdown}
            type="button"
          >
            <img
              src={
                user.profile.image
                  ? `https://cineplus.herokuapp.com/imagens/${user.profile.image}`
                  : avatar
              }
              alt={user.profile.fullname}
            />

            {open && (
              <DropdownMenu>
                <DropdownItem page="/profile" icon={User} title="Profile" />
                <DropdownItem
                  page="/account/edit"
                  icon={Adjustments}
                  title="Settings"
                />
                <DropdownItem
                  page="/"
                  title="Log out"
                  customStyle={{ borderTop: '1px solid var(--border-color)' }}
                  onClick={signOut}
                />
              </DropdownMenu>
            )}
          </button>
        </NavIcons>
      </Content>
    </Container>
  );
};

export default Header;
