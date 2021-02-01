import React from 'react';
import './EntireWrap.css';

function EntireWrap({ children }) {

    return (
        <div className='entire-wrap'>
            {children}
        </div>
    );
}

export default EntireWrap;    