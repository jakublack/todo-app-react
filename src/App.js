import React, { Component } from 'react';
import ListToDo from './ToDoItem';
import AddTask from './AddTask';

import './App.css';

class App extends Component {

  state = {
    items: [],
    maxTask: 10,
    counter: 0,
    addTask: false
  };

  doneTask = (id) => {
    const itemsTodo = this.state.items.map(item => {

      if (id === item.id) item.completed = true;
      return item

    })

    this.setState({
      items: itemsTodo
    })
  }

  deleteTask = (id) => {

    const itemsTodo = this.state.items.filter(item => {

      return item.id !== id;

    })

    this.setState({
      items: itemsTodo,
    })

    setTimeout(() => {
      this.checkMaxTask();

    },10)
  }

  addTask = (todo) => {

    todo.id = this.state.counter;
    todo.completed = false;

    let items = [...this.state.items, todo];

    this.setState({
      counter: this.state.counter + 1,
      items,
    })

    setTimeout(() => {
      this.checkMaxTask();

    },10)

  }

  checkMaxTask = () => {

    if (this.state.items.length >= this.state.maxTask) {

      this.setState({
        addTask: true
      })

      return false;

    } else {
      this.setState({
        addTask: false
      })
    }

  }
  componentDidMount() {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText))

        this.state.items = JSON.parse(xhr.responseText);
        this.state.counter = this.state.items.length + 1;

        this.setState(this.state)
      }
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos?_limit=5', false)

    xhr.send();
  }


  render() {
    return (
      <div className="container wrapper-app ">
        <h1 className="text-center py-4">This is you list TODO</h1>
        <p className={"text-center error " + (this.state.addTask ? 'd-block' : 'd-none')}>Limit of task is 10, please do some task :)</p>
        <ListToDo
          listItems={this.state.items}
          doneTask={this.doneTask}
          deleteTask={this.deleteTask}
        />
        <p>{this.state.addTask}</p>
        <AddTask
          addTask={this.addTask}
          disabled={this.state.addTask}
        />
      </div>
    );
  }
}

export default App;
