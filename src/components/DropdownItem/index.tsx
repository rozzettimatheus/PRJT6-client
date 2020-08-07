import React from 'react';
import { StyledIconProps } from '@styled-icons/styled-icon';

import { MenuLink } from './styles';

interface Props {
  icon?: React.ComponentType<StyledIconProps>;
  page: string;
  title?: string;
  customStyle?: object;
  onClick?: () => void;
}

const DropdownItem: React.FC<Props> = ({
  title,
  icon: Icon,
  page,
  customStyle,
  onClick,
}) => {
  return (
    <MenuLink onClick={onClick} style={customStyle && customStyle} to={page}>
      {Icon && <Icon />}
      {title}
    </MenuLink>
  );
};

export default DropdownItem;
