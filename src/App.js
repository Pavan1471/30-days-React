import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name,setName] = useState("");
  const HandleSubmit = ()=>{
    console.log(name)
  

  }
  return (
    <div className="App">
        <input onChange={(e)=>setName(e.target.value)}></input>
        {/* <div>{name}</div> */}
        <button onClick={HandleSubmit}>submit</button>
    </div>
  );
}

export default App;
