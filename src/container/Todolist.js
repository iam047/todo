import React, {Component} from 'react';
import {connect} from "react-redux";
import {dellTodo, changeIsEding, submit, changeDone} from "../actions";
import Todo from './Todo';

class Todolist extends Component {

    handlesubmit (text, id) {
        console.log(text, id);
        this.props.submit(text, id)
    }

    handleDelete = (id) => {
        this.props.dellTodo(id);
    };

    handleChangeIsEding = (id) => {
        this.props.changeIsEding(id);
    };

    handlechangeDone = (id) => {
        this.props.changeDone(id);
    };

    render() {
         return (
             <div>
                 {this.props.todos.map(todo => (
                     <Todo key={todo.id}
                           todo = {todo}
                           dellTodo = {() => this.handleDelete(todo.id) }
                           Eding = { () => this.handleChangeIsEding(todo.id) }
                           submit = { () => this.handlesubmit(this,todo.id) }
                           ChangeDoneTodo = { () => this.handlechangeDone(todo.id) }

                     />
                 ))
                 }
             </div>
         );
    }
}


const mapStateToProps = ({todoReducer}) => ({
    todos: todoReducer.todos
});
const mapDispatchToProps = dispatch => ({
    dellTodo: id => dispatch(dellTodo(id)),
    changeIsEding: id => dispatch(changeIsEding(id)),
    submit: (text,id) => dispatch(submit(text,id)),
    changeDone: id => dispatch(changeDone(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todolist)
