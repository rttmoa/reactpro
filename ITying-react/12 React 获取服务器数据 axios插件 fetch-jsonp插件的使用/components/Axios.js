import React from "react";
import axios from "axios"; /*先安装 URL 模块 才能使用 axios  */
// const axios  = require('axios');
class Axios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "username",
      list: [],
    };
  }
  getData = () => {
    //通过axios获取服务器数据
    // console.log("test");
    let api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";
    axios
      .get(api)
      .then((response) => {
        // console.log(response.data.result);///(20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        //用到this要注意this指向
        this.setState({
          list: response.data.result,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <h2> 我是Axios 组件</h2>
        <button onClick={this.getData}>获取服务器api接口数据</button>
        <ul>
          {this.state.list.map((val, key) => {
            // console.log(val.title);
            return (
              <li key={key}>
                aid:{val.aid}? title:{val.title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Axios;
