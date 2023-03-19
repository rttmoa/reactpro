/* 
 JS中的盒子模型属性：基于JS内置的API，来获取元素的样式
   如何基于JS“修改”元素的样式
     + 设置行内样式
       box.style.xxx = xxx
       box.style.cssText = '...'
     + 设置样式类名
       box.className = '...'
       box.classList.add/remove/toggle('...')

   如何基于JS“获取”元素样式
     + 获取行内样式「要求：样式必须写在行内上」
       box.style.xxx  
     + 获取元素“所有”经过浏览器“计算过”的样式
       window.getComputedStyle([element],[伪元素]) 
       + 只要元素在浏览器中渲染了，则其样式都可以获取，不论写在哪，也不论是否写！
       + 获取的是一个CSSStyleDeclaration类的实例对象
       + 所有样式以键值对的形式存储在实例对象中
       + [伪元素]可以不设置 
     + 可以基于JS中的盒子模型属性，来获取元素的样式「获取的一定是整数，不带单位」
       + clientWidth/clientHeight/clientTop/clientLeft
       + offsetWidth/offsetHeight/offsetTop/offsetLeft/offsetParent
       + scrollWidth/scrollHeight/scrollTop/scrollLeft
     + 获取元素距离可视窗口的位置信息「left/right/bottom/top...」
       box.getBoundingClientRect()
       + 获取盒子顶部/底部/左侧/右侧，距离可视窗口“左上角(上边和左边)”的位置
       + 获取的值可能是负数
 */
// 获取一屏幕的宽高
// document.documentElement.clientWidth
// document.documentElement.clientHeight

/* 
图片的延迟加载「懒加载」
  效果：
  + 最开始渲染页面，不加载真实的图片「但是位置预留出来了，也有宽高，用纯色背景或者loading图(小)占位」
  + 等待页面其它资源都处理完毕 && 图片出现在可视窗口中（可以是：一露头、完全出现、出现一半），再去加载真实的图片地址！！
    + 其它资源都处理完毕：window.onload
    + 随着页面滚动条滚动：window.onscroll

  意义：
  + 可以加快页面第一次渲染的速度，减少页面白屏等待时间！！
  + 避免不必要的流量资源的浪费「尤其是移动端」
  + ...
*/

// 方案一：
/* (function () {
  let lazyBox = document.querySelector('.lazyBox'),
    imgBox = lazyBox.querySelector('img');

  // 处理延迟加载
  const handle = function handle() {
    if (imgBox.isLoad) return; //去除重复操作
    let { top, bottom } = lazyBox.getBoundingClientRect(),
      H = document.documentElement.clientHeight;
    if (bottom <= H && top >= 0) {
      // 符合加载的条件
      let trueImg = imgBox.getAttribute('data-src');
      imgBox.src = trueImg;
      imgBox.onload = () => {
        // 确保真实图片加载成功
        imgBox.style.opacity = 1;
      };
      imgBox.isLoad = true; //去除重复操作
    }
  };
  window.onload = handle;
  window.onscroll = utils.throttle(handle, 100); //onscroll事件会一直监听滚动条滚动，在浏览器的最快反应时间「谷歌5~7ms」内，会触发一次事件；也就是：只要滚动条滚动中，它会每间隔5~7ms就触发执行一次，频率太快了！！=> 需要做一个优化：降低触发频率（专业称呼：函数节流）
})(); */

// 方案二：
// IntersectionObserver：ES6新增的内置类；创建监听器，监听某一个（或者多个）DOM元素，和可视窗口的交叉状态发生改变，我们可以发生改变后，做一些事情！！{所谓交叉状态，就是元素出现在可视窗口和离开可视窗口时候会触发}
(function () {
  let lazyBox = document.querySelector('.lazyBox'),
    imgBox = lazyBox.querySelector('img');
  let ob = new IntersectionObserver(changes => {
    let item = changes[0];
    if (item.isIntersecting) {
      // 出现在视口中了
      imgBox.src = imgBox.getAttribute('data-src');
      imgBox.onload = () => {
        imgBox.style.opacity = 1;
      };
      // 已经处理完，移除监听
      ob.unobserve(item.target);
    }
  }, { threshold: [1] });
  ob.observe(lazyBox);
})();

/* 
// @1 创建监听器
  let ob = new IntersectionObserver((changes) => {
    // 此回调函数会在DOM元素出现和离开视口的时候触发「最开始监听上也会触发一次」
    // changes:数组，存储每一个监听的DOM元素和可视窗口的交叉状态，每一项都是对象，存储来交叉状态的相关信息
    //   + boundingClientRect 和基于getBoundingClientRect获取的值一样
    //   + isIntersecting:false/true  false没有出现在视口，true反之
    //   + target:存储的是监听的DOM元素
    //   + ...
    console.log(changes);
  });

  // @2 监听DOM元素  observe:监听  unobserve:移除监听
  ob.observe(lazyBox); 

  new IntersectionObserver(
    () => { },
    {
      threshold: [0] 
      //[0] 一露头和完全消失触发
      //[0.5] 出现一半触发
      //[1] 完全出现和消失一点触发
      //[0,0.5,1] 三个阶段都触发
    }
  );
*/
