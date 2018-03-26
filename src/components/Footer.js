import React, {Component} from 'react';
import {connect} from "react-redux";
import {filters, dellAllDoneTodo} from "../actions";

class  Footer extends Component {
     constructor(){
         super();
         this.obj = [
             {
                 name: true,
                 text: 'COMPLETED'
             },
             {
                 name: false,
                 text: 'ACTIVE'
             },
             {
                 name: 'all',
                 text: 'ALL'
             }

         ];
     }
    changeFilter = (nextFilter) =>{
         this.props.filters(nextFilter);
    };


    killdellAllDoneTodo = () => {
        this.props.dellAllDoneTodo()
    };

    render () {
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
    filters: (filter) => dispatch(filters(filter)),
    dellAllDoneTodo: () => dispatch(dellAllDoneTodo())

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer)
