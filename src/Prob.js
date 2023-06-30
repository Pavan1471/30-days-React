import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const carinfo ={
    name: "Ford", model: "Mustang",
    name: "For", model: "Must",
    name: "Fo", model: "Mus",

}
const Probs = (probs) =>{
    return (
        <div>
            {probs.brand}
        </div>

    )
}



export default Probs;
