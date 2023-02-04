


import React from "react";
import { Link } from 'react-router-dom'

function Home(props) {
    // console.log(props.children);
    return (<>
        <div className="Home">
            <h1>Home</h1>
            <Link to='/home/about'>About</Link>
            <Link to='/home/helloworld'>HelloWorld</Link>
        </div>
        <div className="HomeChildren">
            {props.children}
        </div>
    </>
    );
}

export default Home;