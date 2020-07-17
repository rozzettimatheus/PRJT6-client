import React, { useState, useCallback } from 'react';

import { ListItem } from './styles';

interface Props {
  src: string;
  alt: string;
}

const AvatarButton: React.FC<Props> = ({ src, alt, children }) => {
  const [open, setOpen] = useState(false);

  const handleToggleDropdown = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <ListItem>
      <button
        type="button"
        className={open ? 'active' : ''}
        onClick={handleToggleDropdown}
      >
        <img src={src} alt={alt} />
      </button>
      {open && children}
    </ListItem>
  );
};

export default AvatarButton;
