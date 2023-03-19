let zTree = document.querySelector('#zTree');

// 基于事件委托，给未来动态创建的EM做事件绑定
zTree.addEventListener('click', function (ev) {
    let target = ev.target,
        targetTag = target.tagName;
    if (targetTag === 'EM') {
        // 单击的是EM标签
        let ulBox = target.nextElementSibling,
            domToken = target.classList; //获取的是一个DOMTokenList类的实例
        if (domToken.contains('open')) {
            // 当前是展开的，我们让其隐藏
            domToken.remove('open');
            if (ulBox) ulBox.style.height = '0px';
            return;
        }
        // 当前是隐藏的，我们让其展开
        domToken.add('open');
        if (ulBox) ulBox.style.height = 'auto';
    }
});

// 异步获取数据
const queryData = function queryData() {
    return new Promise(resolve => {
        let xhr = new XMLHttpRequest;
        xhr.open('GET', './data.json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                resolve(data);
            }
        };
        xhr.send();
    });
};

// 数据绑定
const binding = function binding(data) {
    let str = ``;
    data.forEach(item => {
        let { name, open, children } = item;
        str += `<li>
            <a href="javascript:;" class="title">${name}</a>
            ${children ? `
                <em class="icon ${open ? 'open' : ''}"></em>
                <ul class="level" style="height: ${open ? 'auto' : '0px'};">
					${binding(children)}
				</ul>
            ` : ``}
        </li>`;
    });
    return str;
};

queryData()
    .then(value => {
        // value:从服务器获取的结果
        let html = binding(value);
        zTree.innerHTML = html;
    });