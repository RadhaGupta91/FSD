import React, {Component} from "react";

import classes from './BuildControl.css';

export default class BuildControl extends Component{
        
    render(){   
        var total = 'slices : 0';
        if(this.props.totalSlices>0)
        {
            total = 'slices : '+(this.props.totalSlices);
        } 
        return(
            <div className = {classes.BuildControl}>
                <div className={classes.Label}>{this.props.label} ({this.props.itemPrice}) {total}
                
                
                </div>
                <button 
                    className={classes.Less} 
                    onClick={this.props.removed} 
                    disabled={this.props.disabled}>Less</button>
                <button 
                    className={classes.More} 
                    onClick={this.props.added}>More</button>
            </div>
        )
    }
}