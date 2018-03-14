import React, { Component } from 'react';

export  default class Todolist extends Component {
    dellTask(i) {
        const { todo } = this.props;
        const result = todo.filter(todo => i !== todo.id ? todo : false);
        console.log(result);
        this.props.setState(result);
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