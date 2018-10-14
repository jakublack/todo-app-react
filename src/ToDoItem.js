import React, { Component } from 'react';


const ListToDo = ({ listItems , doneTask }) => {

    const todoList = listItems.map(item => {
        return (
            <div className="list-group-item d-flex justify-content-between" key={item.id}>
                <span>{item.title}</span>
            </div>
        )
    })
    return (
        <div className="list-group">
            {todoList}
        </div>
    )
}

export default ListToDo;