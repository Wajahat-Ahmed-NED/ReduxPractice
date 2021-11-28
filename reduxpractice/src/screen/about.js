import React from 'react'
import { useSelector } from 'react-redux'
import { getData } from '../config/action'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export default function About() {
    const dispatch = useDispatch()
    const dataFromRedux = useSelector((a) => a)
    console.log(dataFromRedux.apiData)

    useEffect(() => {
        dispatch(getData)
    }, [])
    return (
        <div>
            <h1>Oh I am About page</h1>
        </div>
    )
}
