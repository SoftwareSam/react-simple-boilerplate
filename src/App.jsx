import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import SysMsg from './SysMsg.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.updateMessageState = this.updateMessageState.bind(this)
    this.state = {

    currentUser: {name: "Bob"},
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
    this.setState({messages: [...this.state.messages, {username: "Bob", content: messageValue, id: 2424}]})
  }


  render() {
    console.log(this.state.messages);
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages}/>
        <SysMsg />
        <ChatBar currentUser={this.state.currentUser}
                 handleChangeFunc={this.updateMessageState}
        />
      </div>
    );
  }
}

export default App;

