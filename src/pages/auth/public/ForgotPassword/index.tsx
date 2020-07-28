import React, { useCallback, useRef, useState } from 'react';
import { Mail } from '@styled-icons/heroicons-outline';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import getValidationErrors from '../../../../utils/getValidationErrors';
import { useToast } from '../../../../hooks/toast';
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

interface IForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: IForgotPasswordFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail required')
            .email('Invalid e-mail'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        addToast({
          type: 'success',
          title: 'Password recovery e-mail successfully sent',
          description:
            'An e-mail has been sent to you for password recovery. Please, check your inbox',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'E-mail not found',
          description: 'Your e-mail was not found',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <AnimatedContainer>
          <Logo />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Password recovery</h1>
            <Input name="email" icon={Mail} placeholder="E-mail" />
            <Button disabled={loading} loading={loading} type="submit">
              Recover
            </Button>
          </Form>

          <Link to="/">
            <GoBackIcon />
            Go back to log in
          </Link>
        </AnimatedContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ForgotPassword;
