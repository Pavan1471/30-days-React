import "./App.css";
import { useState } from "react";

// function Car(probs) {
//   return <h1>{probs.brand}</h1>;
// }
// function Keys() {
//   const cars = [
//     { id: 1, brand: "Ford" },
//     { id: 2, brand: "BMW" },
//     { id: 3, brand: "Audi" },
//   ];

//   return (
//     <>
//     <h1>hii</h1>
//       {cars.map((data) =>
//         <Car key={cars.id} brand={cars.brand} />
//       )}
//     </>
//   );
// }

var people = [
  {
    name: "James",
    age: 31,
    price: 233,
  },
  {
    name: "John",
    age: 45,
    price: 15,
  },
  {
    name: "Paul",
    age: 65,
    price: 983,
  },
  {
    name: "Ringo",
    age: 49,
    price: 373,
  },
  {
    name: "George",
    age: 34,
    price: 234,
  },
];

function Keys() {
  // const peopleNew = people.filter(person => person.age < 40);.

  // const peopleNew = people.sort(function(a, b){return b - a});
  function sortEvent() {
    people = people.sort((a, b) => b.age - a.age);
  }

  // for (const person of sortedPeople) {
  //   console.log(person.name, person.age);
  // }

  // const newList = carinfo.filter(data=>carinfo.age<40);
  return (
    <div>
      {people.map((filteredPerson) => (
        <li>{filteredPerson.age}</li>
      ))}
      <button onClick={sortEvent}>Sort in incresing order</button>
    </div>
  );
}

export default Keys;
