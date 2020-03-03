import React from 'react';

const Box = props => {

    const style = {
        height: '200px',
        width: '200px',
        border: '1px solid black',
        background: props.color, 
        display: 'inline-block',
        margin: '10px'
    }

    return (
        <div style={style}></div>
    )
}

export default Box;