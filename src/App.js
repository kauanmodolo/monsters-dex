import { Component } from 'react';
import Searchbox from './components/search-box/search-box';
import Cardlist from './components/card-list/card-list'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      };
    }

    
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => 
      this.setState(
        () => {
        return {monsters: users};
      }))
    }
  
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return {searchField}})
  };


  render(){
    const filteredMonsters = this.state.monsters.filter((monsters) => {
      return monsters.name.toLocaleLowerCase().includes(this.state.searchField)
    });
    return (
      <div className="App">  
      
      <Searchbox onChangeHandler = {this.onSearchChange}/>
      <Cardlist monsters = {filteredMonsters}/>
      </div>
    );
  }

  }

export default App;
