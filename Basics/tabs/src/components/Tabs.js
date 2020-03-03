import React, { useState } from 'react';

const Tabs = props => {
    const[active, setActive] = useState({
        tab: 'Tab 1'
    })

    function tabMaker(idx, item) {
        return (
            <li key={idx} style={item === active.tab ? activeItem : listItem} onClick={() => makeActive(item)}>{item}</li>
        )
    }

    const makeActive = (item) => {
        setActive({
            tab: item
        })
    }

    const activeItem = {
        display: 'inline',
        margin: '0px 10px',
        border: '1px solid lightgrey',
        padding: '10px', 
        backgroundColor: 'black',
        color: 'white'
    }

    const listItem = {
        display: 'inline',
        margin: '0px 10px',
        border: '1px solid lightgrey',
        padding: '10px'
    }
    
    return (
        <div>
            <ul>
                {props.items.map((item, idx) => tabMaker(idx, item))}
            </ul>
            <div>
                <p>{active.tab} content is showing here</p>
            </div>
        </div>
    )
}

export default Tabs;