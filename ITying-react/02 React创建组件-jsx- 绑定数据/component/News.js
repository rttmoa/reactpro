import React from 'react';

class News extends React.Component{
    constructor(props) {
        super(props) /*用于父子组件传值  固定写法 */
        this.state = {
            userinfo: "张三",
        }
    }



    render(){
        return(
            <div>
                <h2>姓名：{this.state.userinfo}</h2>
                    <ul>
                        {/* < li >  先写< 再 li 再 >*/}
                        <li>这是一个列表</li>
                        <li>这是一个列表</li>
                        <li>这是一个列表</li>
                    </ul>
                
            </div>
        ) 
    }


}

export default News;