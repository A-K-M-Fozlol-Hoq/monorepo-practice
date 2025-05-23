import React from 'react';
import '@ds.e/scss/lib/Button.css';
export interface ButtonProps {
    title: string;
    children: React.ReactNode;
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
