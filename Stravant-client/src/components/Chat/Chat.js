import React, { Component } from 'react';

class Chat extends Component {
  constructor(props) {
    super(props);
  }

  handleFormSubmit = e => {
    e.preventDefault();
    let text = this.refs.messageText.nodeValue;
    this.props.actions.send(text);
  };
  render() {
    return (
      <div>
        <input type="text" />
        <button>send</button>
        Chat
      </div>
    );
  }
}

export default Chat;
