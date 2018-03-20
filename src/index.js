import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Footer from "./Footer";
import Todolist from "./TodoList";

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            todo: [],
            currentFilter: 'all',
            searchTodo: 'input',
            searchValue: ''
        };
    }

    render () {
        const commonProps = {
            setState: state => this.setState(state),
            todo: this.state.todo,
            currentFilter: this.state.currentFilter,
            searchTodo: this.state.searchTodo,
            searchValue: this.state.searchValue
        };

        return (
            <div className='flexbox'>
                <Header {...commonProps} />
                <Todolist {...commonProps}/>
                <Footer {...commonProps}/>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

