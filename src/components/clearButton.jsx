import React from 'react';
import './clearButton.css';



export const ClearButton = (props) => (
    <div  onClick = {props.handleClear} className = "clearBtn">
    {props.children} 
    </div>
)