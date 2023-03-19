/* 参考网站：http://zxt_team.gitee.io/waterfall-flow/ */
(function () {
    let fallsBox = document.querySelector('#fallsBox'),
        columns = Array.from(fallsBox.querySelectorAll('.column')),
        loadMoreBox = document.querySelector('.loadMoreBox');

    /* 处理图片延迟加载的监听器 */
    let obLazy = new IntersectionObserver(changes => {
        // 循环判断每一个图片所在盒子，只要符合条件则延迟加载
        changes.forEach(item => {
            if (item.isIntersecting) {
                // 延迟加载
                let picBox = item.target,
                    img = picBox.querySelector('img');
                img.src = img.getAttribute('data-src');
                img.onload = () => img.style.opacity = 1;
                obLazy.unobserve(picBox);
                // 额外加一个自定义属性「写在结构上」
                picBox.setAttribute('isload', 'true');
            }
        });
    }, { threshold: [1] });

    /* 从服务器获取数据 && 绑定数据「实现瀑布流」 */
    const render = function render() {
        // 首先从服务器获取数据「ajax」
        let data = [],
            xhr = new XMLHttpRequest;
        xhr.open('GET', './data.json', false);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                data = JSON.parse(xhr.responseText);
            }
        };
        xhr.send();
        // 数据格式化：按照230的渲染宽度，算出渲染高度
        data = data.map(item => {
            let { width, height } = item;
            item.width = 230;
            item.height = Math.round(230 / (width / height));
            return item;
        });
        // 每三个为一组，创建出瀑布流的效果
        for (let i = 0; i < data.length; i += 3) {
            let group = data.slice(i, i + 3); //每一轮循环取出的三条数据
            // 从第二轮开始就要排序了
            if (i > 0) {
                group.sort((a, b) => a.height - b.height);
                columns.sort((a, b) => b.offsetHeight - a.offsetHeight);
            }
            // 迭代三列，把三条数据对应的DOM插入到三列中  column:每一列  item:对应的每条数据
            columns.forEach((column, index) => {
                let item = group[index],
                    divBox = document.createElement('div');
                divBox.className = "item";
                divBox.innerHTML = `<a href="${item.link}">
                    <div class="pic-box" style="height: ${item.height}px;">
                        <img src="" alt="" data-src="${item.pic}">
                    </div>
                    <p class="desc-box">${item.title}</p>
                </a>`;
                column.appendChild(divBox);
            });
        }
        // 每一次绑定成功，把创建的图片盒子放在监听器中
        let picBoxList = Array.from(fallsBox.querySelectorAll('.pic-box:not([isload])'));
        picBoxList.forEach(picBox => {
            obLazy.observe(picBox);
        });
    };
    render();

    /* 触底加载更多数据 */
    let num = 0;
    let obMore = new IntersectionObserver(changes => {
        let item = changes[0];
        if (item.isIntersecting) {
            // 触底了:加载更多数据「模拟从服务器获取需要点时间，设置个定时器」
            setTimeout(() => {
                render();
                num++;
                if (num >= 3) {
                    // 结束加载
                    obMore.unobserve(loadMoreBox);
                    loadMoreBox.innerHTML = '-- 已经到底了 --'
                }
            }, 500);
        }
    });
    loadMoreBox.style.display = 'block';
    obMore.observe(loadMoreBox);
})();