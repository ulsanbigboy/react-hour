
import React, { useState } from "react";


const Input = () => {
    const [txtValue, setTextValue] = useState("0");
    const onChange = (e) => {
        setTextValue(e.target.value);
    }
    return (
        <div>
            <input type="text" value={txtValue} onChange={onChange} />
            <p>{txtValue}</p>
        </div>
    );
}

export default Input;

