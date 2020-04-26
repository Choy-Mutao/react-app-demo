import React from "react";
import PropTypes from "prop-types";
import Todo from './Todo'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  dragStart(e) {
    this.dragged = e.currentTarget;
    console.log(this.dragged.dataset.item)
  }
  dragEnd(e) {
    this.dragged.style.display = "block";

    e.target.classList.remove("drag-up");
    // this.over.classList.remove("drag-up");

    e.target.classList.remove("drag-down");
    // this.over.classList.remove("drag-down");

    // var data = this.state.data;
    var data = this.props.todos;
    var from = Number(this.dragged.dataset.id);
    var to = Number(this.over.dataset.id);
    data.splice(to, 0, data.splice(from, 1)[0]);

    //set newIndex to judge direction of drag and drop
    data = data.map((doc, index) => {
      doc.newIndex = index + 1;
      return doc;
    });

    this.setState({ data: data });
  }

  dragOver(e) {
    e.preventDefault();

    // this.dragged.style.display = "none";

    if (e.target.tagName !== "LI") {
      return;
    }

    //判断当前拖拽target 和 经过的target 的 newIndex

    const dgIndex = JSON.parse(this.dragged.dataset.item).newIndex;
    const taIndex = JSON.parse(e.target.dataset.item).newIndex;
    const animateName = dgIndex > taIndex ? "drag-up" : "drag-down";

    if (this.over && e.target.dataset.item !== this.over.dataset.item) {
      this.over.classList.remove("drag-up", "drag-down");
    }

    if (!e.target.classList.contains(animateName)) {
      e.target.classList.add(animateName);
      this.over = e.target;
    }
    
    // this.over = e.target;
  }

  render() {

    return (
      <ul onDragOver={this.dragOver.bind(this)}>
        {this.props.todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => this.props.toggleTodo(todo.id)}
            onDel={() => this.props.delTodo(todo.id)}
            onDragEnd={this.dragEnd.bind(this)}
            onDragStart={this.dragStart.bind(this)}
          />
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
