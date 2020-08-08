import React, { TextareaHTMLAttributes } from 'react';

import './styles.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  type?: string;

}


const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea type="text" id={name} {...rest} />
    </div>
  );
}

export default Textarea;
