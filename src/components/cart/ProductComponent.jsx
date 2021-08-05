import React, { useState } from 'react'

export default function ProductComponent(props) {

    const [count, setCount] = useState(0);

    const formatCount = () => {
        if (count === 0) {
            return "Zero";
        }
        else {
            return count;
        }
    }

    const handleDecrement = () => {

        setCount(count - 1);
    }

    const handleIncrement = () => {

        setCount(count + 1);
    }

    const getBadgeClasses = () => {

        let classes = "badge m-2 badge-md badge-";
        classes += count === 0 ? "warning" : "primary";
        return classes;
    }




    return (
        <div>
            <label>{props.product}</label>
            <br />
            <button className="btn btn-danger btn-sm" onClick={handleDecrement}>Decrement</button>
            <span className={getBadgeClasses()}> {formatCount()}  </span>
            <button className="btn btn-secondary btn-sm" onClick={handleIncrement}>Increment</button>

        </div>
    )
}
