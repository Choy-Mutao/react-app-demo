import React from "react";
import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";

import "./styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.appRef = React.createRef();
    this.getDom = this.getDom.bind(this)
  }

  getDom() {
    console.log(this.appRef.current)
  }

  render() {
    return (
      <div ref={this.appRef} className="app">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <button onClick={this.getDom}></button>
      </div>
    );
  }
}


export default App;
