import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'

import './Contents.css'

import SortNav from '../sortNav/SortNav'
import TodoObject from '../todoObject/TodoObject'
import AddButton from '../addButton/AddButton'
import InputBox from '../inputBox/InputBox'
import SubmitButton from '../inputBox/SubmitButton'
import CSRFToken from '../../middleware/CSRFToken'

import {GETTodoList} from '../../apis/todoApi'
import {MAIN_URL, TODO_CREATE_URL, LOGIN_URL, SIGNIN_URL} from '../../urls/urls'

const dummydatas = [
    {
        id : 1,
        date : '2020-02-22',
        contents : '생일 ㅋ',
        state : 'onging'
    },
    {
        id : 2,
        date : '2020-02-22',
        contents : '생일 ㅋ',
        state : 'onging'
    },
    {
        id : 3,
        date : '2020-02-22',
        contents : '생일 ㅋ',
        state : 'onging'
    },    
]

/**
 * url에 따라 메인 컨텐츠를 바꿔줌
 */
function Contents() {

    return (
        <>
            <Route path={MAIN_URL} exact={true} component={Todo} />
            <Route path={LOGIN_URL} component={Login} />
            <Route path={SIGNIN_URL} component={Signin} />
            <Route path={TODO_CREATE_URL} component={CreateContents} />
        </>
    );
}

/**
 * todo list 가 나오는 컨텐츠
 */
function Todo() {


    var [datas, setDatas] = useState([]);

    useEffect(() => {
        GETTodoList().then(response => {
            console.log(response.data);
            setDatas(response.data)
        })
    }, [])

    return (
        <div className='contents-wrapper'>
            <SortNav />
            <div className='todo-box'>
                {datas.map(data => (
                    <TodoObject setDatas={setDatas} data={data} key={data.id} />
                ))}
            </div>
            <AddButton />
        </div>
    );
}

/**
 * 로그인 화면
 */
function Login() {
    return (
        <form action="#" method="post" className="form">
            <InputBox type="text" placeholder="아이디" name="id" />
            <InputBox type="password" placeholder="비밀번호" name="password" />
            <SubmitButton type="submit" value="로그인" />
            <Link className="signin-link" to="/signin">회원가입</Link>
        </form>
    );
}

/**
 * 회원가입 화면
 */
function Signin() {
    return (
        <form action="#" method="post" className="form">
            <InputBox type="text" placeholder="이름" name="username" />
            <InputBox type="text" placeholder="아이디" name="id" />
            <InputBox type="password" placeholder="비밀번호" name="password" />
            <InputBox type="password" placeholder="비밀번호 확인" name="passwordConfirm" />
            <SubmitButton type="submit" value="회원가입" />
        </form>
    );
}

/**
 * todo 생성 화면
 */
function CreateContents() {

    const [inputs , setInputs] = useState({
        date: "",
        contents: "",
    });

    const onChange = (e) => {
        const { value, name } = e.target; 
        setInputs({
            ...inputs, 
            [name]: value 
        });
        console.log(inputs)
    };

    return (
        <form action='#' method="POST" className="form">
            <CSRFToken />
            <InputBox type="date" name="date" onChange={onChange} required={true}/>
            <InputBox type="text" placeholder="내용" name="contents" required={true} />
            <SubmitButton type="submit" value="만들기" />
        </form >
    );
}


export default Contents;                    