import React from 'react';

// Add scroll functionality to the robot card list
// Simply add the robots (props.children) into a div with scroll enabled
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children};
        </div>
    )
}

export default Scroll;