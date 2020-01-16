import React from 'react'
import {Route,Link} from 'react-router-dom'

const Topic = ({match})=>{return(
        <div>
            <h1>{match.params.topicId}</h1>
        </div>
)}

const Contact = ({match})=>{
    return(<div>
            <Route exact path= {match.url} render = {()=> <h3>Please select a topic</h3>}></Route>
            <ul>
                <li><Link to={`${match.url}/rendering`}>Rendering the react</Link></li>
                <li><Link to={`${match.url}/LoadingModule`}>Load Reacr Module</Link></li>
                <li><Link to={`${match.url}/angular`}>Rendering the angular</Link></li>
            </ul>
            <Route path={`${match.url}/:topicId`} component={Topic}></Route>
        </div>)
}

export default Contact;