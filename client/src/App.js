import React from 'react';
import axios from 'axios'; 
import PlayerCard from './components /PlayerCard';
import PlayerForm from './components /PlayerForm';
import './App.css';




class App extends React.Component{
// Constructor for state
constructor(){
super()
  this.state = {
    players: [],
    name: " ",
    country:" ",
    searches: new Date()
  }
}

componentDidMount(){
  axios
    .get(`http://localhost:5000/api/players`)
    .then(res => {
      console.log(res.data)
      //res.data.....
      this.setState({
        players: res.data
      })
    })
    .catch(err => console.log(err.message))
  }


render(){
  return(
  <div className = "App">
    <h1>Player List</h1>
    <PlayerForm />
    <div className = "players">
      {this.state.players.map(player => (
        <PlayerCard 
          name = {player.name}
          country = {player.country}
          searches = {player.searches}
        />
      ))}
    </div>
  </div>
  )}}
export default App