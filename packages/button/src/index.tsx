import React from 'react';
import type { FC } from 'react';
import { text } from 'stream/consumers';

const Button: FC<{
  text: string;
}> = ({ text }) => <button>{text}</button>;

export default Button;
