# app 页面 H5 承载页

Node: v10.16.2

## 启动命令

npm start

## 发布

[虎啸](http://hce.hupu.io/deployment-delivery/delivery/handle/6632)

## 生成目录树

```js
npm install -g tree-node-clinpm install -g tree-node-cli
tree -L 3 -I "node_modules|webpack" > tree.md
```

## 目录树分类

├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── @types
│   │   └── declarations.d.ts
│   ├── app.tsx //app 入口
│   ├── assets //资源加载，默认为 SVG 加载
│   │   ├── bg-brand.png
│   │   ├── bg.png
│   │   ├── concat.jpg
│   │   ├── page-turn-down.png
│   │   ├── page-turn-up.png
│   │   ├── page-turn.png
│   │   └── shop.png
│   ├── components //评论
│   │   ├── Discuss //公共评论
│   │   ├── List //公共商品列表头部
│   │   ├── Title //公共头部
│   │   ├── comments.action //渠道评论下载
│   │   ├── comments.grade //渠道评论评分
│   │   ├── comments.intro //渠道评论简介
│   │   ├── comments.reply //渠道评论评论
│   │   ├── detail.actions //商品详情下载
│   │   ├── detail.cell
│   │   ├── detail.channel //商品详情渠道
│   │   ├── detail.config //商品详情参数
│   │   ├── detail.goods //商品详情商品介绍
│   │   ├── detail.intro //商品详情简介
│   │   ├── detail.recommend //商品详情相关推荐
│   │   ├── detail.reply //商品详情评论
│   │   ├── shared.button //公共分享按钮
│   │   ├── topic.info //聚合页简介
│   │   └── topic.reply //聚合页回复
│   ├── index.html //页面
│   ├── index.tsx //入口
│   ├── pages
│   │   ├── person.contact //个人协议
│   │   ├── person.privacy //个人隐私
│   │   ├── shared.download //分享点击页面，后续迁移
│   │   ├── shared.shop.detail //店铺详情
│   │   ├── shop.comments //店铺评论
│   │   ├── styles //pages style
│   │   ├── topic.brand //品牌聚合页
│   │   └── user.aggrement //用户协议
│   ├── reducer
│   │   └── actions.tsx
│   ├── routes.tsx //路由
│   ├── service //API
│   │   ├── index.ts
│   │   └── request.ts
│   ├── styles //UI style
│   │   ├── index.scss
│   │   ├── mixins
│   │   ├── reset.scss
│   │   └── variable.scss
│   └── utils
│   └── helper.ts //工具库
├── tree.md
├── tsconfig.json
└── webpack.config.babel.js //webpack 合并配置

## 设计文档

[M APP](https://hupu.feishu.cn/docs/doccn269R1EuFq309XrZBqvicVd#euEXRx)
