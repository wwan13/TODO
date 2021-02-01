import React from 'react'
import './Header.css'

function Header({ children }) {

    return (
        <div className='title-wrapper'>
            <span className='title'>Todo List</span>
            <span className='user-info'>김태완 님</span>
            <a href="#" className='logout-button'>로그아웃</a>
        </div >
    )
}

export default Header