import React, { Component } from "react";
import { Link } from "react-router-dom";
const axios = require("axios");
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      domain: "http://a.itying.com/",
    };
  }
  requestData = () => {
    let api = this.state.domain + "api/productlist";
    axios
      .get(api)
      .then((response) => {
        console.log(response);
        this.setState({
          list: response.data.result,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  componentDidMount() {
    ///生命周期挂载函数
    this.requestData();
  }
  render() {
    return (
      <div className="home">
        <div className="list">
          {this.state.list.map((value, key) => {
            return (
              <div className="item" key={key}>
                <h3 className="item_cate">{value.title}</h3>
                <ul className="item_list">
                  {value.list.map((v, k) => {
                    return (
                      <li key={k}>
                        <Link to={`/pcontent/${v._id}`}>
                          <div className="inner">
                            <img src={`${this.state.domain}${v.img_url}`} />
                            <p className="title">{v.title}</p>
                            <p className="price">{v.price}元</p>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
