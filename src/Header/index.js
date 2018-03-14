import React, { Component } from 'react';
import '../style.css'

export default class Header extends Component {
    addtodo(e) {
        let { todo } = this.props;
        if( e.which === 13 ) {
            if (e.target.value === '') {
                return alert('Please write the text')
            }
            const addetarget = e.target.value;
            const newTask = {
                text: addetarget,
                action: false,
                id: Date.now()
            };
            const todos = todo;
            todos.push(newTask);
            this.props.setState(todos);
            return e.target.value = '';
        }
    }
    render() {
        const style = { width: '50%' };
        return (
            <div className='container'>
                <div className='jumbotron mx-auto' style={ style }>
                    <h2 className='todoh'>todolist</h2>
                <input type='text'
                       placeholder='Write to keep in mind'
                       onKeyDown={ this.addtodo.bind(this) }
                       className='list-group-item-light form-control'
                />
                </div>
            </div>
        );
    }
}