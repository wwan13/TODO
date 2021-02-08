import React from 'react'
import './InputBox.css'

/**
 * inputbox
 */
function TextInputBox(props) {

    return (
        <input type={props.type} placeholder={props.placeholder} name={props.name} className="text-input" />
    );
}

export default TextInputBox;