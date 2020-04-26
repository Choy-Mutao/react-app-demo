import React from "react";
import PropTypes from "prop-types";
import "../styles/Todo.css";

class Todo extends React.Component {

  constructor(props) {
    super(props)
    this.editable = false
  }

  handleEdit() {
    this.props.onEdit();
    this.setState({editText: this.props.todo.title})
  }

  render() {
    return (
      <div>
        <li
          key={this.props.id}
          className="item"
          onClick={this.props.onClick}
          draggable='true'
          onDragEnd={this.props.onDragEnd}
          onDragStart={this.props.onDragStart}
          style={{
            textDecoration: this.props.completed ? "line-through" : "none",
          }}
          data-item={JSON.stringify(this.props)}
        >
          <label onDoubleClick={this}>{this.props.text}</label>
        </li>
        <button className="del-btn" onClick={this.props.onDel}>
          del
        </button>
        <p></p>
        <button className='edit_btn'>
          edit
        </button>
      </div>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
