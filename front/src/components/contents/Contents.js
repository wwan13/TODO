import React from 'react'
import './Contents.css'
import SortNav from '../sortNav/SortNav'
import TodoObject from '../todoObject/TodoObject'
import AddButton from '../addButton/AddButton'


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

function Contents() {

    return (
        <Todo />
    );
}

export default Contents;