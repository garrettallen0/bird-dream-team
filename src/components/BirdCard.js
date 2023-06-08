import React from 'react';

const BirdCard = ({item}) => {
    const field = "field"+item;

    return (
        <div className="birdCard">
            <h3>Bird {item}</h3>
            <form>
                <label>Species: <input id={field} type="text" name="name" />
                </label>
            </form>
        </div>
    )
}

export default BirdCard;