import React from 'react'
import './Contents.css'
import SortNav from '../sortNav/SortNav'
import TodoObject from '../todoObject/TodoObject'
import AddButton from '../addButton/AddButton'
import InputBox from '../inputBox/InputBox'
import SubmitButton from '../inputBox/SubmitButton'


function Todo() {

    const datas = [
        {
            date: "2020.12.21",
            contents: "파이썬 공부 하기",
            state: "ongoing"
        },
        {
            date: "2020.12.21",
            contents: "리엑트는 진짜 죄악 이다",
            state: "ongoing"
        },
        {
            date: "2020.12.21",
            contents: "이거 프로젝트는 언제 다 끝내지",
            state: "complete"
        },
        {
            date: "2020.12.21",
            contents: "진짜 하기 싫다",
            state: "complete"
        },
        {
            date: "2020.12.21",
            contents: "나 오늘 면허 받았어 ~",
            state: "ongoing"
        },
    ]

    return (
        <div className='contents-wrapper'>
            <SortNav />
            <div className='todo-box'>
                {datas.map(data => (
                    <TodoObject data={data} />
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

    var today = new Date();


    return (
        <form action="#" method="post" className="form">
            <InputBox type="date" name="date" />
            <InputBox type="text" placeholder="내용" name="contents" />
            <SubmitButton type="submit" value="만들기" />
        </form >
    );
}

function Contents() {

    return (
        <CreateContents />
    );
}

export default Contents;                    