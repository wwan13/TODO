import React from 'react'

function Main({ children }) {

    const mainContents = {
        width: '600px',
        height: '670px',
        backgroundColor: '#b2b2b2',
        borderRadius: '10px',
    }


    return (
        <div style={mainContents}>
            {children}
        </div>
    );
}

export default Main;
