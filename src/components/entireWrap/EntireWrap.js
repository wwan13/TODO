import React from 'react';
import './EntireWrap.css';

/**
 * 제일 겉에 있는 박스
 */
function EntireWrap({ children }) {

    return (
        <div className='entire-wrap'>
            {children}
        </div>
    );
}

export default EntireWrap;    