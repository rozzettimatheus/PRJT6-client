import React from 'react';
import { Link } from 'react-router-dom';
import {
  Adjustments,
  User,
  Users,
  Search,
  Share,
} from 'styled-icons/heroicons-outline';

import { useAuth } from '../../hooks/auth';

import avatar from '../../assets/avatar.png';

import {
  Container,
  Content,
  NavContainer,
  NavIcons,
  DropdownMenu,
} from './styles';

import NavItem from '../NavItem';
import AvatarButton from '../AvatarButton';
import DropdownItem from '../DropdownItem';

import logo from '../../assets/logo-outlined.svg';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/movies">
            <img src={logo} alt="CinePlus" />
          </Link>
        </nav>

        <nav>
          <NavContainer>
            <NavItem page="/movies">FILMES</NavItem>
            <NavItem page="/tvseries">SÉRIES TV</NavItem>
            <NavItem page="/upcoming">EM BREVE</NavItem>
            <NavItem page="/playlists">PLAYLISTS</NavItem>
          </NavContainer>
        </nav>

        <NavIcons>
          <NavItem page="/search" icon={Search} />
          <NavItem page="/people" icon={Users} />
          <AvatarButton
            alt={user.fullname}
            src={user.avatar ? user.avatar : avatar}
          >
            <DropdownMenu>
              <DropdownItem page="/profile" icon={User}>
                Perfil
              </DropdownItem>
              <DropdownItem page="/" icon={Share}>
                Compartilhar
              </DropdownItem>
              <DropdownItem page="/account/edit" icon={Adjustments}>
                Configurações
              </DropdownItem>
              <DropdownItem
                page="/"
                onClick={signOut}
                customStyle={{ borderTop: '1px solid var(--border-color)' }}
              >
                Sair
              </DropdownItem>
            </DropdownMenu>
          </AvatarButton>
        </NavIcons>
      </Content>
    </Container>
  );
};

export default Header;
