import React, { useCallback, useRef, useState } from 'react';
import { Mail } from '@styled-icons/heroicons-outline';
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

import { Wrapper, Navigation, Content } from '../UpdateProfile/styles';

interface EmailFormData {
  username: string;
}

const ChangeEmail: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { user, updateUser } = useAuth();

  const handleSubmit = useCallback(
    async (data: EmailFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          username: Yup.string()
            .required('E-mail required')
            .email('Invalid e-mail'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { username } = data;

        await api.put('/user/edit/email', {
          email: username,
        });

        await api.get('/user/details').then(response => {
          updateUser(response.data);
        });

        addToast({
          type: 'success',
          title: 'E-mail updated!',
          description: 'E-mail changed successfully',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Updating failed',
          description: 'An error occured during e-mail change. Try again',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, updateUser],
  );

  return (
    <Container>
      <Wrapper>
        <Navigation>
          <Link to="/account/edit">My profile</Link>
          <Link className="active" to="/account/email/change">
            Change email
          </Link>
          <Link to="/account/password/change">Change password</Link>
        </Navigation>

        <Content>
          <Form
            ref={formRef}
            initialData={{
              username: user.username,
            }}
            onSubmit={handleSubmit}
          >
            <Input name="username" icon={Mail} placeholder="Email" />

            <Button type="submit" loading={loading}>
              submit changes
            </Button>
          </Form>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default ChangeEmail;
