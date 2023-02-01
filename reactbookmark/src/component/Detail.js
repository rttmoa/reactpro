import React, { Component } from 'react'

export default class Detail extends Component {
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps执行')
    /* 可能做一些骚操作 wu lian */
  }
  render() {
    return (
      <div>Detail</div>
    )
  }
}
