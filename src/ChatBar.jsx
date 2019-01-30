import React, {Component} from 'react';
import Message from './Message.jsx';

class ChatBar extends Component {

  handleMessageKeyPress = (event) => {
    if(event.key == 'Enter'){
      this.handleMessage(event)
    }
  }
  handleMessage = (event) => {
    let newMessage = event.target.value
    this.props.handleMessageFunc(newMessage)
  }


  handleUserKeyPress = (event) => {
    if(event.key == 'Enter'){
      this.handleUserName(event)
    }
  }
  handleUserName = (event) => {
    let newUserName = event.target.value
    this.props.handleUserFunc(newUserName)
  }


  render(){
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          placeholder="Enter Name"
          onKeyPress={this.handleUserKeyPress}

       />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyPress={this.handleMessageKeyPress}
        />
      </footer>
    );
  }
}

export default ChatBar;