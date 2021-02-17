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
import {POST_Login, POST_SIGNIN} from '../../apis/authApi'
import {MAIN_URL, TODO_CREATE_URL, LOGIN_URL, SIGNIN_URL, TODO_UPDATE_URL} from '../../urls/urls'
import {setTokenInSessionStorage, setUsernameInSessionStorage, isLoggedIn} from '../../auth/auth'


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

    const history = useHistory();

    var [datas, setDatas] = useState([]);

    // 새로 렌더링 될 떄 마다 GET 메소드 호출
    useEffect(() => {

        if(!isLoggedIn()) {
            history.push("/login")
        } else {
            GET_TodoList().then(response => {
                setDatas(response.data)
            })
        }

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
    
    const history = useHistory();

    // login submit 이벤트
    const handleSubmitButton = (e) => {

        e.preventDefault();
        let data = new FormData(e.target);

        POST_Login(data).then(response => {
            setTokenInSessionStorage(response.data.key)
            setUsernameInSessionStorage(data.get('username'))
            history.push("/")

        }).catch(error => {
            console.log(error)
            alert("아이디 혹은 비밀번호가 일치하지 않습니다.")
        })
    }

    return (
        <form onSubmit={handleSubmitButton} className="form">
            <InputBox type="text" placeholder="아이디" name="username" />
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

    const history = useHistory();

    // signin submit 이벤트
    const handleSubmitButton = (e) => {

        e.preventDefault();
        let data = new FormData(e.target);

        if(data.get('password1') !== data.get('password2')) {
            alert("비밀번호가 서로 일치하지 않습니다.")
            return;
        }

        POST_SIGNIN(data).then(response => {
            setTokenInSessionStorage(response.data.key)
            setUsernameInSessionStorage(data.get('username'))
            history.push("/")
        }).catch(error => {
            alert(error)
        })
    }

    return (
        <form onSubmit={handleSubmitButton} className="form">
            <InputBox type="text" placeholder="아이디" name="username" />
            <InputBox type="password" placeholder="비밀번호" name="password1" />
            <InputBox type="password" placeholder="비밀번호 확인" name="password2" />
            <SubmitButton type="submit" value="회원가입" />
        </form>
    );
}

/**
 * todo 생성 화면
 */
function CreateContents() {

    const history = useHistory();

    useEffect(() => {
        if(!isLoggedIn()) {
            history.push("/login")
        }
    }, [])

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