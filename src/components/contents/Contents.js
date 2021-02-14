import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'

import './Contents.css'

import SortNav from '../sortNav/SortNav'
import TodoObject from '../todoObject/TodoObject'
import AddButton from '../addButton/AddButton'
import InputBox from '../inputBox/InputBox'
import UpdateInputBox from '../inputBox/UpdateInputBox'
import SubmitButton from '../inputBox/SubmitButton'
import CSRFToken from '../../middleware/CSRFToken'

import {useHistory} from 'react-router-dom'

import {GET_TodoList, POST_TodoObject, GET_TodoObject, PATCH_TodoObject, GET_FilteredTodoList} from '../../apis/todoApi'
import {MAIN_URL, TODO_CREATE_URL, LOGIN_URL, SIGNIN_URL, TODO_UPDATE_URL} from '../../urls/urls'

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
            <Route path={TODO_UPDATE_URL} component={UpdateContents} />
        </>
    );
}

/**
 * todo list 가 나오는 컨텐츠
 */
function Todo() {

    var [datas, setDatas] = useState([]);

    // 새로 렌더링 될 떄 마다 GET 메소드 호출
    useEffect(() => {
        GET_TodoList().then(response => {
            setDatas(response.data)
        })
    }, [])

    // filter 버튼 눌렀을 경우 동작
    const handleFilterButton = (e) => {
        GET_FilteredTodoList(e.target.id).then(response => {
            setDatas(response.data)
        })
    }

    return (
        <div className='contents-wrapper'>
            <SortNav onClick={handleFilterButton}/>
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

    const history = useHistory();

    // submit 이벤트
    const handleSubmitButton = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);

        // POST 메소드 호풀
        POST_TodoObject(data).then(response => {
            // 메인 화면으로 화면 이동
            history.push("/")
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <form onSubmit={handleSubmitButton} className="form">
            <CSRFToken />
            <InputBox type="date" name="date" required={true}/>
            <InputBox type="text" placeholder="내용" name="contents" required={true} />
            <SubmitButton type="submit" value="만들기" />
        </form >
    );
}

/**
 * todo 업데이트
 */
function UpdateContents({match}) {

    const history = useHistory();
    const [todoData, setTodoData] = useState({
        date : "",
        contents : "",
    });
    const dataId = match.params.id;

    useEffect(() => {
        GET_TodoObject(dataId).then(response => {
            setTodoData(response.data)
        })
    },[])

    // submit 이벤트
    const handleSubmitButton = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);

        // POST 메소드 호풀
        PATCH_TodoObject(dataId,data).then(response => {
            // 메인 화면으로 화면 이동
            history.push("/")
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <form onSubmit={handleSubmitButton} className="form">
            <CSRFToken />
            <UpdateInputBox type="date" name="date" value={todoData.date} required={true}/>
            <UpdateInputBox type="text" value={todoData.contents} name="contents" required={true} />
            <SubmitButton type="submit" value="수정하기" />
        </form >
    );
}


export default Contents;                    