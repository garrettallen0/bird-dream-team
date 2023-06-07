import React from 'react';

const BirdCard = ({item}) => {
    return (
        <div className="birdCard">
            <h3>Bird {item}</h3>
            <form>
                <label>Species: <input type="text" name="name" />
                </label>
            </form>
        </div>
    )
}

export default BirdCard;