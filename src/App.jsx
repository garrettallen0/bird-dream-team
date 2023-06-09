import React, { useState, useEffect } from 'react';
import MainContainer from './components/MainContainer.jsx';



const App = () => {
  const [speciesData, setSpeciesData] = useState(null);
  const [currentDate, setCurrentDate] = useState('');

    
  useEffect(() => {
    fetch('https://api.ebird.org/v2/data/obs/US-CA-001/recent', {
      headers: {"x-ebirdapitoken": "k35m7c131mkp"}})
      .then(res => res.json())
      .then(res => setSpeciesData(res))
      .catch(err => console.log('App.componentDidMount: get species data: ERROR: ', err));

      const date = new Date();
      setCurrentDate(date.toDateString());

    fetch('/getBirds', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      const dataArray = JSON.parse(res);
      console.log(dataArray);
    })
    .catch(err => console.log(err))
  }, []);

  const speciesList = [];
  for (let i = 0; i <= Math.floor(speciesData?.length / 2); i++) {
    if (i ==  Math.floor(speciesData?.length / 2)) {
      speciesList.push(" ".concat(speciesData[i]?.comName));
    } 
    else {
      speciesList.push(" ".concat(speciesData[i]?.comName.concat(",")));
    }
  }

    return(
      <div>
        <MainContainer date={currentDate} speciesList={speciesList}/>
      </div>
    );
}

export default App;
