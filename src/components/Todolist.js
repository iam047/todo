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
    getTodosByFilter = (todos, currentFilter) => {
        if (currentFilter === 'all') {
            return todos;
        }
        return todos.filter(todo =>  todo.done === currentFilter);
    };
    render() {
        let { todos, currentFilter  } = this.props;
        const item = this.getTodosByFilter(todos, currentFilter);
         return (
             <div>
                 {item.map(todo => (
                     <Todo key={todo.id}
                           todo = {todo}
                           dellTodo = {() => this.handleDelete(todo.id) }
                           Eding = { () => this.handleChangeIsEding(todo.id) }
                           submit = { (text) => this.handlesubmit(text,todo.id) }
                           ChangeDoneTodo = { () => this.handlechangeDone(todo.id) }

                     />
                 ))
                 }
             </div>
         );
    }
}


const mapStateToProps = ({todoReducer}) => ({
    todos: todoReducer.todos,
    currentFilter: todoReducer.currentFilter
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
