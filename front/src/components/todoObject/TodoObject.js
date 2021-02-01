import React from 'react'
import './TodoObject.css'
import { ReactComponent as CheckIcon } from '../../icons/check.svg'
import { ReactComponent as EditIcon } from '../../icons/edit.svg'
import { ReactComponent as TrashIcon } from '../../icons/trash.svg'

function TodoObject() {

    return (
        <div className='object-box'>
            <div className='object-contents'>
                <p className='contents-date'>2020.12.21</p>
                <p className='contents-detail'>오늘은 집에서 이것들을 할 것임.</p>
            </div>
            <div className='object-buttons'>
                <a href='#'><CheckIcon fill='#414141' width='23px' height='23px' /></a>
                <a href='#'><EditIcon fill='#414141' width='23px' height='23px' /></a>
                <a href='#'><TrashIcon fill='#414141' width='17px' height='17px' /></a>
            </div>
        </div>
    );
}

export default TodoObject;