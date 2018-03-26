import React, {Component} from 'react';
import {connect} from "react-redux";
import {showDone, showActive,  showAll, dellAllDoneTodo} from "../actions";

class  Footer extends Component {
     constructor(){
         super();
         this.obj = [
             {
                 title: "ACTIVE",
                 onClick: this.showActiveTodos
             },
             {
                 title: "DONE",
                 onClick: this.showDoneTodos
             },
             {
                 title: "ALL",
                 onClick: this.showAllTodos
             }
         ];
     }

    showAllTodos = () => {
        this.props.showAll()
    };

    showActiveTodos = () => {
        this.props.showActive()
    };

    showDoneTodos = () => {
        this.props.showDone()
    };

    killdellAllDoneTodo = () => {
        this.props.dellAllDoneTodo()
    };

    render () {
        //render button
        const button =  this.obj.map(obj => {
            return (
                <button
                    key = {obj.title}
                    onClick = {obj.onClick}
                    className = 'btn-danger '>
                    {obj.title}
                </button>
            );
        });

        return (
            <div>
                <p>task counter : {this.props.todos.length}</p>
                <div>
                    <button  onClick={this.killdellAllDoneTodo} >Dell Completed  tasks</button>
                    {button}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({todoReducer}) => ({
    todos: todoReducer.todos
});
const mapDispatchToProps = dispatch => ({
    showDone: () => dispatch(showDone()),
    showActive: () => dispatch(showActive()),
    showAll: () => dispatch(showAll()),
    dellAllDoneTodo: () => dispatch(dellAllDoneTodo())

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer)
