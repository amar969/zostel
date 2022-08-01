import './App.css';
import React, { useEffect, useState } from 'react'
function Register() {
 const [firstname,setfirstname]=useState("");
 const [middlename,setmiddlename]=useState("");
 const [lastname,setlastname]=useState("");
 const [gender,setgender]=useState("");
 const [email,setEmail]=useState("");
 const [phone,setphone]=useState("");
 const [address,setaddress]=useState("");
function saveData()
{
  let data={firstname, middlename, lastname, gender, email, phone,address}
console.warn(data);
  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    console.warn("resp",resp);
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}
  return (
    <div classfirstname="App">
      <h1>POST API Example </h1>  
      <input type="text" firstname="firstname" value={firstname} onChange={(e)=>{setfirstname(e.target.value)}}  /> <br /> <br />
      <input type="text" firstname="middlename" value={middlename} onChange={(e)=>{setmiddlename(e.target.value)}}  /> <br /> <br />
      <input type="text" firstname="lastname" value={lastname} onChange={(e)=>{setlastname(e.target.value)}}  /> <br /> <br />
      <input type="gender" firstname="gender" value={gender} onChange={(e)=>{setgender(e.target.value)}}  /> <br /> <br />
      <input type="email" firstname="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
      <input type="number" firstname="phone"  value={phone} onChange={(e)=>{setphone(e.target.value)}}/> <br /> <br />
      <input type="text" firstname="address"  value={address} onChange={(e)=>{setaddress(e.target.value)}}/> <br /> <br />
      <button type="button" onClick={saveData} >Save New User</button>
    </div>
  );
}
export default Register;