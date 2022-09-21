import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Person from './components/Person/Person';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Person></Person>
    </div>
  );
  }
















// function LoadCountires(){
//   const [countires,setCountries] = useState([]);
//   useEffect(()=>{

//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))

//   }, [])
//   return(
//     <div>
//       <h1>Visiting all countires in the World!</h1>
//       <h3>Avaliable Countires: {countires.length}</h3>
//       {
//         countires.map(country=> <Country name={country.name.common} city={country.capital} img={country.flags.png}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div className='country'>
//       <h1>{props.name} </h1>
//       <p>City: {props.city}</p>
//       <img src={props.img} alt="" />
//     </div>
//   )
// }

export default App;
