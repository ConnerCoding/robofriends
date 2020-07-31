import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/* utilize the https://robohash.org/ API to create robots with id as the randomizer */}
            <img src={`https://robohash.org/${id}?size=200x200`} alt='robot'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;