import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Product from './Product'


// ----- DAY - 4 -----------


// function App() {
//   const [name,setName] = useState("");
//   const HandleSubmit = ()=>{
//     console.log(name)
  

//   }
//   return (
//     <div className="App">
//         <input onChange={(e)=>setName(e.target.value)}></input>
//         {/* <div>{name}</div> */}
//         <button onClick={HandleSubmit}>submit</button>
//     </div>
//   );
// }

// DAy - 5 Project Food recipe 

const App = () => {
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
  const YOUR_APP_ID = "8aecf864";
  const YOUR_APP_KEY ="b460ca299374805ea2ad4be4f6ea081a";
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    )
  }
  return (
    <div>
      <center>
        <h4>Food Recipe App</h4>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/> <br/>
          <input type="submit" className="btn btn-primary" value="Search"/>
        </form>
        {data.length>=1 ? <Product  data={data}/>:null}
      </center>
    </div>
  )
}

export default App;
