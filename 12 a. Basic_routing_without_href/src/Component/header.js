import React from 'react';

const Header = (props)=> (<div>title: {props.title}<br></br>
                            <a href='/'>Home</a>    
                            <a href='/about'>About</a>    
                            <a href='/topic'>Topic</a>    
                        </div>)

export default Header;