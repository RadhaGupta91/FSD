import React from 'react';
import Food from './Fav/Food';
import Car from './Fav/Car';
import Movies from './Fav/Movies';

import {Route, Link} from 'react-router-dom';

const Fav =({match})=>{
    let selectedComponent = null;
    switch(match.params.topicId)
    {
        case "favorite_car":
            selectedComponent = <Car/>
            break;
        case "favorite_food":
            selectedComponent = <Food/>
            break;
        case "favorite_movie":
            selectedComponent = <Movies/>
            break;
            
    }   
    return(
        <div>
            {selectedComponent}
        </div>
    )
}

const FavoriteThings = ({match})=>{
    return(
                <div className='screen'><h3>Please Choose an item</h3>
                <ul>
                    <li><Link to={`${match.url}/favorite_car`}>Favorite Car</Link></li>
                    <li><Link to={`${match.url}/favorite_food`}>Favorite Food</Link></li>
                    <li><Link to={`${match.url}/favorite_movie`}>Favorite Movie</Link></li>
                </ul>
                <Route path={`${match.url}/:topicId`} component={Fav}></Route>
        </div>
    )
}

export default FavoriteThings;