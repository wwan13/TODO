import React from 'react'
import './SortNav.css'

function SortNav() {

    return (
        <nav className='nav-wrapper'>
            <ul className='nav-bar'>
                <a href="#" className='nav-bar-text'>ALL</a>
                <a href="#" className='nav-bar-text'>COMPLETE</a>
                <a href="#" className='nav-bar-text'>ON GOING</a>
            </ul>
        </nav>
    )
}

export default SortNav;