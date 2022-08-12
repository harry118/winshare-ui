import React from 'react';
import type { FC } from 'react';
import { text } from 'stream/consumers';

const Button: FC<{
  text: string;
}> = ({ text }) => (
  <div>
    <p>测试按钮</p>
    <button>{text}</button>
  </div>
);

export default Button;
