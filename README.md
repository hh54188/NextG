## Tutorial

http://orlandohamsho.com/javascript/mobx-react-tutorial-building-first-application/
https://dev.to/satansdeer/react-native-mobx-tutorial---part-1--2df0
https://dev.to/satansdeer/react-native-mobx-tutorial---part-2--12km
https://css-tricks.com/react-router-4/

## Deep Articles

- https://hackernoon.com/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254
- https://mendix.com/tech-blog/making-react-reactive-pursuit-high-performing-easily-maintainable-react-apps/

## Best Practices

- https://medium.com/dailyjs/mobx-react-best-practices-17e01cec4140
- 解决异步问题 [https://cn.mobx.js.org/best/actions.html](https://cn.mobx.js.org/best/actions.html)

## Tips

- **MobX helps you do things in a simple straightforward way.**
- 使用 `observable` 很像把对象的属性变成excel的单元格 (spreadsheet cell?)。 但和单元格不同的是，这些值不只是原始值，还可以是引用值，比如对象和数组。
- 如果你用 React 的话，可以把你的(无状态函数)组件变成响应式组件，方法是在组件上添加 `observer` 函数/ 装饰器 （**通过`observer`装饰，MobX 会确保组件总是在需要的时重新渲染**）
- MobX 会对在执行跟踪函数期间读取的任何现有的可观察属性做出反应。请查阅 理解 [MobX 对什么有反应](http://cn.mobx.js.org/best/react.html)
- Mobx 的数据不需要标准化（**而之所以在 Redux 中需要标准化是因为，Redux 讲究的 immutable state, 嵌套的数据结构不利于数据的修改**）
- Mobx「衍生一切」「细粒度监听」看似很耗性能，其实没有。**[mobx原理介绍](https://hackernoon.com/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254)**
- 如果你想创建一个基于当前状态的值时，请使用 computed。
- 对于对象和数组，`observable`是递归应用的，所以如果对象的某个值是一个对象或数组，那么该值也将通过 observable 传递。

## 衍生状态（Derivations）

任何源自状态并且不会再有任何进一步的相互作用的东西就是衍生

- 用户界面（User Interface）
- 衍生数据（Derived data），比如剩下的待办事项的数量
- ?? 后端集成（Backend integrations），比如把变化发送到服务器端

重点来了：

- All Derivations are updated automatically and atomically when the state changes. 
- All Derivations are updated synchronously by default.
- ?? Computed values are updated lazily.
- All Computed values should be pure.