import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const welcome = "";

// const name = "Learn React";
class App extends Component {
  state = {
    toggle: true
  };
  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{welcome}</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Welcome text="Welcome to using props" toggle={this.state.toggle} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* {name} */}
          </a>
        </header>
        {this.state.toggle && <p>This should show and hind</p>}
        <button onClick={this.toggle}>Show / Hide</button>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text } = this.props;

    return <h1 className="App-title">{text}</h1>;
  }
}

export default App;
