import React, { useCallback, useRef, useState } from 'react';
import { LockClosed } from '@styled-icons/heroicons-outline';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

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
} from './styles';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().min(
            6,
            'The new password must have at least 6 characters',
          ),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password'), null],
            `Passwords don't match`,
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Error changing the password',
          description:
            'An error occured during password change. Please, try again later',
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
            <h1>Reset password</h1>

            <Input
              name="password"
              type="password"
              icon={LockClosed}
              placeholder="New password"
            />

            <Input
              name="password_confirmation"
              type="password"
              icon={LockClosed}
              placeholder="Confirm new password"
            />

            <Button loading={loading} disabled={loading} type="submit">
              Change
            </Button>
          </Form>
        </AnimatedContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
