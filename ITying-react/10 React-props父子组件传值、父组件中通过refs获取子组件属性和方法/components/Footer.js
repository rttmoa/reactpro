import React from "react";
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "常嘉琪_footer",

         };
    }
    run = () => {
        console.log("我是底部组件的run方法");
    }
    render() {
        return (
            <div>
                <h2>我是一个底部组件</h2>
            </div>
        );
    }
}

export default Footer;