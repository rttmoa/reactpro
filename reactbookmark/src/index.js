import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

// import App from './App';
// import UnDebounce from "./1、防抖和节流"
// import ApplicationComponent from './1、使用纯组件'
// import ImmutableComponentData from './性能优化技巧/13、组件的不可变数据结构'
// import Index from './性能优化技巧(纯干货版)/2.3~asyncRouterIndex'
// import Index from './性能优化技巧(纯干货版)/3.1~颗粒化控制可控性组件(bad)';
// import Index from './性能优化技巧(纯干货版)/8.4~手写一个react虚拟列表'
// import Index from './react-router/router'


// https://www.cnblogs.com/qiaozhiming123/p/15919537.html
// import Index from './自定义Hooks ~ 四个典型的使用场景/1-zindex'  // 自定义Hooks - 举一个简单的例子，一个简单计数器的实现
// import Index from './自定义Hooks ~ 四个典型的使用场景/2-zindex'  // 封装通用逻辑：useAsync
// import Index from './自定义Hooks ~ 四个典型的使用场景/3-zindex'  // 监听浏览器状态：useScroll
import Index from './自定义Hooks ~ 四个典型的使用场景/4-zindex'     // 拆分复杂组件  useArticles & useCategories & useCombinedArticles & useFilteredArticles 





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <BrowserRouter>

      <Index /> 

    </BrowserRouter> 
  </React.StrictMode>
);