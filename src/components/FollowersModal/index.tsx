import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import avatar from '../../assets/avatar.png';

import { Content, User } from './styles';

Modal.setAppElement('#root');

interface IFollowersModal {
  isOpen: boolean;
  close: () => void;
}

const FollowersModal: React.FC<IFollowersModal> = ({ isOpen, close }) => {
  const { user } = useAuth();

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
        {user.followers.length ? (
          user.followers.map(foll => (
            <User key={foll.id}>
              <li className="card">
                <Link className="container" to={`/profiles/${foll.id}`}>
                  <div className="wrapper">
                    <img
                      src={
                        foll.image
                          ? `https://cineplus.herokuapp.com/imagens/${foll.image}`
                          : avatar
                      }
                      alt={foll.fullname}
                    />
                    <div className="info">
                      <strong>{foll.fullname}</strong>
                      <span>{foll.email}</span>
                    </div>
                  </div>
                </Link>
              </li>
            </User>
          ))
        ) : (
          <div
            style={{
              height: '260px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-darken)',
            }}
          >
            <span>No followers here :(</span>
          </div>
        )}
      </Content>
    </Modal>
  );
};

export default FollowersModal;
