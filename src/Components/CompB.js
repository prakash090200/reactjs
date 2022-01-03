import React,{useContext} from 'react'
import CompC from './CompC'
import {fname,lname,colgroup} from '../App'


export default function CompB() {
    let firstname=useContext(fname);
    let lastname=useContext(lname);
    let {appcolor}=useContext(colgroup); 

    return (
        <div>
            <b>Hey , Bro this is {firstname}    {lastname}       (Using UseContext HOOK)</b>
            <h6 style={{color:appcolor}}>  This is green color yes</h6>
            -------------------------------
             <CompC/>
        </div> 
    )
}
