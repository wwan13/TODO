import React, { useState } from 'react'
import './TodoObject.css'
import { ReactComponent as CheckIcon } from '../../icons/check.svg'
import { ReactComponent as EditIcon } from '../../icons/edit.svg'
import { ReactComponent as TrashIcon } from '../../icons/trash.svg'

import {Link} from 'react-router-dom'
import {DELETE_TodoObject, GET_TodoList, GET_SetComplete, GET_SetOngoing} from '../../apis/todoApi'
import {GET_TODO_UPDATE_URL} from '../../urls/urls'

const oneLineSize = 14

/**
 * todo 데이터 하나하나를 출력 해 주는 컴포넌트
 */
function TodoObject({ data, setDatas }) {

    var date = data.date;
    var contents = data.contents;

    // 완료시의 컴포넌트
    var complete = (
        <div className='object-box'>
            <CompleteContents date={data.date} contents={data.contents} />
            <CompleteButtonSet setDatas={setDatas} dataId={data.id} />
        </div>
    )

    // 진행중인 컴포넌트
    var ongoing = (
        <div className='object-box'>
            <OngoingContents date={data.date} contents={data.contents} />
            <OngoingButtonSet setDatas={setDatas} dataId={data.id} />
        </div>
    )

    // 진행 상태에 따라 반환
    if (data.state === "complete") {
        return complete;
    } else {
        return ongoing;
    }

}


/**
 * 진행중인 객체
 */
function CompleteContents({ date, contents, onClick }) {

    return (
        <div onClick={onClick} className='object-contents'>
            <p className='contents-date complete'>{date}</p>
            <p className='contents-detail complete'>{contents}</p>
        </div>
    );

}

/**
 * 완료된 객체 에 대한 버튼
 */
function CompleteButtonSet({dataId, setDatas}) {

    // DELETE 호출 후에 데이터 셋을 새로 바꿔주는 함수
    const setNewDatasets = () => {
        GET_TodoList().then(response => {
            console.log('set new data sets')
            setDatas(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    // DLETE 메소드 호출
    const handleDeleteButton = () => {
        DELETE_TodoObject(dataId).then(response => {
            setNewDatasets()
        }).catch(error => {
            console.log(error)
        })
    }

    // 상태를 완료로 바꿔줌
    const handleOngoingButton = () => {
        GET_SetOngoing(dataId).then(response => {
            setNewDatasets()
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='object-buttons'>
            <button onClick={() => handleOngoingButton()}><CheckIcon fill='#b2b2b2' width='23px' height='23px' /></button>
            <button onClick={() => handleDeleteButton()}><TrashIcon fill='#b2b2b2' width='17px' height='17px' /></button>
        </div>
    );

}

/**
 * 완료된 객체
 */
function OngoingContents({ date, contents }) {

    return (
        <div className='object-contents'>
            <p className='contents-date ongoing'>{date}</p>
            <p className='contents-detail ongoing'>{contents}</p>
        </div>
    );

}

/**
 * 진행중인 객채에 대한 버튼들
 */
function OngoingButtonSet({dataId, setDatas}) {

    // DELETE 호출 후에 데이터 셋을 새로 바꿔주는 함수
    const setNewDatasets = () => {
        GET_TodoList().then(response => {
            setDatas(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    // DLETE 메소드 호출
    const handleDeleteButton = () => {
        DELETE_TodoObject(dataId).then(response => {
            setNewDatasets()
        }).catch(error => {
            console.log(error)
        })
    }

    // 상태를 완료로 바꿔줌
    const handleCompleteButton = () => {
        GET_SetComplete(dataId).then(response => {
            setNewDatasets()
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='object-buttons'>
            <button onClick={() => handleCompleteButton()}><CheckIcon fill='#414141' width='23px' height='23px' /></button>
            <Link className="update-button" to={() => GET_TODO_UPDATE_URL(dataId)}><EditIcon fill='#414141' width='23px' height='23px' /></Link>
            <button onClick={() => handleDeleteButton()}><TrashIcon fill='#414141' width='17px' height='17px' /></button>
        </div>
    );

}

/**
 * 받아온 문자열을 짧게 만들어주는 함수
 */
function getSlicedContents(contents) {
    var _contents = contents.substr(0, oneLineSize) + "...";
    return _contents;
}

export default TodoObject;