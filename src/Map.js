import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const applicants = [ {
    name: 'Joe', work: 'freelance-developer',
    blogs: '54', websites: '32',
    hackathons: '6', location: 'morocco', id: '0',
  },
  {
    name: 'janet', work: 'fullstack-developer', 
    blogs: '34', websites: '12', 
    hackathons: '8', location: 'Mozambique', id: '1',
  },

];

function Map(){
    return(
<>
        {
          // Type - 1 of mapping
        // applicants.map(function(data) {
        //     return (
        //       <div>
        //         Applicant name:  {data.name}
        //       </div>
        //     )
        //   })

        // mapping Type -2 using arrow functions
        applicants.map(data=>
          <div>{data.name}</div>
        )
        }
</>
    )
}

export default Map;