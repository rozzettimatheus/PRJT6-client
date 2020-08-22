import React, { useCallback, useRef, ChangeEvent, useState } from 'react';
import { User, Document, Camera } from '@styled-icons/heroicons-outline';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import api from '../../../../services/api';
import { useAuth } from '../../../../hooks/auth';
import { useToast } from '../../../../hooks/toast';

import getValidationErrors from '../../../../utils/getValidationErrors';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Container from '../../../../components/Container';

import avatar from '../../../../assets/avatar.png';

import { Wrapper, Navigation, Content, AvatarInput } from './styles';

interface ProfileFormData {
  fullname: string;
  description: string;
}

const Profile: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const {
    user: { profile },
    updateUser,
  } = useAuth();

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({}); // sempre reinicializar a verificação de erros
        const schema = Yup.object().shape({
          fullname: Yup.string().required('Name required'),
          description: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false, // retorna todos os erros de uma vez
        });

        const { fullname, description = '' } = data;

        await api.put('/user/profile/edit', {
          fullname,
          description,
        });

        await api.get('/user/details').then(response => {
          updateUser(response.data);
        });

        addToast({
          type: 'success',
          title: 'Profile updated!',
          description: 'Your profile has been sucessfully updated',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Error updating profile',
          description: 'An error occured during profile update. Try again',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, updateUser],
  );

  const handleAvatarChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        const { fullname, description } = profile;

        await api.post('registerprofile', {
          fullname,
          description,
          avatar: data,
        });

        await api.get('/user/details').then(response => {
          updateUser(response.data);
        });

        addToast({
          type: 'success',
          title: 'Avatar updated!',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Wrapper>
        <Navigation>
          <Link className="active" to="/account/edit">
            My profile
          </Link>
          <Link to="/account/email/change">Change email</Link>
          <Link to="/account/password/change">Change password</Link>
        </Navigation>

        <Content>
          <Form
            ref={formRef}
            initialData={{
              fullname: profile.fullname,
              description: profile.description,
            }}
            onSubmit={handleSubmit}
          >
            <AvatarInput>
              <img src={profile.image || avatar} alt={profile.fullname} />
              <label htmlFor="avatar">
                <Camera />
                <input type="file" id="avatar" onChange={handleAvatarChange} />
              </label>
            </AvatarInput>

            <Input name="fullname" icon={User} placeholder="Name" />
            <Input
              name="description"
              icon={Document}
              placeholder="Description"
            />

            <Button type="submit" loading={loading}>
              submit changes
            </Button>
          </Form>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Profile;
