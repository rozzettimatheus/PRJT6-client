import React, { useCallback } from 'react';
import Modal from 'react-modal';
import { Movie } from '@styled-icons/boxicons-regular';

import { useAuth } from '../../hooks/auth';

import Input from '../Input';

import { Heading, XIcon, Content, Form, Buttons } from './styles';
import api from '../../services/api';

Modal.setAppElement('#root');

interface CurrentData {
  id: number;
  name: string;
}

interface IAddPlaylist {
  isOpen: boolean;
  close: () => void;
  current: CurrentData;
}

interface Data {
  name: string;
}

const EditPlaylistNameModal: React.FC<IAddPlaylist> = ({
  isOpen,
  close,
  current,
}) => {
  const { updateUser } = useAuth();

  const handleSubmit = useCallback(
    async (data: Data) => {
      const { name } = data;

      if (name !== current.name) {
        await api.put(`/playlist/edit/name/${current.id}`, {
          name,
        });

        api.get('/user/details').then(response => updateUser(response.data));
      }

      close();
    },
    [close, current.id, current.name, updateUser],
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
          height: '230px',
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
        <h2>Edit playlist name</h2>
        <button type="button" onClick={close}>
          <XIcon />
        </button>
      </Heading>
      <Content>
        <Form
          initialData={{
            name: current.name,
          }}
          onSubmit={handleSubmit}
        >
          <Input name="name" icon={Movie} type="text" />

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

export default EditPlaylistNameModal;
