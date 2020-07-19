import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Adjustments,
  User,
  Users,
  Search,
  Share,
} from 'styled-icons/heroicons-outline';

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
  const avatarRef = useRef();

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
            alt="Gabriel"
            src="https://instagram.faqa1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/100987893_249534669715410_46825820815097856_n.jpg?_nc_ht=instagram.faqa1-1.fna.fbcdn.net&_nc_ohc=e0umfiZrUkgAX9uXhOH&oh=57b5e5212c48b7ad1b0983c31dc4bc30&oe=5F3EC67E"
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
