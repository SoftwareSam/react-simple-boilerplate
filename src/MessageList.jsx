import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {

  render(){

    let msgComps = this.props.messages.map((message) => {
      return <Message key={message.id} message={message}/>
    });

    return (
      <main className="messages">
        {[msgComps]}
      </main>
    );
  }
}

export default MessageList;

