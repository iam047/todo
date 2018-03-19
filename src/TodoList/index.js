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
            todo: todo.filter(todo => id !== todo.id)
        });
    }

    onCompleted (todo) {
       const newStatus =  todo.status === 'active' ?
           todo.status = 'done' :
           todo.status = 'active';
        this.props.setState({
            todos: newStatus
        });
    }

    getTodosByFilter (todo, currentFilter) {
        if (currentFilter === 'all') {
            return todo;
        }
        return todo.filter(todo =>  todo.status === currentFilter);
    }

    isEding ( {id} ) {
        const nextTodos = this.props.todo.map(todo => {
            return id === todo.id
                ? {...todo, isEditing: !todo.isEditing}
                : todo
        });
        this.props.setState({
            todo: nextTodos
        });
    }


    render () {
        const { todo, currentFilter, searchValue} = this.props;
        const todos = this.getTodosByFilter(todo, currentFilter);
        const fillterSearch = todos.filter( todo => {
            return todo.text.indexOf(searchValue.toLowerCase()) !== -1
        });
        return (
            <div>
                { fillterSearch.map(item => {
                    return(
                        <TodoItem key = { item.id }
                                  submit = { this.submit.bind(this) }
                                  todo = { item }
                                  checked = { item.status === 'done'}
                                  Eding = { () => this.isEding(item) }
                                  onCompleted = {() => this.onCompleted(item) }
                                  dellTask = {() => this.dellTask(item.id) }
                        />
                    );
                }) }
            </div>
        );
    }
}