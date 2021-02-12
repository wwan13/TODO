import React from 'react'
import { Link } from 'react-router-dom'
import './AddButton.css'
import {TODO_CREATE_URL} from '../../urls/urls'

/**
 * todo 추가 버튼
 */
function AddButton() {
    return (
        <Link to={TODO_CREATE_URL} className='add-button'>+</Link>
    );
}

export default AddButton;