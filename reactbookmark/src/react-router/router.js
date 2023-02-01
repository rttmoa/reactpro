import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom'




export default function ReactRoute () { 
    let history = useHistory()
    // console.log(history)

    function handleClick () { history.push("/") }
    function handleClick2 () {
        console.log(111)
        
        history.push("/user/lisi")
    }
    return(
        <Router>
            <div>
                <button onClick={handleClick}>Home</button>
                <button onClick={handleClick2}>About</button>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/user/zhangsan">About</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path="/"  > <Home /> </Route>
                    <Route path="/user/:name"> <UserName /> </Route>
                    <Route path="/user/:data"> <UserData /> </Route>

                </Switch>
            </div>
        </Router>
    )
}
function Home () {
    // console.log(useHistory)
    console.log(123)
    return <>
        <h2>Home</h2>
    </>
}
function UserName () {
    let history = useHistory()
    console.log(history)
    return <>
        <h2>UserName</h2>
    </>
}
function UserData () {
    let history = useHistory()
    console.log(history)
    return <>
        <h2>UserData</h2>
    </>
}
function Dashboard () {
    return <>
        <h2>Dashboard</h2>
    </>
}



// class Home extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){ return(<div>this.props.params.name</div>) }
// }