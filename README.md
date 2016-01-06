# react-note-app-example

这是一个根据别人的例子来整理并实现的一个例子，详情原文：http://www.sitepoint.com/creating-note-taking-app-react-flux/

Reflux + React  

Reflux是根据React的flux创建的单向数据流类库。整个过程的对接是通过事件驱动的

Reflux的单向数据流模式主要由actions和stores组成
```javascript 
╔═════════╗       ╔════════╗       ╔═════════════════╗
║ Actions ║──────>║ Stores ║──────>║ View Components ║
╚═════════╝       ╚════════╝       ╚═════════════════╝
     ^                                      │
     └──────────────────────────────────────┘
```javascript 
     
### React Flux相比的不同点

* 通过内部拓展actions的行为，移除了单例的dispatcher，
* stores可以监听actions的行为，无需进行冗杂的switch判断；
* stores可以相互监听，可以进行进一步的数据聚合操作，类似于，map/reduce
* waitFor被连续和平行的数据流所替代


