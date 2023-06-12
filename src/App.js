// import './App.css';

// import React, { Component } from 'react'
// import CardList from './components/card-list/CardList';
// import SearchBox from './components/search-box/SearchBox';

// export default class App extends Component {
//   constructor(){
//     super();

//      this.state = {
//       monsters : [],
//       searchString: "",
//      }
//   }

//   componentDidMount(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then((users)=> this.setState(()=>{
//       return {monsters : users}
//     }));
      
//   }

//   handleChange = (event)=>{
//     let searchString = event.target.value.toLowerCase();
//     this.setState(()=>{
//       return { searchString}
//     })
//   }

//   render() {
//     const {monsters, searchString} = this.state;
//     const {handleChange} = this;
//     const filter_monster = monsters.filter(monster => monster.name.toLowerCase().includes(searchString));
    
//     return (
//       <div className="App">
//       <h1 className='app-title'>Monster Rolodex</h1>
//       <SearchBox handleChange= {handleChange} classname="search-box" placeholder="serach monster"/>
//       <CardList monsters = {filter_monster}/>
//       </div>
//     )
//   }
// }

import React from 'react'
import './App.css';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
import { useState,useEffect } from 'react';

export default function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [filteredMosnter, setFilteredMosnter] = useState(monsters);

  const handleChange = (event) => {
    let searchString = event.target.value.toLowerCase();
    setSearchString(searchString);
  }

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((users)=> setMonsters([...users]));
  },[]);

  useEffect(()=>{
    const filter_monster = monsters.filter(monster => monster.name.toLowerCase().includes(searchString));

    setFilteredMosnter(filter_monster);
  },[monsters, searchString])

  return (
    <div>
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox handleChange= {handleChange} classname="search-box" placeholder="serach monster"/>
      <CardList monsters = {filteredMosnter}/>
    </div>
  )
}



