---
title: "Combine 初探"
date: "2022-01-02"
cover: "https://secure-res.craft.do/v2/M16eWEmcd9GP61VqrPSAx7qM4ZtLerJA12VhxJWqsjpwrphAUD2wKQ2TUCG1Kv6NmvVdMvvrXDSYJJBniXFVvVmYTvGndBpWwjSYCprN5AUc89ZkcsCFeNXgh3fxxCStk3dppHbPQT38xnRsZouYmmpkU3vVGipN6K9U3DE2eARqfeeeayJAG7RbNt32xEGCozXErmNpYB8wGEY1d21w1Kk33oEk6YoPVY95DPfHCpxW7iGR"
---

## 什么是响应式编程

响应式编程是使用异步数据流进行编程所谓数据流，你可以理解成，在一条时间线上，不断触发特定事件，制造数据。比如下面这张图，我们没触发一个事件，就会在这条时间线上留下一个节点，这个节点就是数据，这一连串的数据组成了数据流，直到“Complete”这个信号，整个数据流才到终点。

![Image](https://res.craft.do/user/full/cd5767b5-001d-b2bb-2322-53e695067937/doc/C98F9419-83EC-4423-A17E-356E0BA0CB61/235B9661-ADE3-4592-B659-E5AA12FEB249_2)

这些数据的产生都是通过一个“发布者”发布的，光有“发布者”当然不够，就像厂家生产了很多商品，没有人用就没有意义，所以这里还需要一个“消费者”的存在。在这里我们称之为“观察者”，而数据流就是“被观察者”。在有数据时，观察者监听到了数据变化，拿这个数据来做一系列事情。说到观察者与被观察者，就不得不提到观察者模式。

### 观察者模式

观察者模式是一种设计模式，当一个对象发生改变时，会通知订阅它的其他对象，这些对象做出相应的反应，这两者被称为被观察者与观察者。当被观察者发生变化时，它会向它的观察者发出广播通知。

### 小例子

我们来一个有点难度的场景，你需要得到一个包含两次或多次点击的事件流，想象一下，如果用传统的命令式编程，这个实现起来还是比较复杂的，但是通过响应式编程，方便又易理解。

![Image](https://res.craft.do/user/full/cd5767b5-001d-b2bb-2322-53e695067937/doc/C98F9419-83EC-4423-A17E-356E0BA0CB61/ACA94231-5092-4B53-BD5A-48AF53D19027_2)

`buffer` 方法将间距小于 250ms 的事件合并到一个列表中，`map` 方法将得到的列表转换成列表长度，`filter` 方法筛选出长度大于等于 2 的，于是就将最原始的数据流转化为我们想要的数据流了。

## Combine

Combine 是在 2019 年 WWDC 上，苹果推出的响应式编程框架。Combine 由 Swift 实现，也是为 Swift 而生，所以 Combine 支持范型、又是类型安全的。在 Combine 中，有三个核心概念，分别是 Publisher、Subscriber 和 Operator。

### Publisher

`Publisher` 协议用来定义“被观察者”，也称为“发布者”。

```swift
protocol Publisher {
	associatedtype Output
	associatedtype Failure: Error

	func subscribe<S: Subscriber>(_ subscriber: S)
		where S.Input == Output, S.Failure == Failure
}
```

`Publisher` 的定义中，Output 代表数据流输出的值，Failure 代表可能产生的错误，通过 subscribe 方法让一个 Subscriber 进行订阅，这里要求 subscriber 的输入和错误类型与 publisher 的输出与错误类型一致，来保证类型安全。

### Subscriber

`Subscriber` 协议用来定义“观察者”，他们可以订阅“被观察者”并从他们那里接收数据。

- Receives values and a completion
- Reference type

```swift
protocol Subscriber {
	associatedtype Input
	associatedtype Failure: Error

	func receive(subscription: Subscription)
	func receive(_ input: Input) -> Subscribers.Demand
	func receive(completion: Subscribers.Completion<Failure>)
}
```

这三个 receive 方法用于当 publisher 状态变化时，接收变化值。

![截屏2020-11-25 上午12.38.54.png](https://res.craft.do/user/full/cd5767b5-001d-b2bb-2322-53e695067937/doc/C98F9419-83EC-4423-A17E-356E0BA0CB61/4A246AF0-3649-4B41-A618-F85D0C0D4F0C_2)

可以看出，三种类型的 receive 分别接收：

- Subscription：Subscriber 成功订阅时收到的消息
- Value：真实的数据
- Completion：数据流终止时的消息

### Operator

操作符是 Combine 中三大重要概念的最后一个，通过各种操作符，可以对原始数据流进行各种操作，变成最终我们需要的样子。比较常见的操作符有 map、filter 等等

## 参考

1. [Apple Developer Documentation](https://developer.apple.com/documentation/combine/receiving-and-handling-events-with-combine)
   [Introducing Combine - WWDC 2019 - Videos - Apple Developer](https://developer.apple.com/videos/play/wwdc2019/722/)

[Swift Combine 入门导读](https://www.icodesign.me/posts/swift-combine/)

[The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
