import React from 'react';
import ReactDOM from 'react-dom';
        
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
                    
                                                                                