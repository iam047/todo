import React, { Component } from 'react';

export  default class Todolist extends Component {
    dellTask(index) {
        let { todo } = this.props;
        const task = todo;
        task.splice(index, 1);
        this.setState(task)
    }
    render() {
        let { todo } = this.props;
        return (
            <h6>
                { todo.map((todo, index) => {
                    return(
                        <li key={todo.id} className='list-group-item ' >
                            {todo.text}
                            <button onClick={ this.dellTask.bind(this, index) }
                                    className='btn-danger float-right'>dell</button>
                        </li>
                    )
                }) }
            </h6>
        );
    }
}