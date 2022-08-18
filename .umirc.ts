import { readdirSync } from 'fs';
import { defineConfig } from 'dumi';
import { join } from 'path';

const headPkgList = [];
const pkgList = readdirSync(join(__dirname, 'packages')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgList.includes(pkg as never),
);
const tailPkgList = pkgList
  .map((path) => [join('packages', path, 'src')])
  .reduce((acc, val) => acc.concat(val), []);

const alias = pkgList.reduce((pre, pkg) => {
  pre[`@ant-design/pro-${pkg}`] = join(__dirname, 'packages', pkg, 'src');
  return {
    ...pre,
  };
}, {});

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  title: 'winshare-ui',
  favicon: '/assets/logo.png',
  logo: '/assets/logo.png',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  outputPath: 'docs-dist',
  mode: 'site',
  resolve: {
    includes: [...tailPkgList, 'docs'],
  },
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  navs: {
    'en-US': [
      null,
      {
        title: 'Gitlab',
        path: 'http://idp-gitlab.winshare.com.cn/operation-winshare/winshare-ui',
      },
    ],
    'zh-CN': [
      null,
      {
        title: 'Gitlab',
        path: 'http://idp-gitlab.winshare.com.cn/operation-winshare/winshare-ui',
      },
    ],
  },
  analytics: isProduction
    ? {
        ga: 'UA-173569162-1',
      }
    : false,
  hash: true,
  targets: {
    chrome: 80,
    firefox: false,
    safari: false,
    edge: false,
    ios: false,
  },
});
