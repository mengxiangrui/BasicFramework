#BasicFramework
-------------
######项目介绍
* 基于react react-router redux 由webpack进行打包构建的项目基本架构
* 版本1.0.0：
* 	具有基础功能的react redux基础框架
* 版本1.1.0：
*   新建store文件，支持store middleware（自带logger, trunk）
*	支持异步action
* 版本1.1.2：
*	增加mock数据功能(json-server)
*   增加mock数据相关的mock文件夹
*   install faker 随机生成模拟数据

------------
######技术选型
* react
* react-router
* redux
* fetch
* zepto (不建议使用)

------------
######项目构建工具
* webpack

------------
######项目层次
* 1.0.0: http://www.jianshu.com/p/52cb9cfebb98
* 1.1.0: 暂无

------------
######项目作者
* mxr
* https://github.com/mengxiangrui/BasicFramework

------------
######运行方式
* npm install
* 开发 npm start
* 编译 npm run build

-------------
######mock数据
* npm install -g json-server
* json-server mock/db.js --routes mock/db.json --watch mock/db.js

`fetch('/api/activity?method=a')`
`.then(res => res.json())`
`.then(data => console.log(data))`

-------------
######代码提交方式
* svn st
* svn add -new fils
* svn commit -m 'FEA:iwork编号 ... '
