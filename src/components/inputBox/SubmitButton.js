import React from 'react'
import './InputBox.css'

/**
 * submitbutton
 */
function SubmitButton(props) {

    return (
        <button className="submit-button" type={props.type}>{props.value}</button>
    );
}

export default SubmitButton;