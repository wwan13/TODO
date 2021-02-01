import React from 'react'
import './Main.css'

function Main({ children }) {

    return (
        <div className='main-contents'>
            {children}
        </div>
    );
}

export default Main;
