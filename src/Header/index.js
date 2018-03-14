import React, { Component } from 'react';
import '../style.css'

export default class Header extends Component {
    addtodo(e) {
        const { todo } = this.props;
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
            todo.push(newTask);
            this.props.setState(todo);
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