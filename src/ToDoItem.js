import React, { Component } from 'react';


const ListToDo = ({ listItems , doneTask }) => {

    const todoList = listItems.map(item => {
        return (
            <div className="list-group-item d-flex justify-content-between" key={item.id}>
                <span className={(item.completed ? 'task-done' : '')}>{item.title}</span>
                <div>
                    <button onClick={() => { doneTask(item.id)}} type="button" className={"btn btn-success " + (item.completed ? 'd-none' : 'd-inline')}>Done</button>
                    <button type="button" className={"btn btn-danger " + (item.completed ? 'd-inline' : 'd-none')}>Delete</button>
                </div>
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

