import React from 'react';
import { StyledIconProps } from '@styled-icons/styled-icon';

import { MenuLink } from './styles';

interface Props {
  icon?: React.ComponentType<StyledIconProps>;
  page: string;
  children: string;
  customStyle?: object;
  onClick?: () => void;
}

const DropdownItem: React.FC<Props> = ({
  children,
  icon: Icon,
  page,
  customStyle,
  onClick,
}) => {
  return (
    <MenuLink onClick={onClick} style={customStyle && customStyle} to={page}>
      {Icon && <Icon />}
      {children}
    </MenuLink>
  );
};

export default DropdownItem;
