import React from 'react'
import './Contents.css'
import SortNav from '../sortNav/SortNav'
import TodoObject from '../todoObject/TodoObject'


function Todo() {

    return (
        <div className='contents-wrapper'>
            <SortNav />
            <div className='todo-box'>
                <TodoObject />
                <TodoObject />
                <TodoObject />
                <TodoObject />
                <TodoObject />
                <TodoObject />
            </div>
        </div>
    );
}


function Contents() {

    return (
        <Todo />
    );
}

export default Contents;