import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// react-virtualized的大部分样式都是功能性的（如位置、大小）。
// 功能性样式是直接应用于DOM元素的。
// 表组件也有一些展示性样式。
// 它们是可选的，但如果你想要它们，你也需要导入CSS文件。
// 这只需要做一次；可能是在你的应用程序的启动过程中。

import "react-virtualized/styles.css";




ReactDOM.render(<App />, document.getElementById("root")); 
serviceWorker.unregister();