declare module '*.css';
declare module '*.less';

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module 'lodash';
declare module 'crypto-js';
declare module 'enzyme-adapter-react-16';
declare module '@winshare/good-master-data';
declare module 'umi';
declare module '@/models/goodMasterData';
