import React, { Component } from 'react';
import ListToDo from './ToDoItem';

import './App.css';

class App extends Component {

  state = {
    items: []
  };


  componentDidMount() {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText))

        this.state.items = JSON.parse(xhr.responseText);
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
        <ListToDo
          listItems={this.state.items}
          ></ListToDo>
      </div>
    );
  }
}

export default App;
