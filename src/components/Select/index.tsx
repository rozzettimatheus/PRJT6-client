import React, { useRef, useEffect } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';
import { useField } from '@unform/core';

const colourStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: '#292929',
    border: 0,
    width: '170px',
    height: '4.8rem',
    color: '#F4ede8',
    marginRight: '0.5rem',
  }),
  option: (styles: any) => {
    return {
      ...styles,
      backgroundColor: '#292929',
      color: '#F4ede8',
      cursor: 'pointer',
    };
  },
  menu: (styles: any) => {
    return {
      ...styles,
      backgroundColor: '#292929',
    };
  },
  singleValue: (styles: any) => {
    return {
      ...styles,
      color: '#F4ede8',
    };
  },
};

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
}
const Select: React.FC<Props> = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);
  return (
    <ReactSelect
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      placeholder="Choose a type"
      styles={colourStyles}
      {...rest}
    />
  );
};
export default Select;
