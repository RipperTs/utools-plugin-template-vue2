# uTools插件模板 (vue2)

## 介绍
基于vue2封装的uTools插件开发模板, 用于快速开发uTools插件  
本项目已全局引用element ui组件库, 以及axios, dayjs, moment等常用库, 无需再次引用

## 使用
1. 克隆项目
```bash
git clone git@github.com:RipperTs/utools-plugin-template-vue2.git
```
2. 安装依赖
```bash
npm install
```
3. 开发
```bash
# 运行开发环境
npm run serve
# 打包
npm run build
# 生成路由
npm run genmenu
# 处理svg图标
npm run svgo
```

## 自动生成路由
- 在`src/views`中编写`vue`文件后,使用`npm run genmenu`命令,会自动生成路由配置文件`src/router.js`
- 路由配置文件中的`name`属性,会自动读取`vue`文件中的顶部注解
- 如果你想要声明一个`/`路由,那么文件名必须为`home.vue`

## svg图标及使用
- 在`src/assets/icons/svg`中放置svg图标
- 使用`npm run svgo`命令,会自动压缩并处理透明svg图标
- 在要使用`svg`图标的`vue`文件中,使用`<svg-icon icon-class="xxx"></svg-icon>`即可 (更多属性请自行参考查看组件)

## 在uTools开发者工具中使用
- 选择`data`目录中的`plugin.json`文件
- 运行`npm run build`命令,来生成打包后的文件目录
- 在uTools开发者工具中点击`开始运行`按钮,即可在uTools中使用

## 特别说明
1. 本项目使用了`vue-cli`脚手架, 请确保你已经安装了`vue-cli`
2. 本项目使用了`vue-router`路由, 请确保你已经了解了`vue-router`的基本使用
3. 本项目使用了`vuex`状态管理, 请确保你已经了解了`vuex`的基本使用
4. 本项目使用了`svg-sprite-loader`处理svg图标, 请确保你已经了解了`svg-sprite-loader`的基本使用
5. 本项目使用了`node`进行文件操作, 请确保你已经安装了`node`
6. 本项目使用了`uTools API`进行开发, 请确保你已经安装了`uTools`,并且使用了`uTools开发者工具`下进行开发
