import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';
// type é uma forma de definir uma interface que não
// tem nenhuma propriedade além do elemento escolhido (button)
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({children, ...rest}) => (
    <Container type="button" {...rest} >{children}</Container>
);

export default Button;