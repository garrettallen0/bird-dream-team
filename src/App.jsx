import React, { Component }from 'react';
import MainContainer from './components/MainContainer.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }
    
  componentDidMount() {
    fetch('https://api.ebird.org/v2/data/obs/US-CA-001/recent', {
      headers: {"x-ebirdapitoken": "k35m7c131mkp"}})
      .then(res => res.json())
      .then(res => this.setState({data: res}))
      .catch(err => console.log('App.componentDidMount: get characters: ERROR: ', err));
  }

  render() {
    const {data} = this.state;
    const speciesList = [];
    console.log(data);
    // console.log(data[0])
    // for (let i = 0; i < data.length; i++) {
    //   speciesList.push(data[i].comName);
    // }
    console.log(speciesList)
    return(
      <div>
        <MainContainer/>
      </div>
    );
  }
}

export default App;
