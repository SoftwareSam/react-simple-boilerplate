import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {loading: true};
  }

  render() {
    return (
      <body>
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
        <main>
          <MessageList />
        <div>
          <Message />
        </div>
        <div className="message system">
          Anonymous1 changed their name to nomnom.
        </div>
        </main>
          <ChatBar />
      </body>
    );
  }
}

export default App;