import React, { Component } from 'react'
// import qs from 'querystring'



const DetailData = [
	{id:'01',content:'你好，中国'},
	{id:'02',content:'你好，尚硅谷'},
	{id:'03',content:'你好，未来的自己'}
]
export default class Detail extends Component {
	render() {
		// console.log(this.props);	
		console.log('次数', 123)
		
		// 一、接收params参数
		// console.log('payh:', this.props.match.url)/// path: home/message/detail/03/消息3
		// console.log('path:', this.props.history.location.pathname)//path: /home/message/detail/03/消息3
		// console.log('path:', this.props.location.pathname)//path: /home/message/detail/03/消息3 
		// const {id,title} = this.props.match.params;//params: {id: '03', title: '消息3'}
		

		// 二、接收search参数
		// const {search} = this.props.location;// this.props.location.search: "?id=02&title=消息24
		// const {id,title} = qs.parse(search.slice(1));		


		// 三、接收state参数
		const {id,title} = this.props.location.state || {};


		const findResult = DetailData.find((detailObj)=>{
			return detailObj.id === id
		})
		return (
			<ul>
				<li>ID:{id}</li>
				<li>TITLE:{title}</li>
				<li>CONTENT:{ findResult ? findResult.content: null}</li>
			</ul>
		)
	}
}
