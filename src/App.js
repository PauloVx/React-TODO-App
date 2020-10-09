import React from 'react';

import { Todos } from './Todos';
import { AddForm } from './AddForm';

export class App extends React.Component {
  constructor() {
    super();

    this.deleteTodo = this.deleteTodo.bind(this);
    this.createTodo = this.createTodo.bind(this);
  }

  state = {
    todos: []
  }

  deleteTodo(id) {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos
    });
  }

  createTodo(todo) {
    const newTodoList = [...this.state.todos, todo]

    this.setState({
      todos: newTodoList
    })
  }
  
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center teal-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddForm createTodo={this.createTodo} />
      </div>
    )
  }
}