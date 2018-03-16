import React, { Component } from 'react';
import '../style.css'

export  default class Footer extends Component {
    constructor() {
        super();
        this.obj = [
            {
                name: 'done',
                className: 'btn-danger float-right',
                text: 'Completed tasks'

            },
            {
                name: 'active',
                className: 'btn-danger float-right',
                text: 'Active tasks'
            },
            {
                name: 'all',
                className: 'btn-danger float-right',
                text: 'All tasks'
            }

        ];
    }
    dellDoneTask () {
        const { todo } = this.props;
        this.props.setState({
            todo: todo.filter( todo => todo.status === 'active' ? todo : false)
        });

    }
    changeFilter (nextFilter) {
        this.props.setState({currentFilter: nextFilter })
    }
    render () {
        const { todo } = this.props;
        const button =  this.obj.map(obj => {
           return (
               <button
                    key = {obj.name}
                    onClick = {this.changeFilter.bind(this, obj.name )}
                    className = {obj.className}
               >
                   {obj.text}
               </button>
            );
        });
        return (
            <div>
                <span>task counter : { todo.length } </span>
                <button onClick={ this.dellDoneTask.bind(this) } className='btn-danger float-right'>Dell Completed  tasks</button>
                {button}
            </div>
        );
    }
}