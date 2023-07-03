import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import fruit from "./fruit.png";
// import fruits from './data.js';

const fruits = [
  {
    name: "orange",
    image:
      "https://w7.pngwing.com/pngs/187/615/png-transparent-orange-fruit-orange-tangerine-orange-natural-foods-food-citrus-thumbnail.png",
    taste: "sour",
  },
  {
    name: "apple",
    image:
      "https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834",
    taste: "sweet",
  },

  {
    name: "mango",
    image:
      "https://w7.pngwing.com/pngs/790/811/png-transparent-sliced-mangoe-juice-mango-alphonso-fruit-flavor-mango-food-dried-fruit-tropical-fruit-thumbnail.png",
    taste: "pulpy",
  },
];

function Map() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  // const

  return (
    <>
      <center>
        <h1>Search fruits</h1>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />{" "}
        <br />
      </center>
      {
        // Type - 1 of mapping

        // fruits
        //   .filter((data) =>
        //     data.name.toUpperCase().includes(search.toUpperCase())
        //   )
        //   .map(function (data) {
        //     return (
        //       <div className="container">
        //         <img src={data.image}></img>
        //         <div>{data.name}</div>
        //         <div>{data.taste}</div>
        //       </div>
        //       // </br>
        //     );
        //   })
        
      }
      {/* {
        (search!=data.name) &&
        
         <h1>Item not found</h1>
        
        } */}
    </>
  );
}

export default Map;
