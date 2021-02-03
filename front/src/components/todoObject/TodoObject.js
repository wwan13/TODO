import React, { useState } from 'react'
import './TodoObject.css'
import { ReactComponent as CheckIcon } from '../../icons/check.svg'
import { ReactComponent as EditIcon } from '../../icons/edit.svg'
import { ReactComponent as TrashIcon } from '../../icons/trash.svg'

function TodoObject({ data }) {

    var [isOnToggle, setToggleState] = useState(false);

    var date = data.date;
    var [heightSize, setHeightSize] = useState("80px")
    var contents

    if (data.contents.length > 17) {
        contents = getSlicedContents(data.contents);
    } else {
        contents = data.contents;
    }

    var [contents, setContents] = useState(contents);

    const changeHeight = () => {
        if (data.contents.length > 16) {
            if (!isOnToggle) {
                setHeightSize("auto");
                setContents(data.contents);
                setToggleState(true);
            } else {
                setHeightSize("80px");
                var tmp = getSlicedContents(data.contents);
                setContents(tmp);
                setToggleState(false);
            }
        }
    }

    var complete = (
        <div onClick={() => changeHeight()} className='object-box' style={{ height: heightSize }}>
            <CompleteContents date={date} contents={contents} />
            <CompleteButtonSet />
        </div>
    )

    var ongoing = (
        <div onClick={() => changeHeight()} className='object-box' style={{ height: heightSize }}>
            <OngoingContents date={date} contents={contents} />
            <OngoingButtonSet />
        </div>
    )

    if (data.state === "complete") {
        return complete;
    } else {
        return ongoing;
    }

}

function CompleteContents({ date, contents }) {

    return (
        <div className='object-contents'>
            <p className='contents-date complete'>{date}</p>
            <p className='contents-detail complete'>{contents}</p>
        </div>
    );

}

function CompleteButtonSet() {

    return (
        <div className='object-buttons'>
            <a href='#'><TrashIcon fill='#b2b2b2' width='17px' height='17px' /></a>
        </div>
    );

}

function OngoingContents({ date, contents }) {

    // var contents = makeShortString(data.contents)
    // var contents = data.contents;

    return (
        <div className='object-contents'>
            <p className='contents-date ongoing'>{date}</p>
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

function getSlicedContents(contents) {
    var _contents = contents.substr(0, 16) + "...";
    return _contents;
}

export default TodoObject;