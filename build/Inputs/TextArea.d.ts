import React from 'react';
interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    required?: boolean;
    full?: boolean;
    value: string;
}
declare const TextArea: (props: TextAreaProps) => JSX.Element;
export default TextArea;
