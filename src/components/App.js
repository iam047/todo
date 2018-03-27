import React, { Component } from 'react';
import Header from "./Header";
import Todolist from "./Todolist";
import Footer from "./Footer";
import '../index.css';
import { fetchData } from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class App extends Component {

    componentDidMount() {
        this.props.fetchData('https://api.myjson.com/bins/jtkkn');
    }

    render(){
        return(
            <div className='text-center' >
                <div className='todo-box'>
                <Header/>
                <Todolist />
                <Footer/>
                </div>
            </div>
        );
    }
}
export default connect(
    ({todoReducer}) => ({
        todos: todoReducer.todos
    }),
    dispatch => bindActionCreators({
        fetchData
    }, dispatch)
)(App);
