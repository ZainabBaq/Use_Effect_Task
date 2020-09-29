import React,{useState,useEffect} from 'react';
import styled from 'styled-components'

function Data() {
   
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [valid, setValid] = useState(true);

    //1- use useEffect right after component is mounted by printing the three states : name,phone,email
    

    //2- use useEffect by printing email and phone every time they change
    

    //3- use useEffect by enabling the button if the three fields are filled with data,
    // but if the user delete them after enabling the button, the button must be disabled again
    


  return (
    <Div>
    <h1>Enter the following : </h1>
    
    <hr/>
    <div className="container">
  
    <input  placeholder= "Your Name" onChange ={(e)=>setName(e.target.value)} value={name || ''}/><br/><br/>
   
    <input placeholder= "Your Email" onChange ={(e)=>setEmail(e.target.value)} value={email || ''}/><br/><br/>
  
    <input placeholder= "Your Phone" onChange ={(e)=>setPhone(e.target.value)} value={phone || ''}/><br/><br/>
  
    <button disabled={valid} type="button" onClick ={()=>alert("Done")}>Enter</button>
    </div>

</Div>
  );
}


const Div = styled.div`
margin-top:100px;
margin-left: auto;
margin-right: auto;
width: 40%;
padding: 10px;
border: 3px solid #808080a3;
border-radius:13px;
font-family: Roboto, Arial, sans-serif;
font-size: 15px;

hr{
    height: 2px;
    background-color: #808080a3;
}
input{
    border-radius: 5px;
    background-color: #18aba478;
    width: 200px;
    padding: 16px 8px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
    h1 {
        text-align: center;
    font-size:18;
    }
        .container {
          
            padding: 16px 0;
            text-align:center;
            }
`
export default Data;
