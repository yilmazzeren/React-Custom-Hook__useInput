import React from 'react';
import './App.css';
import {useInput} from "./hooks/useInput"

function App() {

  // const [name,setName] = useState("");
  // const [age,setAge] = useState("");
  // const [email,setEmail] = useState("");

  // const [inputs,setInputs] = useState({name :"",age:"",email:""})

  // const handleChange = event => {
  //   // ...önceki inputları açıyoruz 
  //   setInputs({...inputs, [event.target.name] : event.target.value})
  // }
  

  const [inputs,setInputs] =useInput({name :"",age:"",email:""});

  return (
    <div className="App">
      <h2>Custom Hook</h2>
      <div className="form">
      <label htmlFor="name">
        Name : <input name="name" value={inputs.name} onChange={setInputs}  />
      </label>

      <label htmlFor="name">
        Age : <input name="age" value={inputs.age} onChange={setInputs}  />
      </label>

      <label htmlFor="name">
        Email : <input name="email" value={inputs.email} onChange={setInputs}  />
      </label></div>
      
    </div>
  );
}

export default App;
