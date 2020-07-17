import React, { LiHTMLAttributes } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledIconProps } from '@styled-icons/styled-icon';

import { ListItem } from './styles';

export interface Props extends LiHTMLAttributes<HTMLLIElement> {
  page: string;
  icon?: React.ComponentType<StyledIconProps>;
}

const NavItem: React.FC<Props> = ({ page, children, icon: Icon }) => {
  return (
    <ListItem>
      <NavLink to={page} activeClassName="active">
        {Icon && <Icon size={20} color="#fff" />}
        {children}
      </NavLink>
    </ListItem>
  );
};

export default NavItem;
