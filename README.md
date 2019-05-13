### fruitShop生鲜水果小程序

> 采用微信小程序云开发功能开发线上水果电商小程序
>
> 后台环境：云开发环境

### 下载

```bash
git clone git@github.com:Harhao/fruitShop.git
```



### 使用

- 微信云开发小程序需要先开通云开发环境，自行了解微信云开发开通流程

- 微信开发者工具直接引入项目文件夹即可

- 不过project.config.json文件和app.js的云开发环境需要替换成自己的开发环境

  ```bash
  //app.js
  wx.cloud.init({
    traceUser: true,
    env:''//这里是自己的开发环境
  })
  
  // project.config.json文件
  "appid": "wx2fce92bc6c844328",//替换成自己的appid
  ```
  
  
  
  

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

