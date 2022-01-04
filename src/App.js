import logo from './logo.svg';
import './App.css';
import React,{createContext,useState} from 'react'
import CompA from './Components/CompA'


const fname=createContext();
const lname=createContext();
const colgroup=createContext();
function App() {
  
  const [col,setCol]=useState("green");

  return (
    <div className="App">  
    <fname.Provider value={"Prakash"}>
    <lname.Provider value={"Kumar"}>
    <colgroup.Provider value={{appcolor:col}}>   
      
     <CompA/>

     </colgroup.Provider>
     </lname.Provider>
    </fname.Provider>
    </div>
  );
}
export {fname,lname,colgroup};
export default App;

