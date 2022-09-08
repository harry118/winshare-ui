---
title: 公共状态
nav:
  title: 组件
  path: /components
group:
  path: /
---

# 公共状态组件

## 如何使用

1. 在项目中引入`@winshare/common-store`,并在顶层组件中使用导出的 Provider，例子:

```txt
import React from 'react';
import ReactDOM from 'react-dom';
import { CommonProvider } from '@winshare/common-store';

ReactDOM.render(
  <React.StrictMode>
    <CommonProvider>这里是你自己的顶层组件</CommonProvider>
  </React.StrictMode>,
  document,
);
```

2. 在 packages 中使用

```txt
import React, { FC } from 'react';
import { useCommon, CommonContext } from '@winshare/common-store';

export interface DemoProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export const Demo: FC<DemoProps> = (props) => {
  const { common, dispatchCommon } = useCommon();
  console.log('demo common', common);
  console.log('demo dispatchCommon', dispatchCommon);
  return (
    <div>
      <p>name:{common?.name}</p>
      <p>version:{common?.version}</p>
      <button
        onClick={() =>
          dispatchCommon({
            type: 'UPDATE_COMMON',
            payload: {
              name: '44444',
              version: '0.4.0',
            },
          })
        }
      >
        changeData
      </button>
      <p>我是一个demo 用来测试context</p>;
    </div>
  );
};
```

## 代码演示

<!-- <code src="./demo/demo.tsx"></code> -->

<!-- <API src="./index.tsx"></API> -->
