---
title: 打包部署
order: 3
nav:
  title: 项目开发文档
  path: /develop
  order: 3
group:
  path: /
---

# 如何打包

所有的包都放在 `packages/` 目录下， 每一个文件夹都是一个单独的包，可独立发布。

- 在根目录执行 `npm run publish` 用 lerna 发布，发布前请确保`git workspace `已处于 clean 状态 , 执行时遇到错误，自行根据错误类型排查问题
- 你也可以`cd packages/xxx` 进入某一个包执行 build 如果你需要验证或者本地调试某一个包时

# 如何上传到 nexus

- 上一步如果执行成功的话, lerna 回自动帮我们上传, 上传前需要我们登录到 nexus `npm login --registry http://10.100.9.201:18081/repository/winshare` **用户名/密码: `winshare/winshare`**

# 如何部署本网站

待完善
