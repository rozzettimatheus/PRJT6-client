import styled from 'styled-components';
import { X } from '@styled-icons/heroicons-outline';
import { Form as Unform } from '@unform/web';
import { lighten } from 'polished';

export const Heading = styled.div`
  width: 100%;
  height: 50px;
  padding: 1rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);

  h2 {
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--white);
    letter-spacing: 0.4px;
  }

  button {
    border: 0;
    background: transparent;
  }
`;

export const XIcon = styled(X)`
  color: var(--text-darken);
  height: 30px;
  width: 30px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 50px);
`;

export const Form = styled(Unform)`
  width: 80%;
  height: 180px;
`;

export const Buttons = styled.div`
  width: 100%;
  height: 70px;
  margin-top: auto;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  .btn {
    padding: 0.6rem 1.2rem;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 0.4px;

    & + button {
      margin-left: 0.8rem;
    }
  }

  .add {
    background: var(--success);
    border: 2px solid var(--success);
    color: var(--white);
    transition: all 0.2s ease;

    &:hover {
      background-color: ${lighten(0.06, '#078714')};
      border-color: ${lighten(0.06, '#078714')};
    }
  }

  .cancel {
    background: transparent;
    border: 2px solid var(--error);
    color: var(--error);
    transition: all 0.2s ease;

    &:hover {
      color: ${lighten(0.04, '#f44336')};
      border-color: ${lighten(0.04, '#f44336')};
    }
  }
`;
