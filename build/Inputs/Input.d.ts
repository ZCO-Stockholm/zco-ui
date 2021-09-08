import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    required?: boolean;
    full?: boolean;
}
declare const Input: (props: InputProps) => JSX.Element;
export default Input;
