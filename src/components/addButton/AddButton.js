import React from 'react'
import { Link } from 'react-router-dom'
import './AddButton.css'

/**
 * todo 추가 버튼
 */
function AddButton() {
    return (
        <Link to="/todo/create/" className='add-button'>+</Link>
    );
}

export default AddButton;