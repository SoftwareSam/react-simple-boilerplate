import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import SysMsg from './SysMsg.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.updateMessageState = this.updateMessageState.bind(this)
    this.updateUserState = this.updateUserState.bind(this)
    this.state = {

    currentUser: {name: ""},
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

  componentDidMount() {
    // this is the socket connection object
    this.socket = new WebSocket("ws://localhost:3001/");

    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
    // Add a new message to the list of messages in the data store
    const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }

  updateMessageState(messageValue){
    this.setState({messages: [...this.state.messages, {username: this.state.currentUser.name, content: messageValue}] })
  }

  updateUserState(userValue){
    this.setState({currentUser: {name: userValue}})
    console.log(this.state)
  }



  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages}/>
        <SysMsg />
        <ChatBar handleUserFunc={this.updateUserState}
                 handleMessageFunc={this.updateMessageState}
        />
      </div>
    );
  }
}

export default App;

