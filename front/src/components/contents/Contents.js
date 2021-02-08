import React, { useState } from 'react'
import { Route, Link } from 'react-router-dom'
import './Contents.css'
import SortNav from '../sortNav/SortNav'
import TodoObject from '../todoObject/TodoObject'
import AddButton from '../addButton/AddButton'
import InputBox from '../inputBox/InputBox'
import SubmitButton from '../inputBox/SubmitButton'
import getTodoData from '../../apis/getTodoData'


function Contents() {

    return (
        <>
            <Route path="/" exact={true} component={Todo} />
            <Route path="/login" component={Login} />
            <Route path="/signin" component={Signin} />
            <Route path="/create" component={CreateContents} />
        </>
    );
}

function Todo() {

    var [datas, setDatas] = useState([])

    fetch('http://localhost:8000/todo/')
    .then(response => response.json())
    .then(response => {
        setDatas(response)
    })

    return (
        <div className='contents-wrapper'>
            <SortNav />
            <div className='todo-box'>
                {datas.map(data => (
                    <TodoObject data={data} key={data.id} />
                ))}
            </div>
            <AddButton />
        </div>
    );
}

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

function CreateContents() {
    return (
        <form action="#" method="post" className="form">
            <InputBox type="date" name="date" />
            <InputBox type="text" placeholder="내용" name="contents" />
            <SubmitButton type="submit" value="만들기" />
        </form >
    );
}


export default Contents;                    