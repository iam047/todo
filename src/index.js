import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";
import Todolist from "./TodoList";

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            todo: [],
            currentFilter: 'all'
        };
    }
    render () {
        const commonProps = {
            setState: state => this.setState(state),
            todo: this.state.todo,
            currentFilter: this.state.currentFilter
        };
        return (
            <div>
                <Header {...commonProps} />
                <Todolist {...commonProps}/>
                <Footer {...commonProps}/>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

