import React, { Component } from 'react';
import TodoItem from './components/TodoItem';

export  default class Todolist extends Component {
    submit(e, id) {
        const { todo } = this.props;
        const rewrite = e;
        const newtext = todo.filter(todo => id === todo.id ? todo.text = rewrite : false);
        todo.slice(newtext);
        this.props.setState(todo);
    }

    dellTask (id) {
        //debugger;
        const { todo } = this.props;
        this.props.setState({
            todo: todo.filter(todo => id !== todo.id ? todo : false)
        });

    }
    onCompleted (todo) {
       todo.status === 'active' ? todo.status = 'done' : todo.status = 'active' ;
        this.props.setState(todo);
    }

    getTodosByFilter (todo, currentFilter) {
        if (currentFilter === 'all') {
            return todo;
        }
        return todo.filter(todo =>  todo.status === currentFilter);
    }
    isEding (todo) {
        todo.isEditing === false ? todo.isEditing = true : todo.isEditing = false ;
        this.props.setState(todo);
    }

    render () {
        const { todo, currentFilter } = this.props;
        const todos = this.getTodosByFilter(todo, currentFilter);
        return (
            <div>
                { todos.map((todo) => {
                    return(
                        <TodoItem key = {todo.id}
                                  submit = {this.submit.bind(this) }
                                  todo = {todo}
                                  checked = {todo.status === 'done'}
                                  isEding = {this.isEding.bind(this, todo)}
                                  onCompleted = {this.onCompleted.bind(this, todo)}
                                  dellTask = { this.dellTask.bind(this, todo.id)}
                        />
                    );
                }) }
            </div>
        );
    }
}