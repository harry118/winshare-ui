import React from 'react';
import * as icons from '@ant-design/icons';

const IconFont = icons.createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/c/font_3602871_1m4d0iwek0w.js'],
});

const Icon = (props: { type: string; className?: string; style?: any }) => {
  const { type, ...otherProps } = props;
  const antIcon: { [key: string]: any } = icons;
  if (antIcon[type]) {
    return React.createElement(antIcon[type], { ...otherProps });
  }
  return <IconFont type={type} {...otherProps} />;
};

export default Icon;
