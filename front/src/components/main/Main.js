import React from 'react'
import './Main.css'

/**
 * 메인 화면
 */
function Main({ children }) {

    return (
        <div className='main-contents'>
            {children}
        </div>
    );
}

export default Main;
