import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

/**
 * interface que receba todas as propriedades de um input
 */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string; // required
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>; // quando é passado direto um componente nas props
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  containerStyle = {},
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setisFilled] = useState(false);
  /**
   * similar a id - document.getElementById()
   *  - tipo de um input
   */
  const inputRef = useRef<HTMLInputElement>(null);
  /**
   * registrar o campo
   *  - fieldN
   *  - registerField - function() => registra o input assim q aparecer em tela
   */
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current, // aqui fica a referencia, da acesso ao elemento
      path: 'value', // a partir do ref ele busca o valor
    });
  }, [fieldName, registerField]);

  /**
   * functions normais dentro de um componente são sempre recriados quando
   * o componente é chamado - renderizado
   *  - Isso implica em gasto desnecessário de memória
   *  - o useCallback resolve isso -> deixa a funcao salva na memoria
   */
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    // se tiver um valor, ele mantem o laranja no icon
    setisFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container
      style={containerStyle}
      isFailed={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
    >
      {Icon && <Icon size={18} />}
      <input
        onFocus={handleInputFocus} // listener
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {/* pode adicionar defaultValue */}
      {error && (
        <Error title={error}>
          <FiAlertCircle size={20} color="#c53030" />
        </Error>
      )}
    </Container>
  );
};

export default Input;
