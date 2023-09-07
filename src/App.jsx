import React, { useState } from 'react';
import Swal from 'sweetalert2'

// CommonJS
// const Swal = require('sweetalert2')
import './App.css'

const App = () => {
  const [name, setName] = useState();
  const [clas, setclas] = useState();
  const [num, setnum] = useState();
  const updateName = () => {
    setTimeout(() => {
      document.getElementById("table").innerHTML+=`<tr><td>${name}</td><td>${clas}</td><td>${num}</td></tr>`
    }, 3000);
    const Toast = Swal.mixin({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,timerProgressBar: true,didOpen: (toast) => {toast.addEventListener('mouseenter', Swal.stopTimer) 
    toast.addEventListener('mouseleave', Swal.resumeTimer)}}) 
    Toast.fire({
      icon: 'success',
      title: 'Data has been added Successfully'
    })
  };
  return (
    <>
    <center>
      <h1><b className='bbb'>A</b>dd <b className='bbb'>S</b>tudent <b className='bbb'>D</b>ata</h1>
        <input  type='text' onChange={(e) => setName(e.target.value)} value={name} placeholder='Please enter your Name'/>
        <br />  
        <input  type='text' onChange={(e) => setclas(e.target.value)} value={clas} placeholder='Please enter your Class name'/>
       <br /> 
        <input  type='text' onChange={(e) => setnum(e.target.value)} value={num} placeholder='Please enter your Roll No.'/>
        <br />  
        <button  onClick={updateName}>Add</button>
    </center>
<center>
<table class="styled-table" id='table'>
    <thead>
        <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Roll No.</th>
        </tr>
    </thead>
</table>
</center>
          </>
  );
};

export default App