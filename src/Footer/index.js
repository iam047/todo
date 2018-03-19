import React, { Component } from 'react';
import '../style.css'

export  default class Footer extends Component {
    constructor() {
        super();
        this.obj = [
            {
                name: 'done',
                text: 'Completed tasks'
            },
            {
                name: 'active',
                text: 'Active tasks'
            },
            {
                name: 'all',
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
        //render button
        const button =  this.obj.map(obj => {
           return (
               <button
                    key = {obj.name}
                    onClick = {this.changeFilter.bind(this, obj.name )}
                    className = 'btn-danger '>
                   {obj.text}
               </button>
            );
        });

        return (
            <div>
                <span>task counter : { todo.length } </span>
                <div className='button'>
                <button onClick={() => this.dellDoneTask() } className='btn-danger'>Dell Completed  tasks</button>
                {button}
                </div>
            </div>
        );
    }
}