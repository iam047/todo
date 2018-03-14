import React, { Component } from 'react';
import '../style.css'

export  default class Footer extends Component {
    render() {
        const { todo } = this.props;
        console.log(todo);
        return (
            <p>  task counter : { todo.length }</p>
        );
    }
}