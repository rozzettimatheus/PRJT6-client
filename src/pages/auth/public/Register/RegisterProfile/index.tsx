import React, { useCallback, useRef, useState } from 'react';
import { User, Document } from '@styled-icons/heroicons-outline';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useRouteMatch, useHistory } from 'react-router-dom';

import api from '../../../../../services/api';
import { useToast } from '../../../../../hooks/toast';
import getValidationErrors from '../../../../../utils/getValidationErrors';

import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';

import {
  Container,
  Content,
  Logo,
  Background,
  AnimatedContainer,
} from './styles';

interface TokenParams {
  token: string;
}

interface RegisterProfileData {
  fullname: string;
  description: string;
}

const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const { params } = useRouteMatch<TokenParams>();

  const handleSubmit = useCallback(
    async (data: RegisterProfileData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          fullname: Yup.string().required('Name required'),
          description: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { fullname, description = '' } = data;
        const { token } = params;

        await api.post(
          'registerprofile',
          {
            fullname,
            description,
            image: null,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        history.push('/');

        addToast({
          type: 'success',
          title: 'Sign up complete!',
          description: 'You already can log in to your account in Cineplus',
        });
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
    [addToast, history, params],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimatedContainer>
          <Logo />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Complete your registration</h1>

            <Input name="fullname" icon={User} placeholder="Name" />
            <Input
              name="description"
              icon={Document}
              placeholder="Description (optional)"
            />

            <Button loading={loading} disabled={loading} type="submit">
              Register
            </Button>
          </Form>
        </AnimatedContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
