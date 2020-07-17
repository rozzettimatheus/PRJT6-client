import React from 'react';
import { StyledIconProps } from '@styled-icons/styled-icon';

import { MenuLink } from './styles';

interface Props {
  icon?: React.ComponentType<StyledIconProps>;
  page: string;
  children: string;
  customStyle?: object;
}

const DropdownItem: React.FC<Props> = ({
  children,
  icon: Icon,
  page,
  customStyle,
}) => {
  return (
    <MenuLink style={customStyle && customStyle} to={page}>
      {Icon && <Icon />}
      {children}
    </MenuLink>
  );
};

export default DropdownItem;
