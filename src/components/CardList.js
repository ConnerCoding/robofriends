import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // Create the card in card.js sending the info needed, then return the component
    const cardComponent = robots.map((user, i) => {
        return (
            <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
                website={robots[i].website}
            />);
    })
    return (
        <div>
             { cardComponent }
        </div>
    );
}

export default CardList;