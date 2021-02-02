import React from 'react'
import './TodoObject.css'
import { ReactComponent as CheckIcon } from '../../icons/check.svg'
import { ReactComponent as EditIcon } from '../../icons/edit.svg'
import { ReactComponent as TrashIcon } from '../../icons/trash.svg'

function CompleteContents({ data }) {

    return (
        <div className='object-contents'>
            <p className='contents-date complete'>{data.date}</p>
            <p className='contents-detail complete'>{data.contents}</p>
        </div>
    );

}

function CompleteButtonSet() {

    return (
        <div className='object-buttons'>
            <a href='#'><EditIcon fill='#b2b2b2' width='23px' height='23px' /></a>
            <a href='#'><TrashIcon fill='#b2b2b2' width='17px' height='17px' /></a>
        </div>
    );

}

function OngoingContents({ data }) {

    return (
        <div className='object-contents'>
            <p className='contents-date ongoing'>{data.date}</p>
            <p className='contents-detail ongoing'>{data.contents}</p>
        </div>
    );

}

function OngoingButtonSet() {

    return (
        <div className='object-buttons'>
            <a href='#'><CheckIcon fill='#414141' width='23px' height='23px' /></a>
            <a href='#'><EditIcon fill='#414141' width='23px' height='23px' /></a>
            <a href='#'><TrashIcon fill='#414141' width='17px' height='17px' /></a>
        </div>
    );

}

function TodoObject({ data }) {
    const complete = (
        <div className='object-box'>
            <CompleteContents data={data} />
            <CompleteButtonSet />
        </div>
    )

    const ongoing = (
        <div className='object-box'>
            <OngoingContents data={data} />
            <OngoingButtonSet />
        </div>
    )

    if (data.state === "complete") {
        return complete;
    } else {
        return ongoing;
    }

}

export default TodoObject;