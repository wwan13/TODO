import React from 'react'

function Header({ children }) {
    const wrapper = {
        width: '600px',
        height: '45px',
        marginBottom: '20px',
        fontWeight: 'Bold',
        color: '#b2b2b2',
    }

    const title = {
        fontSize: '40px',
        fontWeight: 'Bold',
        cursor: 'pointer',
    }

    const userInfo = {
        fontSize: '25px',
        marginLeft: '20px',
        color: '#b2b2b2',
        cursor: 'pointer',
    }

    const logoutBtn = {
        fontSize: '25px',
        color: '#b2b2b2',
        marginLeft: '220px',
    }

    return (
        <div style={wrapper}>
            <span style={title}>Todo List</span>
            <span style={userInfo}>김태완 님</span>
            <a href="#" style={logoutBtn}>로그아웃</a>
        </div >
    )
}

export default Header