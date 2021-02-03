import React from 'react'
import './TodoObject.css'
import { ReactComponent as CheckIcon } from '../../icons/check.svg'
import { ReactComponent as EditIcon } from '../../icons/edit.svg'
import { ReactComponent as TrashIcon } from '../../icons/trash.svg'

function TodoObject({ data }) {
    var complete = (
        <div className='object-box'>
            <CompleteContents data={data} />
            <CompleteButtonSet />
        </div>
    )

    var ongoing = (
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

function CompleteContents({ data }) {

    var contents = makeShortString(data.contents)

    return (
        <div className='object-contents'>
            <p className='contents-date complete'>{data.date}</p>
            <p className='contents-detail complete'>{contents}</p>
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

    var contents = makeShortString(data.contents)

    return (
        <div className='object-contents'>
            <p className='contents-date ongoing'>{data.date}</p>
            <p className='contents-detail ongoing'>{contents}</p>
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

function makeShortString(content) {

    if (content.length >= 18) {
        var tmp = content.substr(0, 18);
        var displayString = tmp + "..."
        return displayString;
    }

    return content
}

export default TodoObject;