import React from 'react';
import axios from 'axios';
import './App.css';
import Navbar from "./Components/Navbar";

class App extends React.Component {

  state = {
    players: []
  }

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/googletrends/data/master/20190815_WomensWorldCup.csv')
    .then(response => {
      console.log("this is world cup data", response)
      this.setState({
        players: response.data
      });
    })
    .catch(error => console.log(error))
  }

render() {
  return (
    <div className="App">
      <Navbar />
      <h1> Player's Search Trends by Player, Country, Search Interest </h1>
      {this.state.players}
    </div>
  );
  }
}

export default App;
