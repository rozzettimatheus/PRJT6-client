import React, { useCallback, useRef } from 'react';
import { FiUser, FiFileText } from 'react-icons/fi';
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

interface SignUpFormData {
  fullname: string;
  description: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const { params } = useRouteMatch<TokenParams>();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          fullname: Yup.string().required('Nome obrigatório'),
          description: Yup.string().required('Descrição obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { fullname, description } = data;
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

        // Vai pro dashboard
        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu login no Cineplus',
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

            <Input name="fullname" icon={FiUser} placeholder="Nome" />
            <Input
              name="description"
              icon={FiFileText}
              placeholder="Descrição"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>
        </AnimatedContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
