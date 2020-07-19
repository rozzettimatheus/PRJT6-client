import React, { useState, useCallback } from 'react';

import {
  Container,
  AvatarContainer,
  UserSection,
  UsernameContainer,
  UserList,
  UserInfo,
} from './styles';

const ProfileHeader: React.FC = () => {
  const [subscription, setSubscription] = useState(false);

  const toggleSubscription = useCallback(() => {
    setSubscription(!subscription);

    // resto da logica de se inscrever
  }, [subscription]);

  return (
    <Container>
      <AvatarContainer>
        <div>
          <div>
            <img
              src="https://instagram.faqa1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/100987893_249534669715410_46825820815097856_n.jpg?_nc_ht=instagram.faqa1-1.fna.fbcdn.net&_nc_ohc=5Pksyfxi_JkAX9sPLog&oh=2ec425a91747f8d2ad6163aef6932f0c&oe=5F3AD1FE"
              alt="Gabr"
            />
          </div>
        </div>
      </AvatarContainer>

      <UserSection>
        <UsernameContainer>
          <h2>rozzettimatheus.dev</h2>
          <button
            type="button"
            className={subscription ? 'active' : ''}
            onClick={toggleSubscription}
          >
            {subscription ? 'Seguindo' : 'Seguir'}
          </button>
        </UsernameContainer>
        <UserList>
          <li>
            <span>
              <strong>20</strong> playlists
            </span>
          </li>
          <li>
            <span>
              <strong>120</strong> seguidores
            </span>
          </li>
          <li>
            <span>
              <strong>115</strong> seguindo
            </span>
          </li>
        </UserList>
        <UserInfo>
          <h1>Gabriel Rozzetti</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            excepturi aut laboriosam tempore soluta ea sunt enim explicabo
            nihil, maiores non.
          </p>
        </UserInfo>
      </UserSection>
    </Container>
  );
};

export default ProfileHeader;
