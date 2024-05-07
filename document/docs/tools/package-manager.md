# 包管理工具

## 包

- 包 （package）：一组特定功能源码的集合
- 包管理工具：管理包的程序，可以对包进行下载，安装，更新，删除，上传等操作
- 常用的包
  - npm
  - yarn
  - cnpm

## npm

npm 全名 `Node Package Manager`，npm 是 node.js 官方内置的包管理工具。安装 node.js 时会自动安装。

`npm -v` 查看版本

### 初始化

命令行中输入 `npm init` ，当前目录中会创建 `package.json` 配置文件

```json
{
  "name": "node",       # 包的名称
  "version": "1.0.0",   # 包的版本
  "description": "",    # 包的描述
  "main": "index.js",   # 包的入口文件
  "scripts": {          # 包的脚本配置
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",         # 包的作者
  "license": "ISC"      # 包的开源证书
}
```

::: tip

- `name` 不能为中文，且不能是大写字母，默认使用当前目录名作为包名
- `version` 格式为 `x.x.x`，且必须为数字
- `npm init -y` 或 `npm init -yes` 快速创建 `package.json`
- `package.json` 可手动创建和修改

:::

### 搜索包

`npm s/search 关键字` 如

```
npm s jquery
```

网址搜索： [npmjs.com](https://www.npmjs.com/)

### 安装

安装包前需要初始化 `npm init`。
::: tip
如果当前目录下有 `package.json` 则不需要初始化
:::
命令

```
npm install <包名>
或
npm i <包名>
```

安装包后，会出现

- `node_modules` 文件夹，安装的包及其依赖都会在此文件夹中
- `package-lock.json` 文件，包的版本信息等内容

#### 生产依赖与开发依赖

- 生产环境：项目正式运行的环境，一般指正式的服务器
- 开发环境：开发项目时的环境，一般指开发时的电脑

在安装时可以使用参数来指定是生产依赖还是开发依赖

- 生产依赖
  - 生产环境中使用的包
  - `npm i -S 包名` 或 `npm i --save 包名`
  - 默认选项，生产依赖的包信息存放在 `package.json` 中的 `dependencies` 属性
- 开发依赖
  - 开发环境中使用的包
  - `npm i -D 包名` 或 `npm i --save-dev 包名`
  - 开发依赖的包信息存放在 `package.json` 中的 `devDependencies` 属性

### 全局安装

安装时使用参数 `-g` 进行全局安装

`npm i -g 包名`

使用 `npm root -g` 查看全局安装包的位置

全局安装的包，在任何地方都可以使用，一般通过命令行使用

### 安装包的所有依赖

`npm install` 或 `npm i` 会根据 `package.json` 和 `package-lock.json` 的
内容安装依赖

`npm i 包名` 是安装包
`npm i` 根据配置文件安装包的依赖

为什么需要安装依赖？
这是因为一般 `node_modules` 都会被版本工具忽略 （.gitignore）

### 指定包的版本

`npm i 包名@版本` 如

`npm i jquery@1.11.2`

### 删除依赖

- 局部删除
  - `npm remove 包名`
  - `npm r 包名`
- 删除全局依赖
  - `npm r -g 包名`

### scripts

在 `package.json` 中的 `scripts` 中配置别名

如我们在 `scripts` 下添加 `"dev": 'node index.js'`

```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": 'node index.js'
  }
```

这时我们在终端输入 `npm run server` 等同于输入 `node index.js`

### 总结

| 功能         | 命令                                                                                                                        |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| 初始化       | `npm init` / `npm init -y`                                                                                                  |
| 安装包       | `npm i <包名>` 生产依赖<br> `npm i -D <包名>` 开发依赖<br> `npm i -g <包名>` 全局安装 <br> `npm i <包名>@版本` 安装指定版本 |
| 删除包       | `npm remove <包名>` / `npm r <包名>`                                                                                        |
| 安装项目依赖 | `npm i` / `npm install`                                                                                                     |
| 运行命令别名 | `npm run <别名>`                                                                                                            |

## cnpm

淘宝镜像

### 安装

```
npm install -g cnpm --registry=https://registry.npmmirror.com
```

### 常见命令

与 npm 几乎一致，把 npm 改为 cnpm

| 功能         | 命令                                                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| 初始化       | `cnpm init` / `cnpm init -y`                                                                                                    |
| 安装包       | `cnpm i <包名>` 生产依赖<br> `cnpm i -D <包名>` 开发依赖<br> `cnpm i -g <包名>` 全局安装 <br> `cnpm i <包名>@版本` 安装指定版本 |
| 删除包       | `cnpm remove <包名>` / `cnpm r <包名>`                                                                                          |
| 安装项目依赖 | `cnpm i` / `cnpm install`                                                                                                       |

## yarn

facebook 推出的包管理工具
速度更快

### 安装

```
npm i -g yarn
```

### 常见命令

| 功能         | 命令                                                                                            |
| ------------ | ----------------------------------------------------------------------------------------------- |
| 初始化       | `yarn init` / `yarn init -y`                                                                    |
| 安装包       | `yarn add <包名>` 生产依赖<br> `yarn add <包名>` 开发依赖<br> `yarn global add <包名>` 全局安装 |
| 删除包       | `yarn remove <包名>`                                                                            |
| 安装项目依赖 | `yarn`                                                                                          |
| 运行命令别名 | `yarn <别名>`                                                                                   |
