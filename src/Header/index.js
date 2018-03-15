import React, { Component } from 'react';
import '../style.css'

export default class Header extends Component {
    addtodo(e) {
        const { todo } = this.props;
        if( e.which === 13 ) {
            if (e.target.value === '') {
                return alert('Please write the text')
            }
            const addtarget = e.target.value;
            const newTask = {
                text: addtarget,
                status: 'active',
                id: Date.now().toString()
            };
            todo.push(newTask);
            this.props.setState(todo);
            return e.target.value = '';
        }
    }
    render() {
        return (
            <div className=''>
                <div className='jumbotron ' >
                    <h2 className='todoh '>todolist</h2>
                <input type='text'
                       placeholder='Write to keep in mind'
                       onKeyDown={ this.addtodo.bind(this) }
                       className='list-group-item-light form-control table'
                />
                </div>
            </div>
        );
    }
}