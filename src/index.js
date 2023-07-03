import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Conditional from './Conditional';
import App from './App';
import Keys from './Keys'
import reportWebVitals from './reportWebVitals';
import Map from './Map'
import Probs from './Prob'
import Product from './Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Map/>
    <Keys/>
    {/* <Conditional/> */}
    {/* <Probs/> */}
    {/* <Product/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
