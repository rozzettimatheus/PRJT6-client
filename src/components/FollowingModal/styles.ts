import styled from 'styled-components';
import { X } from '@styled-icons/heroicons-outline';
import { lighten } from 'polished';

export const Content = styled.div`
  width: 100%;
  height: 280px;
  padding: 1rem 0.5rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--border-color);
    border-radius: 2px;
    transition: background-color 0.2s;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${lighten(0.06, '#3a3a3a')};
  }
`;

export const User = styled.ul`
  width: 100%;

  .card {
    border-radius: var(--border-radius);
    transition: all 0.2s ease;

    & + li {
      margin-top: 6px;
    }

    &:hover {
      background-color: ${lighten(0.05, '#313131')};

      .delete-btn {
        opacity: 1;
      }
    }
  }

  .container {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .wrapper {
    display: flex;
    align-items: center;

    img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem;

    strong {
      color: var(--text);
      font-size: 1.8rem;
    }

    span {
      font-size: 1.4rem;
      margin-top: 8px;
      color: var(--text-darken);
    }
  }

  .delete-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: 50%;
    background: var(--error);
    padding: 0.5rem;
    opacity: 0;
    margin-right: 12px;
  }
`;

export const DeleteIcon = styled(X)`
  height: 15px;
  width: 15px;
  color: var(--text-accent);
`;
