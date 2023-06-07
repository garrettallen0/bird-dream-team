import React from 'react';
import BirdCard from './BirdCard.js';
import {useState} from 'react';

const MainContainer = () => {


    const birdCards = [];

    for (let i = 1; i < 6; i++) {
      birdCards.push(<BirdCard id='birdCard' item={i}/>)
    }
    const [birdList, setBirdList] = useState([]);
    function handleClick() {
        console.log(birdList)
        setBirdList();
    }


    return (
        <section className="mainSection">
        <header className="pageHeader">
            <h1>Birds Top 5</h1>
            <h4>the cream of the crop</h4>
        </header>
        <div className="todayBirds">
            {birdCards}
        </div>
        <div className="buttonLine">
        <input className="subButton" type="submit" onClick={handleClick} value="Submit todays top birds" />
        </div>

        </section>
    )
}

export default MainContainer;