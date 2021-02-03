import React from 'react'
import './Header.css'
import { Route, Link } from 'react-router-dom'

function LogInHeader() {

    return (
        <div className='title-wrapper'>
            <Link className='title'>Todo List</Link>
            <span className='user-info'> 로그인</span>
        </div >
    )

}

function SignInHeader() {
    return (
        <div className='title-wrapper'>
            <Link className='title'>Todo List</Link>
            <span className='user-info'>회원가입</span>
        </div >
    )
}

function MainHeader() {
    return (
        <div className='title-wrapper'>
            <Link className='title'>Todo List</Link>
            <span className='user-info'>김태완 님</span>
            <a href="#" className='logout-button'>로그아웃</a>
        </div >
    )
}

function Header() {

    return (
        <>
            <Route path="/" exact={true} component={MainHeader} />
            <Route path="/create" component={MainHeader} />
            <Route path="/login" component={LogInHeader} />
            <Route path="/signin" component={SignInHeader} />
        </>
    )
}

export default Header