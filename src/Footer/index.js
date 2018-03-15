import React, { Component } from 'react';
import '../style.css'

export  default class Footer extends Component {
    dellDoneTask() {
        const { todo } = this.props;
        this.props.setState({
            todo: todo.filter(todo => todo.status === 'active' ? todo : false)
        });

    }
    changeFilter(nextFilter) {
        this.props.setState({currentFilter: nextFilter })
    }
    render() {
        const { todo } = this.props;
        return (
            <div>
                <span>task counter : { todo.length }</span>
                <button onClick={this.dellDoneTask.bind(this) } className='btn-danger float-right'>Dell Completed  tasks</button>
                <button onClick={this.changeFilter.bind(this, 'done') } className='btn-danger float-right'>Completed tasks</button>
                <button onClick={this.changeFilter.bind(this, 'active') } className='btn-danger float-right'>Active tasks</button>
                <button onClick={this.changeFilter.bind(this, 'all')} className='btn-danger float-right'>All tasks</button>
            </div>
        );
    }
}