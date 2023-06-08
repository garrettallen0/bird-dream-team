import React from 'react';
import BirdCard from './BirdCard.js';
import {useState} from 'react';

const MainContainer = (props) => {
    const {speciesList, date} = props;
    const birdCards = [];

    for (let i = 1; i < 6; i++) {
      birdCards.push(<BirdCard key={i} id="birdCard" item={i}/>)
    }
    const [birdList, setBirdList] = useState([]);
    const handleClick = () => {
        const newTop = [];
        for (let i = 0; i < 5; i++) {
            newTop.push(document.getElementById('location'))
        }
        // console.log(birdList)
        setBirdList();
    }

    return (
        <section className="mainSection">
        <header className="pageHeader">
            <h1>Birds Top 5</h1>
            <h4>the cream of the crop</h4>
        </header>
        <div className="allSpecies">{speciesList}</div>
        <div className="todayBirds">
            {birdCards}
        </div>
        <div className="buttonLine">
        <h3>{date}</h3>
        <input className="subButton" type="submit" onClick={handleClick} value="Submit today's top birds" />
        </div>

        </section>
    )
}

export default MainContainer;