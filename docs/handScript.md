# 草稿

### 功能
+ 核心流程:以时间戳排序的消息队列(即日志队列)，(以自定义的速率或过滤条件)构建动态的数据面板，该数据面板的变动驱动了页面对节点网路拓扑图的渲染
+ 支持: 节点状态的可视化显示(节点负载-颜色，节点度数-大小，)
+ 支持: 节点的动态连接断开过程
+ 支持: 鼠标悬浮时，节点状态数据的显示
+ 支持: 读取数据文件和保存数据文件；原始日志存储，过滤条件后的日志存储(不能直接存储数据面板,因为要体现状态更改的过程)。用于复现局部的效果。
+ 支持: 业务数据实时构建过程(websocket/socketio)

### 思路
> 用React+Typescript写一个全新的框架，思路参考肇丰的;
+ 节点的属性/方法定义
+ 

### 肇丰Net-topology-simulator剖析
+ RxJS: 
  + [特性](https://cn.rx.js.org/manual/overview.html)
  + [源码](https://github.com/ReactiveX/RxJS)
+ @AntV/g6.js: 前端图可视化引擎
  + [g6官网](https://g6.antv.vision/zh/)
  + [g6在React中的应用](https://github.com/baizn/g6-in-react)
  + [使用教程](https://www.yuque.com/antv/g6/intro)
  + [图分析等](https://www.yuque.com/antv/g6/fvuhbz#Zq6cA)
  + [图算法等](https://www.yuque.com/antv/g6/fvuhbz#jEYP4)

### DONE
+ [√] 搭建项目模板
+ [×] 精简移植肇丰的代码，实现: 节点创建，数据面板的即时更新，节点建立连接，节点扫描，导入(?)等功能
+ [√] 节点基本布局图的渲染
+ [√] 节点被选中时高亮
+ [x] 实现动态数据驱动视图的动态渲染
+ [√] 节点处于活跃状态时的呼吸效果(暂时妥协为scale-animetion动效)
+ [x] 节点选中时，相关联边的状态更改
+ [√] 整个应用样式(背景渐变+节点默认样式)的简单调整
+ [] 不用写死的数据，还是动态生成

### TODO
+ 选择React脚手架
+ 用React+Typescript重写肇丰项目（2 days）
+ 增加节点属性样式的动态调整
+ 增加动画和交互
+ 增加辅助组件(显示节点当前状态,提供节点操作面板)
+ 点击节点/边，需要在`状态详情区`，可视化的显示各种状态;


