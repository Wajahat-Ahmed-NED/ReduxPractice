import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
    const dataFromRedux=useSelector((a)=>a)
    const dispatch=useDispatch()

    const update=()=>{

        const obj={
            userName:"ali",
            age:23,
        }
    
        dispatch({
            type:"UPDATEINITIALSTATE",
            ...obj,
        })
        console.log(dataFromRedux)
    }

    console.log(dataFromRedux)




    return (
        <>
            <h1>{dataFromRedux.userName}</h1>
            <button onClick={update}>Update</button>

        </>
    )
}
