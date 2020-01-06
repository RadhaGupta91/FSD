import React from 'react';
import ReactDOM from 'react-dom';
        
/**create h1 element without JSX (with createElement) **/
// ReactDOM.render(React.createElement('h1',{},"Hello World!!"), document.getElementById('root'));
/**create h1 element JSX **/
//ReactDOM.render(<h1>Hello world</h1>, document.getElementById('root'));

/**create <div><h1 className:'heading'>Hello world</h1></div> element without JSX  **/
//ReactDOM.render(React.createElement('div',{},React.createElement('h1',{className:'heading'},"Hello world")), document.getElementById('root'));


/**create basic UL List without JSX **/ 
/* ReactDOM.render(React.createElement('div',{},
                                        React.createElement('ul',{},
                                                            React.createElement('li',{},"MCA"),
                                                            React.createElement('li',{},"BCA"),
                                                            React.createElement('li',{},"BBA"))), document.getElementById('root'));
 */

 
/**create Nested UL List without JSX **/ 
/* const applesPrice = React.createElement('li', {}, '$1.00 per lb');
const apples = React.createElement('ul', {}, applesPrice);
const orangesPrice = React.createElement('li', {}, '$.70 per lb');
const oranges = React.createElement('ul', {}, orangesPrice);
const mangosPrice = React.createElement('li', {}, '$2.00 per lb');
const mangos = React.createElement('ul', {}, mangosPrice);
ReactDOM.render(
 React.createElement(
   'ul',
   {},
   React.createElement('li', {}, 'Apples', apples),
   React.createElement('li', {}, 'Oranges', oranges),
   React.createElement('li', {}, 'Mangos', mangos)
 ),
 document.getElementById('root')
); */
        
const color1 = React.createElement('li',{},"Green");
const color2 = React.createElement('li',{},"Blue");
const color3 = React.createElement('li',{},"Red");
const FavoriteColorList = React.createElement('ol',{},color1,color2,color3);
const FavoriteColors = React.createElement('li',{}, "Favorite Colors",FavoriteColorList);

const music1 = React.createElement('li',{},"Regina Spektor");
const music2 = React.createElement('li',{},"Antonín Dvořák");
const music3 = React.createElement('li',{},"Radiohead");
const FavoriteMusicList = React.createElement('ol',{},music1,music2,music3);
const FavoriteMusics = React.createElement('li',{}, "Favorite Music",FavoriteMusicList);

const foodItem1 = React.createElement('li',{},"Pizza");
const foodItem2 = React.createElement('li',{},"Ceasar Salad");
const foodItem3 = React.createElement('li',{},"Gnocchi");
const FavoriteFoodList = React.createElement('ol',{},foodItem1,foodItem2,foodItem3);
const FavoriteFoods = React.createElement('li',{}, "Favorite Food",FavoriteFoodList);


const google = React.createElement('a',{href:'https://www.google.com/'},"www.google.com");
const facebook = React.createElement('a',{href:'https://www.facebook.com/'},"www.facebook.com");
const instagram = React.createElement('a',{href:'https://www.instagram.com'},"www.instagram.com");

const favoriteWebsites1 = React.createElement('li',{},google);
const favoriteWebsites2 = React.createElement('li',{},facebook);
const favoriteWebsites3 = React.createElement('li',{},instagram);
const favoriteWebsitesList = React.createElement('ol',{},favoriteWebsites1,favoriteWebsites2,favoriteWebsites3);
const favoriteWebsites = React.createElement('li',{}, "Favorite Websites",favoriteWebsitesList);

const allLists = React.createElement('ul',{},FavoriteColors,FavoriteMusics,FavoriteFoods,favoriteWebsites);
ReactDOM.render(React.createElement('div',{},"My favourite Things",allLists),document.getElementById("root"));



/**create basic UL and OL with fun calling **/ 
/*
function list(a1,a2,a3,a4){
    return (
    <div><ol><li>{a1}</li><li>{a2}</li></ol><ul><li>{a3}</li><li>{a4}</li></ul></div>
    )
}
ReactDOM.render(list('Apple','Mango','Grapes','Banana'),document.getElementById("root"));
*/
                    
                                                                                