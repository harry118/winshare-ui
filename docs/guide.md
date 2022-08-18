---
title: 快速开始
order: 1
group:
  path: /
nav:
  title: 文档
  path: /docs
  order: 1
---

## WinshareUI

WinshareUI 的描述

## 安装

winshare-ui 中 每一个组件都是一个独立的包，你需要在你的项目中安装对应的 npm 包并使用. 例如

```shell
$ npm install @winshare/order-list -f --registry http://10.100.9.201:18081/repository/winshare-npm
```

> 你可以在项目中的.npmrc 文件中设置 registry=http://10.100.9.201:18081/repository/winshare-npm 来统一 npm 的安装源

## 在项目中使用

每一个包都是一个独立的组件包，使用示例如下:

```tsx
import React from 'react';
import OrderList from '@winshare/order-list';

export default () => {
  return <OrderList detailUrl={'http://www.baidu.com'} />;
};
```
