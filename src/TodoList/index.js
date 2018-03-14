import React, { Component } from 'react';

export  default class Todolist extends Component {
    dellTask(index) {
        const { todo } = this.props;
        todo.splice(index, 1);
        this.props.setState(todo);
        console.log(todo);
    }
    render() {
        const { todo } = this.props;
        return (
            <div>
                { todo.map((todo, index) => {
                    return(
                        <li key={todo.id} className='list-group-item ' >
                            {todo.text}
                            <button onClick={ this.dellTask.bind(this, index) }
                                    className='btn-danger float-right'>dell</button>
                        </li>
                    )
                }) }
            </div>
        );
    }
}