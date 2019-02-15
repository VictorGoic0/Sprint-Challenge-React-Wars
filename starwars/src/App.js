import React, { Component } from 'react';
import './App.css';
import StarList from './components/StarList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentPage: 1
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
        console.log(data)
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = () => {
    this.setState({ currentPage: 2})
    this.getCharacters('https://swapi.co/api/people/?page=2');
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <section className="cards">
          <StarList starwarsChars={this.state.starwarsChars}/>
        </section>
        <button className={`previous${this.state.currentPage ? 2 : ''}`} onClick={() => this.componentDidMount()}>Previous Page</button>
        <button onClick={this.nextPage}>Next Page</button>
      </div>
    );
  }
}

export default App;
