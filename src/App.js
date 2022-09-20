import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountires></LoadCountires>
    </div>
  );

function LoadCountires(){
  const [countires,setCountries] = useState([]);
  useEffect(()=>{

    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))

  }, [])
  return(
    <div>
      <h1>Visiting all countires in the World!</h1>
      <h3>Avaliable Countires: {countires.length}</h3>
    </div>
  )
}
}

export default App;
