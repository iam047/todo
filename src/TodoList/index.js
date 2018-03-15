import React, { Component } from 'react';


export  default class Todolist extends Component {
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

    render () {
        const { todo, currentFilter } = this.props;
        const todos = this.getTodosByFilter(todo, currentFilter);
        return (
            <div>
                { todos.map((todo) => {
                    return(
                        <span key={todo.id} className='list-group-item'>
                         <input type='checkbox' checked={todo.status === 'done'}  onChange={this.onCompleted.bind(this, todo)}  />
                            {todo.text}
                            <button onClick={ this.dellTask.bind(this, todo.id) }
                                    className='btn-danger float-right'>dell</button>
                        </span>
                    )
                }) }
            </div>
        );
    }
}