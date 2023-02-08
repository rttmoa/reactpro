import React  from 'react';




class TodoList extends React.Component{

    constructor(){

        super();  // 用在构造函数中，必须在使用this之前调用

        this.state = {                
         
            username:'',
            list: [

                {
                  title: '录制nodejs',
                  checked: true
                },
                {
                  title: '录制ionic',
                  checked: false
                },
                {
                    title: '录制nodejs11',
                    checked: true
                },
                {
                    title: '录制ionic1',
                    checked: false
                }
            ]
        } 
    }
    addData=()=>{
        // alert(this.refs.username.value);
        var temp=this.state.list;  /*获取list的值*/
        temp.push(this.refs.username.value);
        this.setState({  /*改变数据*/
            list:temp
        })

    }        
    removeData=(key)=>{
        // alert(key)
        var temp=this.state.list;  /*获取list的值*/
        temp.splice(key,1);
        this.setState({  /*重新复制*/
            list:temp
        })
    }

    checkboxChange=(key,checked)=>{
        console.log(key,checked)
        var list=this.state.list;
        list[key].checked=!checked;
        this.setState({
            list:list
        })
    }

    render() {
        return (
            <div>
                <input type="text" ref="username"/>
                <button onClick={this.addData}>+增加</button>
                <br />
                <hr />
                <br />
                <h2>进行中</h2>
                <ul>
                    {
                        this.state.list.map((value,key)=>{

                            if(value.checked){
                                return(
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this,key,value.checked)}/>
                                        {value.title}  
                                        ----- <button onClick={this.removeData.bind(this,key)}>删除</button> 
                                    </li>
                                )
                            }
                        })
                    }
                </ul>

                <h2>已完成</h2>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            if(!value.checked){
                                return(
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this,key,value.checked)}/>
                                    
                                        {value.title}  
                                        ----- <button onClick={this.removeData.bind(this,key)}>删除</button> 
                                    </li>                                        
                                )
                            }
                        })
                    }
                </ul>         
            </div>
        );
    }
}
export default TodoList;