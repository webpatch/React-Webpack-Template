# React项目模板
## 安装

### yarn 

```
yarn global add react-pack-cli
```

### npm 

```
npm install -g react-pack-cli
```

## 使用

```sh
re init react [project-name]
```

如：

```sh
re init react demo  # 在demo文件夹下生成项目
re init react  # 在当前文件夹下生成项目
```

## 更新

### v1.3.0

【新增】 `Webpack`升级为 4.4.1   
【新增】 实时监测`dev`目录，当文件变化时，自动重新编译`Webpack`   
【新增】 自动端口冲突检测，自动切换到非冲突端口（默认使用`bootstrap.yml`的`serverPort`）   
【新增】 支持多套皮肤开发（通过`bootstrap.yml`文件内的`theme`字段一键切换皮肤）   
【新增】 自动生成`version.txt`文件（通过修改`package.json`内的`version`与`testversion`字段）   
【新增】 自动发布打包成zip文件（`release`目录下）   
【修改】 `app.config.js` 改为yaml格式的`bootstrap.yml`文件，新增`theme`、`config` 字段   
【优化】 重写`Webpack`配置加载逻辑，优化打包速度
 
