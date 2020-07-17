import React from 'react';
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

import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
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
            src="data:image/jpeg;base64,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"
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
