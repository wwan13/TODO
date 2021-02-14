import React from 'react'
import './SortNav.css'

import {GET_FilteredTodoList} from '../../apis/todoApi'

/**
 * todo 정렬 종류에 대한 헤더
 */
function SortNav({onClick}) {

    // const filterButton = (e) => {
    //     console.log(e.target.id)
    //     GET_FilteredTodoList(e.target.id).then(response => {
    //         console.log(response)
    //     })
    // }

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