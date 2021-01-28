import React from 'react'

const Temperature = ({temp,feel}) => {
    return (
        <div>
             <h1>{temp}<span>&#8451;</span></h1>
            <h2>Feels like {feel}<span>&#8451;</span></h2>
        </div>
    )
}

export default Temperature
