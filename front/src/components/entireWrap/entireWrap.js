import React from 'react';
// import './EntireWrap.css';

function EntireWrap({ children }) {

    const style = {
        width: '100%',
        height: '100%',
        backgroundColor: '#414141',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    };

    return (
        <div style={style}>
            {children}
        </div>
    );
}

export default EntireWrap;    