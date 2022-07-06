import React from 'react'
import { useEffect, useState } from 'react'
import './app.css'

function App() {
    const [data, setData] = useState(2)

    console.log({data})

    useEffect(() => {
        setTimeout(() => {

            setData(4)
        }, 2000);
    }, [])
    return (
        <div className='div_main'>React without CRA {data}</div>
    )
}

export default App