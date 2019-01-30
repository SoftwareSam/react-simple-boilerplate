import React, {Component} from 'react';
import Message from './Message.jsx';

class ChatBar extends Component {
  handleKeyPress = (event) => {
    if(event.key == 'Enter'){
      this.handleMessage(event)
    }
  }

  handleMessage = (event) => {
    console.log(event.target.value)
    let newMessage = event.target.value
    this.props.handleChangeFunc(newMessage)
  }

  render(){
    return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={this.props.currentUser.name} />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyPress={this.handleKeyPress}
        />
      </footer>
    );
  }
}

export default ChatBar;