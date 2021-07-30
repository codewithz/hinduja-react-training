import React from 'react'

export default function AlertComponent() {

    const handleClick=()=>{
        alert('Button Clicked');
    }


    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}


