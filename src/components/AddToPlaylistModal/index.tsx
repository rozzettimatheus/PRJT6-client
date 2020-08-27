import React, { useState, useCallback } from 'react';
import Modal from 'react-modal';
import { useLocation } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Content } from './styles';
import api from '../../services/api';

Modal.setAppElement('#root');

interface IAddToPlaylistModal {
  isOpen: boolean;
  close: () => void;
}

const AddToPlaylistModal: React.FC<IAddToPlaylistModal> = ({
  isOpen,
  close,
}) => {
  const { user, updateUser } = useAuth();
  const { pathname } = useLocation();
  const [myPlaylists] = useState(() => {
    const playlists = user.playlists.filter(
      playlist => playlist.userId === user.id,
    );

    return playlists;
  });

  const handleAddMedia = useCallback(
    (id: number) => {
      const [, type, media] = pathname.split('/');

      const mediaId = Number(media);

      api.post(`/playlist/item/register/${id}`, {
        movietvshowId: mediaId,
        itemType: type,
      });

      api.get('user/details').then(response => updateUser(response.data));

      close();
    },
    [close, pathname, updateUser],
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
          height: '300px',
          width: '450px',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: '0',
          overflow: 'hidden',
        },
      }}
    >
      <Content>
        {myPlaylists.map(playlist => (
          <div key={playlist.id} className="card">
            <div className="title">
              <strong>{playlist.name}</strong>
            </div>
            <button onClick={() => handleAddMedia(playlist.id)} type="button">
              Add
            </button>
          </div>
        ))}
      </Content>
    </Modal>
  );
};

export default AddToPlaylistModal;
