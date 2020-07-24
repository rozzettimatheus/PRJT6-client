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

interface ITokenParams {
  token: string;
}

interface IRegisterProfileData {
  fullname: string;
  description: string;
}

const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const { params } = useRouteMatch<ITokenParams>();

  const handleSubmit = useCallback(
    async (data: IRegisterProfileData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          fullname: Yup.string().required('Nome obrigatório'),
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
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer login no Cineplus',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro. Tente novamente',
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
            <h1>Finalizar cadastro</h1>

            <Input name="fullname" icon={User} placeholder="Nome" />
            <Input
              name="description"
              icon={Document}
              placeholder="Descrição (opcional)"
            />

            <Button loading={loading} disabled={loading} type="submit">
              Cadastrar
            </Button>
          </Form>
        </AnimatedContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
