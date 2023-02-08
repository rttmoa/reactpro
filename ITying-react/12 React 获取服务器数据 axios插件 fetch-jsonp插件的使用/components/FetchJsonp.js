import React from "react";
import fetchJsonp from 'fetch-jsonp';
class FetchJsonp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            list: [],
         };
    }
    getData = () => {
        //通过 fetchJsonp 获取服务器数据
        let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        fetchJsonp(api)
        .then(function(response) {
            return response.json()
        }).then((json)=> {
            // console.log(json);
            this.setState({
                list:json.result
            })
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }
    render() {
        return (
            <div>
                我是Jsonp
                <br />
                <button onClick={this.getData}>FetchJsonp获取服务器api接口数据</button>
                <ul>
                    {
                        this.state.list.map((val, key)=>{
                            // console.log(val.title);
                            return<li key={key}>aid:{val.aid} ? title:{val.title}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default FetchJsonp;