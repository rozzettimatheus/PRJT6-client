import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiUser, FiLock, FiInfo } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';

import { Container, Content, Background, AnimatedContainer } from './styles';
import { useAuth } from '../../hooks/auth';

interface SignUpFormData {
  fullname: string;
  description: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { user } = useAuth();
  const history = useHistory();

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
        const { username } = user;

        await api.post('registerprofile', {
          fullname,
          username,
          description,
          genres: [1, 4, 6],
        });

        // Vai pro dashboard
        // history.push('/');

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
    [addToast],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimatedContainer>
          <img src={logo} alt="Cineplus" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Finalizar cadastro</h1>

            <Input name="fullname" icon={FiUser} placeholder="Nome" />
            <Input name="description" icon={FiInfo} placeholder="Descrição" />

            <Button type="submit">Cadastrar</Button>
          </Form>
        </AnimatedContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
