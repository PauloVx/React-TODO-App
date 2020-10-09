import React from 'react';

export class AddForm extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleContentInput = this.handleContentInput.bind(this);
  }

  state = {
    titleText: '',
    contentText: ''
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createTodo({
      id: Math.random(),
      title: this.state.titleText,
      content: this.state.contentText
    });

    this.setState({
      titleText: '',
      contentText: ''
    });
  }

  handleTitleInput(e) {
    this.setState({
      titleText: e.target.value
    });
  }

  handleContentInput(e) {
    this.setState({
      contentText: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="center">
        <input type="text" id="titleInput" placeholder="Title" onChange={this.handleTitleInput} value={this.state.titleText}/>
        <input type="text" id="contentInput" placeholder="Content" onChange={this.handleContentInput} value={this.state.contentText}/>
        <button className="btn-large pulse">Create</button>
      </form>
    )
  }
}