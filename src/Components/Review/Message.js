import React, {Component} from 'react';

class Message extends Component {
    constructor(){
        super();
        this.state = {
            edit: false,
            editInput: ''
        }
    }


  handleEdit = val => {
    this.setState({ editInput: val });
  };


    render(){
    console.log(this.props)
    const {id, title} = this.props.message
    const {edit, editInput} = this.state
        
        return (
            <div >
              <h1 onClick={() => this.setState({ edit: !edit })}>{title}</h1>
              {edit && (
                <div>
                  <input
                    type="text"
                    onChange={e => this.handleEdit(e.target.value)}
                  />
                  <button onClick={() => this.props.editBtn(id, editInput)}>Edit</button>
                </div>
              )}
            </div>
        );
    }
}


export default Message;