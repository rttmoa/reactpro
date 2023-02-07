import React, { Component } from "react";

// 定义外形属性
interface NameCardProps {
  id: number;
  name: string;
  age: number;
  contact: {
    email: string;
    phone: string | number;
  };
}

// 定义外形属性
interface NameCardStates {
  screenWidth: number;
}

class NameCard extends Component<NameCardProps, NameCardStates> {
  constructor(props: Readonly<NameCardProps>) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.setState({
      screenWidth: window.innerWidth,
    });
  }

  render() {
    const { name, age, contact } = this.props;
    const { screenWidth } = this.state;
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {contact.email}</p>
        <p>phone: {contact.phone}</p>
        <p>screenWidth: {screenWidth} </p>
      </div>
    );
  }
}

export default NameCard;
