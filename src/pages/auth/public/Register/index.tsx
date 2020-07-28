import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { LockClosed, Mail } from '@styled-icons/heroicons-outline';

import api from '../../../../services/api';
import { useToast } from '../../../../hooks/toast';
import getValidationErrors from '../../../../utils/getValidationErrors';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import {
  Container,
  Content,
  Logo,
  Background,
  AnimatedContainer,
  GoBackIcon,
} from './styles';

interface IRegisterFormData {
  username: string;
  password: string;
  password_confirmation: string;
}

interface ITokenResponse {
  access_token: string;
}

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: IRegisterFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          username: Yup.string()
            .required('E-mail required')
            .email('Invalid e-mail'),
          password: Yup.string().min(6, 'At least 6 characters'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password'), null],
            `Passwords don't match`,
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { username, password } = data;

        await api.post('register', {
          username,
          password,
        });

        const response = await api.post<ITokenResponse>(
          'auth/token',
          `username=${username}&password=${password}&grant_type=password`,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: 'Basic Y29tLmNpbmVwbHVzLmRldjo=',
            },
          },
        );

        const { access_token } = response.data;

        addToast({
          type: 'success',
          title: 'Available username!',
          description: 'Please, finish your CinePlus account',
        });

        history.push(`/register-profile/${access_token}`);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Sign up failed',
          description:
            'An error occured during sign up. Please, try again later',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimatedContainer>
          <Logo />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Sign Up for an account</h1>

            <Input name="username" icon={Mail} placeholder="E-mail" />

            <Input
              name="password"
              type="password"
              icon={LockClosed}
              placeholder="Password"
            />

            <Input
              name="password_confirmation"
              type="password"
              icon={LockClosed}
              placeholder="Password confirmation"
            />

            <Button disabled={loading} loading={loading} type="submit">
              Continue
            </Button>
          </Form>

          <Link to="/">
            <GoBackIcon />
            Go back to Log in
          </Link>
        </AnimatedContainer>
      </Content>
    </Container>
  );
};

export default Register;
