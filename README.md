fruitShop生鲜水果小程序

> 采用微信小程序云开发功能开发线上水果电商小程序
>
> 后台环境：云开发环境

### 下载

```bash
git clone git@github.com:Harhao/fruitShop.git
```



### 使用

- 打开微信开发者工具直接引入文件即可

- 不过project.config.json文件和app.js的云开发环境需要替换成自己的开发环境

  ```bash
  //app.js
  App({
    onLaunch: function () {
      
      if (!wx.cloud) {
        console.error('请使用 2.2.3 或以上的基础库以使用云能力')
      } else {
        wx.cloud.init({
          traceUser: true,
          env:''//这里是自己的开发环境
        })
      }
  
      this.globalData = {}
    }
  })；
  // project.config.json文件
  {
  	"miniprogramRoot": "project",
  	"cloudfunctionRoot": "cloud",
  	"setting": {
  		"urlCheck": true,
  		"es6": true,
  		"postcss": true,
  		"minified": true,
  		"newFeature": true
  	},
  	"appid": "wx2fce92bc6c844328",//替换成自己的appid
  	"projectname": "fruitshop",
  	"libVersion": "2.6.6",
  	"condition": {
  		"search": {
  			"current": -1,
  			"list": []
  		},
  		"conversation": {
  			"current": -1,
  			"list": []
  		},
  		"plugin": {
  			"current": -1,
  			"list": []
  		},
  		"game": {
  			"list": []
  		},
  		"miniprogram": {
  			"current": 0,
  			"list": [
  				{
  					"id": -1,
  					"name": "db guide",
  					"pathName": "pages/databaseGuide/databaseGuide"
  				}
  			]
  		}
  	}
  }
  
  ```

  

  

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

