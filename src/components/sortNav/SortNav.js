import React from 'react'
import './SortNav.css'

/**
 * todo 정렬 종류에 대한 헤더
 */
function SortNav({onClick}) {

    return (
        <nav className='nav-wrapper'>
            <ul className='nav-bar'>
                <button onClick={onClick} className='nav-bar-text' id='all'>ALL</button>
                <button onClick={onClick} className='nav-bar-text' id='complete'>COMPLETE</button>
                <button onClick={onClick} className='nav-bar-text' id='ongoing'>ONGOING</button>
            </ul>
        </nav>
    )
}

export default SortNav;