import React from 'react'
import './InputBox.css'

/**
 * inputbox
 */
function InputBox(props) {

    return (
        <input type={props.type} defaultValue={props.value} name={props.name} className="text-input" />
    );
}

export default InputBox;