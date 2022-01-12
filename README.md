# vue-cli-plugin-commitlint

> 基于 [`Vue-CLI`] 插件系统编写的仓库提交规范插件

## commit 规范

为规范 `Git Commit` 的记录，使用了以下插件：

- [@commitlint/cli](https://github.com/conventional-changelog/commitlint)
- [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint)
- [commitizen](https://github.com/conventional-changelog/commitlint)
- [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)
- [husky](https://github.com/typicode/husky)

`Git Commit` 一般常用的提交格式为 `<type>(<scope>): <subject>` ，可直接运行下面的命令，简化操作：

```bash
npm run commit
```
**type**

`type` 用于说明 `commit` 的提交性质。

|  类型      |  说明  |
| :----     | :----  |
|  feat     |  新增一个功能 |
|  fix      |  修复一个Bug |
|  docs     |  文档变更 |
|  style    |  代码格式（不影响功能，例如空格、分号等格式修正) |
|  refactor |  代码重构 |
|  perf     |  改善性能 |
|  test     |  测试 |
|  build    |  变更项目构建或外部依赖（例如scopes: webpack、gulp、npm等 |
|  ci       |  更改持续集成软件的配置文件和package中的scripts命令，例如scopes: Travis, Circle等 |
|  chore    |  变更构建流程或辅助工具 |
|  revert   |  代码回退 |

**scope**

`scope` 说明 `commit` 影响的范围。`scope` 依据项目而定，例如在业务项目中可以依据菜单或者功能模块划分，如果是组件库开发，则可以依据组件划分。

> scope 不强求，可省略

**subject**
`subject` 是 `commit` 的简短描述。

**其他，请查看[文档](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)**

## 插件
- [`commitlint`](https://commitlint.js.org/#/) ：`git` 提交信息检测
  - **@commitlint/cli**
  - **@commitlint/config-conventional**
  
- [`commitizen`](https://github.com/commitizen) : `git` 提交信息规范
  - **cz-cli**
  - **cz-conventional-changelog**

- [`husky`](https://github.com/typicode/husky): `git hooks` 工具