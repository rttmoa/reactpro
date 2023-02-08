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
  componentDidMount() {
    this.requestData();
  }
  requestData = () => {
    var api = `${this.state.domain}api/productlist`;

    axios.get(api).then((response) => {
        console.log(response); 
        this.setState({
          list: response.data.result,
        });
      }).catch(function (error) {
        console.log("error", error);
      }); 
  };
  testBox = () => {
    console.log(111)
    this.props.history.push("/pcontent/iamcat")
  }
  render() {
    return (
      <div className="home">
        <div className="list">
          <div className="item">
            <h3 className="item_cate">使用history.push()</h3> 
            <ul>
              <li>
                  <div className="inner" style={{width:200}} onClick={this.testBox}>
                    <img src={`http://a.itying.com/upload\\20180417\\1523955280626.jpeg`} style={{width: 200}}/>
                    <p className="title">Title</p>
                    <p className="price">365元</p>
                  </div>
              </li>
            </ul> 
          </div>
          {
            this.state.list.map((value, key) => {
            
              return (
                <div className="item" key={key}>
                  <h3 className="item_cate">{value.title}</h3>
  
                  <ul className="item_list">
                    {value.list.map((v, k) => {
                      return (
                        <li key={k}>
                          <Link to={`/pcontent/${v._id}`}>
                            <div className="inner" style={{width:200}}>
                              <img src={`${this.state.domain}${v.img_url}`} style={{width: 200}}/>
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
            })
          }
        </div>
      </div>
    );
  }
}

export default Home;
