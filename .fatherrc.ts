import {} from 'father';

export default {
  // more father 4 config: https://github.com/umijs/father-next/blob/master/docs/config.md
  esm: 'babel',
  pkgs: ['button', 'input'], // 解决依赖顺序
};
