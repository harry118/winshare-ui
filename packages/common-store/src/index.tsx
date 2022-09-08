import React, { createContext, useReducer, useContext } from 'react';
import cloneDeep from 'lodash/cloneDeep';

// 定义默认store
const defaultCommonData = {
  name: 'winshare',
  version: '1.0.0',
};
export type CommonDataType = typeof defaultCommonData;

export const CommonContext = createContext<any>({});
export const UPDATE_COMMON = 'UPDATE_COMMON';
const reducer = (state: any, action: any) => {
  if (action.type === 'UPDATE_COMMON') {
    state = cloneDeep(action.payload);
  }
  return state;
};
// 定义Provider 在顶层组件中需要引入
export const CommonProvider = ({ children }: any) => {
  const [common, dispatchCommon] = useReducer(reducer, defaultCommonData);
  return (
    <CommonContext.Provider value={{ common, dispatchCommon }}>{children}</CommonContext.Provider>
  );
};
// 定义context hook 可在任何地方使用
export const useCommon = () => {
  const context = useContext(CommonContext);
  return context;
};
