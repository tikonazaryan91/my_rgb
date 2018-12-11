import React from "react";
import "./range.css";

function Range(props) {

    const {color, value, onChange} = props;
    return (
        <div  className="inputs">
            <input
                value={value}
                type="range"
                onChange={onChange}
                name={color}
                min={0}
                max={255}
                step={1}/>
            <div>{value}</div>
        </div>
    );
}

export default Range;