





// 17. 用 CSS 动画代替 JavaScript 动画

// 在 HTML 5 和 CSS 3 出现之前，动画曾经是 JavaScript 的专属，但随着 HTML 5 和 CSS 3 的引入情况开始变化。现在动画甚至可以由 CSS 3 来处理了。

// 我们可以制定一些规则：
// 如果 CSS 可以实现某些 JS 功能，那就用 CSS。
// 如果 HTML 可以实现某些 JS 功能，那就用 HTML。

// 理由如下：

// 破损的 CSS 规则和样式不会导致网页损坏，而 JavaScript 则不然。
// 解析 CSS 是非常便宜的，因为它是声明性的。我们可以为样式并行创建内存中的表达，可以推迟样式属性的计算，直到元素绘制完成。
// 为动画加载 JavaScript 库的成本相对较高，消耗更多网络带宽和计算时间。

// 虽然 JavaScript 可以提供比 CSS 更多的优化，但优化过的 JavaScript 代码也可能卡住 UI 并导致 Web 浏览器崩溃。