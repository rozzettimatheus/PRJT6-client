import React, { useCallback, useRef, useState } from 'react';
import { LockClosed } from '@styled-icons/heroicons-outline';
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

interface PasswordFormData {
  old_password: string;
  password: string;
  password_confirmation: string;
}

const ChangePassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { updateUser } = useAuth();

  const handleSubmit = useCallback(
    async (data: PasswordFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({}); // sempre reinicializar a verificação de erros
        const schema = Yup.object().shape({
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: val => !!val.length,
            then: Yup.string().required('Required!'),
            otherwise: Yup.string(),
          }),
          password_confirmation: Yup.string()
            .when('old_password', {
              is: val => !!val.length,
              then: Yup.string().required('Required!'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password'), null], `Passwords don't match`),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { password } = data;

        await api.put('/user/edit/password', {
          password,
        });

        await api.get('/user/details').then(response => {
          updateUser(response.data);
        });

        formRef.current?.reset();

        addToast({
          type: 'success',
          title: 'Password updated!',
          description: 'Your password has been successfully changed',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Error updating password',
          description:
            'An error occurred during password change. Check your current password',
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
          <Link to="/account/email/change">Change email</Link>
          <Link className="active" to="/account/password/change">
            Change password
          </Link>
        </Navigation>

        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              type="password"
              name="old_password"
              icon={LockClosed}
              placeholder="Old password"
            />
            <Input
              type="password"
              name="password"
              icon={LockClosed}
              placeholder="New password"
            />
            <Input
              type="password"
              name="password_confirmation"
              icon={LockClosed}
              placeholder="Password confirmation"
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

export default ChangePassword;
