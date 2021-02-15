import React from 'react'
import './Header.css'
import { Route, Link, useHistory } from 'react-router-dom'

import {MAIN_URL, TODO_CREATE_URL, LOGIN_URL, SIGNIN_URL, TODO_UPDATE_URL} from '../../urls/urls'
import {POST_LOGOUT} from '../../apis/authApi'
import {removeTokenInSessionStorage, removeUsernameInSessionStorage, getUsernameInSessionStorage} from '../../auth/auth'

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
    
    let username = getUsernameInSessionStorage();
    const history = useHistory();

    const handleLogoutButton = () => {

        POST_LOGOUT().then(response => {
            removeTokenInSessionStorage()
            removeUsernameInSessionStorage()
            history.push("/login")
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <div className='main-title-wrapper'>
            <div className="info-wrapper">
                <Link to={MAIN_URL} className='title'>Todo List</Link>
                <span className='user-info'>{username} 님</span>
            </div>
            <button onClick={handleLogoutButton} className='logout-button'>로그아웃</button>
        </div >
    )
}


export default Header