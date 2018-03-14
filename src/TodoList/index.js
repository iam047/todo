import React, { Component } from 'react';

export  default class Todolist extends Component {
    dellTask(id) {
        const { todo } = this.props;
        this.props.setState({
            todo: todo.filter(todo => id !== todo.id ? todo : false)
        });

    }
    render() {
        const { todo } = this.props;
        return (
            <div>
                { todo.map((todo) => {
                    return(

                        <span key={todo.id} className='list-group-item'>
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