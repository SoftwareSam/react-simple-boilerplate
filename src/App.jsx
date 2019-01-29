import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import SysMsg from './SysMsg.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
    {
      username: "Bob",
      content: "Has anyone seen my marbles?",
      id: 123
    },
    {
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
      id: 456
    }
      ]
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages}/>
        <SysMsg />
        <ChatBar currentUser={this.state.currentUser}/>
      </div>
    );
  }
}

export default App;

