import React, {Component} from 'react';
import Header from "./Header";
import Todolist from "./Todolist";
import Footer from "./Footer";
import '../index.css';
export default class App extends Component {

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