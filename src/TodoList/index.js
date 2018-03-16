import React, { Component } from 'react';
import TodoItem from './components/TodoItem';

export  default class Todolist extends Component {
    submit (e, id) {
        if (e === '') {
            return alert('Please write the text')
        }
        const { todo } = this.props;
        const rewrite = e;
        const newtext = todo.filter(todo => id === todo.id ? todo.text = rewrite : false);
        this.props.setState({todo: todo.slice(newtext) });
    }
    dellTask (id) {
        const { todo } = this.props;
        this.props.setState({
            todo: todo.filter(todo => id !== todo.id ? todo : false)
        });
    }
    onCompleted (todo) {
        this.props.setState({
            todos: todo.status === 'active' ? todo.status = 'done' : todo.status = 'active'
        });
    }
    getTodosByFilter (todo, currentFilter) {
        if (currentFilter === 'all') {
            return todo;
        }
        return todo.filter(todo =>  todo.status === currentFilter);
    }
    isEding (todo) {
        this.props.setState({
            todos: todo.isEditing === false ? todo.isEditing = true : todo.isEditing = false
        });
    }
    render () {
        const { todo, currentFilter } = this.props;
        const todos = this.getTodosByFilter(todo, currentFilter);
        return (
            <div>
                { todos.map((item) => {
                    return(
                        <TodoItem key = { item.id }
                                  submit = { this.submit.bind(this) }
                                  todo = { item }
                                  checked = { item.status === 'done'}
                                  Eding = { ()=> this.isEding(item) }
                                  onCompleted = {()=> this.onCompleted(item) }
                                  dellTask = {()=> this.dellTask(item.id) }
                        />
                    );
                }) }
            </div>
        );
    }
}