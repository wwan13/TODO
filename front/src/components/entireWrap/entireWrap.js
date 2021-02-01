import React from 'react';
import './entireWrap.css';

function entireWrap({ children }) {
    return (
        <div className='entire-wrap'>
            {children}
        </div>
    );
}

export default entireWrap;