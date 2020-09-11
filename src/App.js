import React, { Component } from 'react';
import Header from './components/layout/header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import './App.css';

class App extends Component {
  state = { //to access state log below this.state
    todos: [
    {  
      id: 1,
      title: 'Take out the trash',
      completed: false
    },
    {  
      id: 2,
      title: 'Dinner with family',
      completed: false
    },
    {  
      id: 3,
      title: 'Meeting with boss',
      completed: true
    },
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })})
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title: title,
      complelted: false
    }
    this.setState({ todos: [...this.state.todos,newTodo] })
  }
  
  render() {
    console.log(this.state.todos)

return (
  <div className="App">
    <div className="container">
    <Header />
    <AddTodo addTodo={this.addTodo}/>
    <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
  </div>
  </div>
  );
}
}

export default App;
