import React from 'react'
import './Header.css'
import { Route, Link } from 'react-router-dom'

import {MAIN_URL, TODO_CREATE_URL, LOGIN_URL, SIGNIN_URL, TODO_UPDATE_URL} from '../../urls/urls'

/**
 * url에 따라 헤더를 바꿔줌
 */
function Header() {

    return (
        <>
            <Route path={MAIN_URL} exact={true} component={MainHeader} />
            <Route path={TODO_CREATE_URL} component={MainHeader} />
            <Route path={TODO_UPDATE_URL} component={MainHeader} />
            <Route path={LOGIN_URL} component={LogInHeader} />
            <Route path={SIGNIN_URL} component={SignInHeader} />
        </>
    )
}

/**
 * 록그인 화면의 헤더
 */
function LogInHeader() {

    return (
        <div className='title-wrapper'>
            <Link to={LOGIN_URL} className='title'>Todo List</Link>
            <span className='user-info'> 로그인</span>
        </div >
    )

}

/**
 * 회원가입 화면의 헤더
 */
function SignInHeader() {
    return (
        <div className='title-wrapper'>
            <Link to={LOGIN_URL} className='title'>Todo List</Link>
            <span className='user-info'>회원가입</span>
        </div >
    )
}

/**
 * 메인 화면의 헤더
 */
function MainHeader() {
    return (
        <div className='title-wrapper'>
            <Link to={MAIN_URL} className='title'>Todo List</Link>
            <span className='user-info'>김태완 님</span>
            <a href="#" className='logout-button'>로그아웃</a>
        </div >
    )
}


export default Header