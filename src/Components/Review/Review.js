import React, { Component } from 'react';
import axios from 'axios';

import Message from './Message';

class Review extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      message: '',
      edit: false,
      editInput: '',

    };
  }
  componentDidMount() {
    this.getMessages();
  }

  getMessages() {
    axios.get('/api/messages').then(res => {
      console.log(res.data);
      this.setState({ messages: res.data });
    });
  }

  addMessages() {
    axios.post('/api/add', { title: this.state.message }).then(res => {
        console.log(res.data)
        this.setState({messages: res.data})
    });
  }

  handleInput = val => {
    this.setState({ message: val });
  };

  editBtn = (id, input) => {
    axios.put(`/api/editmessage/${id}`, {title: input}).then(res=> {
        console.log(res)
        this.setState({messages: res.data})
    })
      
  }

  render() {
    const { messages, edit } = this.state;
    const map = messages.map(e => {
      return (
        <Message key={e.id} message={e} editBtn={this.editBtn}/>
      );
    });
    return (
      <div>
        <h1>Wednesday Evening Review</h1>
        <h4>Tell us your favorite Movie</h4>
        <input type="text" onChange={e => this.handleInput(e.target.value)} />
        <button onClick={() => this.addMessages()}>Add</button>

        {map}
      </div>
    );
  }
}

export default Review;
