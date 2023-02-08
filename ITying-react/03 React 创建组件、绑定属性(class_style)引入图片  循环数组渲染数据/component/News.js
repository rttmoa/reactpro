import React from 'react';
// import Img1 from '../assets/images/account.jpg';
import '../assets/css/index.css';




/**
 * 1.绑定数据  绑定属性 
 * 2.引入图片 | 本地图片/远程图片
 * 3.遍历数组 渲染数据 三种方式
 * */
class News extends React.Component{
    constructor(props) {
        super(props) /*用于父子组件传值  固定写法 */
        this.state = {
            userinfo: "张三",
            msg: "新闻",
            username2: "222",
            list1: ['111', '222', '333', '444'],
            list2: [<h2 key="1">我是H2</h2>, <h2 key="2">我是H2</h2>],
            list3: [{title: "t1", title: "t2", title: "t3", title: "t4",}]
        }
    }

    render(){
        let listResult = this.state.list1.map(function(val, key){
            return <li key={key}>{val}</li>
        })

        return(
            <div className='news'>
                {/* 第二节 */}
                <h2>姓名：{this.state.userinfo}</h2>
                <ul> <li>这是一个列表</li> </ul> 
                <h2>{this.state.username2}</h2>

                {/* 第三节  引入本地图片*/}
                <img src={Img1} />  -->  import Img1 from '../assets/images/account.jpg';
                <img src={require('../assets/images/account.jpg')} />
                {/* 引入远程图片 */}
                <img src='https://www.baidu.com/img/PC_f45c771c06afa6cb4ec918f0d233bfcf.gif' />

                {/* 渲染数组 */}
                <hr />
                {this.state.list2}  
                <ul>{listResult}</ul>
                <hr />
                {this.state.list3.map(function(val, key){
                    // return<li key={key}>{val.title}</li> 一行
                    return(<li key={key}>{val.title}</li>)/* 多行 */
                })}
            </div>
        ) 
    }


}

export default News;