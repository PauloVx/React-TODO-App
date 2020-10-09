import React from 'react';

export class Todos extends React.Component {
  render() {
    const { todos, deleteTodo } = this.props;

    if(!todos.length) return (
      <div className="collection">
        <p className="center collection-item"> You have no Todos left, yay!</p>
      </div>
    )

    const todoList = todos.map(todo => {
      return (
        <div class="row" key={todo.id}>
          <div class="col s12 m6">
            <div class="card teal">
              <div class="card-content white-text">
                <span class="card-title">{todo.title}</span>
                <p>{todo.content}</p>
              </div>
              <div class="card-action">
                <button onClick={() => deleteTodo(todo.id)} className="btn-small red">Delete</button>
              </div>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="todos collection">
        {todoList}
      </div>
    )
  }
}