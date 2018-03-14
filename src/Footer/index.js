import React, { Component } from 'react';
import '../style.css'

export  default class Footer extends Component {
    render() {
        let { todo } = this.props;
        return (
            <p>  task counter : { todo.length }</p>
        );
    }
}