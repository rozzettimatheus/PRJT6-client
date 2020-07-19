import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  LiHTMLAttributes,
} from 'react';

import { ListItem } from './styles';

interface Props extends LiHTMLAttributes<HTMLLIElement> {
  src: string;
  alt: string;
}

const AvatarButton: React.FC<Props> = ({ src, alt, children }) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleToggleDropdown = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <ListItem>
      <button
        ref={buttonRef}
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
