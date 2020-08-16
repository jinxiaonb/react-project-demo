
## [参考](https://cn.mobx.js.org/)

### 要点
> observable & observer

1. 定义状态并使其可观察
   import {observable} from 'mobx';
   var appState = observable({timer:0})
2. 创建视图以响应状态的变化
   react搭配使用mobx-react
3. 更改状态