import React from 'react';
import BirdCard from './BirdCard.js';
import ListItem from './ListItem.js';
import {useState} from 'react';


const MainContainer = (props) => {
    const {speciesList, date, birdList} = props;
    const birdCards = [];

    for (let i = 1; i < 6; i++) {
      birdCards.push(<BirdCard key={i} id="birdCard" item={i}/>)
    }
    // const [birdList, setBirdList] = useState([]);
    const handleClick = () => {
        const newTop = [];
        for (let i = 1; i < 6; i++) {
            const field = "field"+i;
            newTop.push(document.getElementById(field).value)
        }
        console.log(newTop)
        const newEntry = {
            date: date,
            birds: newTop,
        }
      
        fetch('/addBirds', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEntry)
        })
        .catch(err => console.log(err))
    }

    const histBirds = [];
    console.log(birdList)

    for (let i = 0; i < birdList.length; i++) {
        let curr = birdList[i];
        histBirds.push(<ListItem key={i} id="listItem" date={curr.date} bird1={curr.birds[0]} bird2={curr.birds[1]} bird3={curr.birds[2]} bird4={curr.birds[3]} bird5={curr.birds[4]}/>)
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
        <div className="histBirds">
        <h5>Best days past</h5>
        <ul>
        {histBirds}
        </ul>
        </div>

        </section>
    )
}

export default MainContainer;