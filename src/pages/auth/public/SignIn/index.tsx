import React, { useCallback, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { LockClosed, Mail } from '@styled-icons/heroicons-outline';

import { useAuth } from '../../../../hooks/auth';
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
  SignUpIcon,
} from './styles';

interface ISignInFormData {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ISignInFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string()
            .required('E-mail required')
            .email('Invalid e-mail'),
          password: Yup.string().required('Password required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { username, password } = data;

        await signIn({
          username,
          password,
        });

        history.push('/profile');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Authentication failed',
          description:
            'An error occured during sign in. Please, check your credentials',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, history, signIn],
  );

  return (
    <Container>
      <Content>
        <AnimatedContainer>
          <Logo />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Log In to your account</h1>

            <Input name="username" icon={Mail} placeholder="E-mail" />
            <Input
              name="password"
              type="password"
              icon={LockClosed}
              placeholder="Password"
            />

            <Button disabled={loading} loading={loading} type="submit">
              Login
            </Button>

            <Link to="/forgot">Forgot password?</Link>
          </Form>

          <Link to="/register">
            <SignUpIcon />
            Sign Up
          </Link>
        </AnimatedContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
