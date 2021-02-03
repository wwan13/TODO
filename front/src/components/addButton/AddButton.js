import React from 'react'
import { Link } from 'react-router-dom'
import './AddButton.css'

function AddButton() {
    return (
        <Link to="/create" className='add-button'>+</Link>
    );
}

export default AddButton;