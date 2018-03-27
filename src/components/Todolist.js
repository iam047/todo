import React, { Component } from 'react';
import { connect } from "react-redux";
import { dellTodo, changeIsEditing, submit, changeDone } from "../actions";
import Todo from './Todo';
import { bindActionCreators } from "redux";

class Todolist extends Component {

    submit = (text, id) => {
        this.props.submit(text, id)
    };

    dellTodo = id => {
        this.props.dellTodo(id);
    };

    changeIsEditing = id => {
        this.props.changeIsEditing(id);
    };

    changeDone = id => {
        this.props.changeDone(id);
    };
    getTodosByFilter = (todos, currentFilter) => {
        if (currentFilter === 'all') {
            return todos;
        }
        return todos.filter(todo =>  todo.done === currentFilter);
    };
    render() {
        let { todos, currentFilter,searchTodo,searchValue, Loading } = this.props;
        const item = this.getTodosByFilter(todos, currentFilter);
        const fillterSearch = item.filter( todo => {
            return searchTodo ==='input' || todo.text.toLowerCase().includes(searchValue);
        });
        if (Loading) {
            return (
                <p>Loading...</p>
            );
        }
        return (
             <div>
                 {fillterSearch.map(todo => (
                     <Todo key={todo.id}
                           todo = {todo}
                           dellTodo = {() => this.dellTodo(todo.id) }
                           editing = { () => this.changeIsEditing(todo.id) }
                           submit = { (text) => this.submit(text,todo.id) }
                           ChangeDoneTodo = { () => this.changeDone(todo.id) }

                     />
                 ))
                 }
             </div>
         );
    }
}


// const mapStateToProps = ({todoReducer}) => ({
//     todos: todoReducer.todos,
//     currentFilter: todoReducer.currentFilter,
//     searchTodo:  todoReducer.searchTodo,
//     searchValue: todoReducer.searchValue
// });
// const mapDispatchToProps = dispatch => ({
//     dellTodo: id => dispatch(dellTodo(id)),
//     changeIsEding: id => dispatch(changeIsEding(id)),
//     submit: (text,id) => dispatch(submit(text,id)),
//     changeDone: id => dispatch(changeDone(id))
// });
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Todolist)

export default connect(
    ({todoReducer}) => ({
        todos: todoReducer.todos,
        currentFilter: todoReducer.currentFilter,
        searchTodo:  todoReducer.searchTodo,
        searchValue: todoReducer.searchValue,
        Loading: todoReducer.Loading
    }),
    dispatch => bindActionCreators({
        dellTodo,
        changeIsEditing,
        submit,
        changeDone
    }, dispatch)
)(Todolist);
