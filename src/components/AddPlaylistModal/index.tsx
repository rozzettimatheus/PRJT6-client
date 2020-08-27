import React, { useCallback } from 'react';
import Modal from 'react-modal';
import { Movie } from '@styled-icons/boxicons-regular';

import { useAuth } from '../../hooks/auth';

import Input from '../Input';
import Checkbox from '../Checkbox';

import { Heading, XIcon, Content, Form, Buttons } from './styles';
import api from '../../services/api';

Modal.setAppElement('#root');

interface IAddPlaylist {
  isOpen: boolean;
  close: () => void;
}

interface CheckboxOption {
  id: string;
  value: string;
  label: string;
}

interface Data {
  name: string;
  isPrivate: Array<string>;
}

const checkboxOptions: CheckboxOption[] = [
  { id: 'isPrivate', value: 'private', label: 'Private' },
];

const AddPlaylistModal: React.FC<IAddPlaylist> = ({ isOpen, close }) => {
  const { updateUser } = useAuth();

  const handleSubmit = useCallback(
    async (data: Data) => {
      const { name, isPrivate } = data;

      const priv = !!isPrivate.length;

      await api.post('/playlist/register', {
        name,
        private: priv,
      });

      const { data: userData } = await api.get('/user/details');

      updateUser(userData);

      close();
    },
    [close, updateUser],
  );

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      onRequestClose={close}
      style={{
        overlay: {
          backgroundColor: '#00000095',
        },
        content: {
          background: '#292929',
          border: '0',
          height: '270px',
          width: '450px',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: 0,
        },
      }}
    >
      <Heading>
        <h2>Add a new playlist</h2>
        <button type="button" onClick={close}>
          <XIcon />
        </button>
      </Heading>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Input name="name" icon={Movie} type="text" />
          <Checkbox name="isPrivate" options={checkboxOptions} />

          <Buttons>
            <button className="btn cancel" type="button" onClick={close}>
              Cancel
            </button>
            <button className="btn add" type="submit">
              Add
            </button>
          </Buttons>
        </Form>
      </Content>
    </Modal>
  );
};

export default AddPlaylistModal;
