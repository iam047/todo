import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css'
import Footer from "./Footer";
import Todolist from "./TodoList";


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todo: [
                {action:false ,
                 id: 1521033545857,
                 text: "asdasdas"}
                    ]
        };
    }

    render() {
        return (
            <div>
                <Header setState={state => this.setState(state)} todo = {this.state.todo} />
                <Todolist todo = {this.state.todo}/>
                <Footer setState={state => this.setState(state)} todo = {this.state.todo}/>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

