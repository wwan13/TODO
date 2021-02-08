import React from 'react'

function getTodoData() {
    console.log("aaa")

    fetch('http://127.0.0.1:8000/todo/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(response => { 
        console.log("complete")
    })
}

export default getTodoData;

