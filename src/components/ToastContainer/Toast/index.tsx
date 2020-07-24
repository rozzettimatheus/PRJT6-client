import React, { useEffect } from 'react';
import {
  X,
  CheckCircle,
  InformationCircle,
  ExclamationCircle,
} from '@styled-icons/heroicons-outline';

import { useToast, ToastMessage } from '../../../hooks/toast';

import { Container } from './styles';

interface ToastDataProps {
  toast: ToastMessage;
  style: object;
}

const icons = {
  info: <InformationCircle size={24} />,
  error: <ExclamationCircle size={24} />,
  success: <CheckCircle size={24} />,
};

const Toast: React.FC<ToastDataProps> = ({ toast, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, toast.id]);

  return (
    <Container
      key={toast.id}
      hasDescription={Number(!!toast.description)}
      type={toast.type}
      style={style}
    >
      {icons[toast.type || 'info']}

      <div>
        <strong>{toast.title}</strong>
        {toast.description && <p>{toast.description}</p>}
      </div>

      <button onClick={() => removeToast(toast.id)} type="button">
        <X size={18} />
      </button>
    </Container>
  );
};

export default Toast;
