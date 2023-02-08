import React from 'react';




/**
 * 1.ReactForm------提交表单( 获取表单 )
 * 2.input text checkbox radio  select  textarea  以及获取表单的内容
 * 3.监听的 value和onChange事件 以及 渲染数据
 */
class ReactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "UserName",
            name: "",
            sex: '2',
            city: '',
            citys: [ '北京', '上海', '深圳' ],
            hobby: [{
                title: "睡觉",
                checked: true,
            },
            {
                title: "吃饭",
                checked: false,
            },
            {
                title: "桥底",
                checked: false,
            },],
            info: '', 
        };
        this.handleInfo = this.handleInfo.bind(this);  /*改变 this 指向  */
    }
    handleSubmit = (e) => {
        // 阻止 submit 默认提交事件
        e.preventDefault();
        console.log(this.state.name, this.state.sex, this.state.city, this.state.hobby, this.state.info);
    }
    handleName = (e) => { this.setState({ name: e.target.value }) }
    handleSex = (e) => { this.setState({ sex: e.target.value }) }
    handleCity = (e) => { this.setState({ city: e.target.value }) }
    handleHobby = (key)=> {
        var hobby = this.state.hobby;
        hobby[key].checked = !hobby[key].checked;
        this.setState({
            hobby: hobby,
        })
    }
    handleInfo(e){ this.setState({ info: e.target.value }) }
    render() {
        return (
            <div>
                {this.state.message}
                <br />
                <form onSubmit={this.handleSubmit}>
                    姓名：<input type="text" value={this.state.name} onChange={this.handleName} />
                    <br />
                    性别： 男<input type="radio" value="1" checked={this.state.sex === "1"} onChange={this.handleSex} />
                    女<input type="radio" value="2" checked={this.state.sex === "2"} onChange={this.handleSex} />
                    <br />
                    居住城市：
                    <select value={this.state.city} onChange={this.handleCity}>
                        {
                            this.state.citys.map(function (val, key) {
                                return <option key={key}>{val}</option>
                            })
                        }
                    </select>
                    <br />
                    爱好：
                    {
                        // 注意 this 指向
                        this.state.hobby.map((val, key) => {
                            return (
                                <span key={key}>
                                    <input type="checkbox" checked={val.checked} onChange={this.handleHobby.bind(this, key)} />{val.title}
                                </span>
                            )
                        })
                    }
                    <br />
                    备注：
                    <textarea value={this.state.info} onChange={this.handleInfo} />
                    <br />
                    <input type="submit" defaultValue="提交" />
                    <br />

                </form>
            </div>
        );
    }
}

export default ReactForm;