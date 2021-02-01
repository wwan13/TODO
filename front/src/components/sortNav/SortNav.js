import React from 'react'

function SortNav() {

    const wrapper = {
        width: '100%',
        display: 'flex',
        flexDirection: 'right',
        flexFlow: 'row-reverse',
    }

    const navBar = {
        display: 'inline-block',
        margin: '24px 30px 0px 0px',
    }

    const text = {
        fontSize: '20px',
        fontWeight: '600',
        margin: '0px 5px',
        color: '#414141',
    }

    return (
        <nav style={wrapper}>
            <ul style={navBar}>
                <a href="#" style={text}>ALL</a>
                <a href="#" style={text}>COMPLETE</a>
                <a href="#" style={text}>ON GOING</a>
            </ul>
        </nav>
    )
}

export default SortNav;