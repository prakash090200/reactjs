import React from 'react'
import {fname,lname} from '../App'

export default function CompC() {
    return (
        <div>
        <fname.Consumer>
            {
                (fname)=>{
                    return (
                        <lname.Consumer>
                        {
                            (lname)=>{
                                return <b>Hey bro {fname}  {lname}       (using normal consumer thing)</b>
                            }
                        }
                        
                        </lname.Consumer>
                        )
                }
            }
        </fname.Consumer>
            
        </div>
    )
}
