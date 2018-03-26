import React, {Component} from 'react';
import {connect} from "react-redux";
import {filters, dellAllDoneTodo} from "../actions";
import {bindActionCreators} from "redux";

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
    filters = (nextFilter) =>{
         this.props.filters(nextFilter);
    };


    dellAllDoneTodo = () => {
        this.props.dellAllDoneTodo()
    };

    render () {
        //render button
        const button =  this.obj.map(obj => {
            return (
                <button
                    key = {obj.name}
                    onClick = {this.filters.bind(this, obj.name )}
                    className = 'btn-danger '>
                    {obj.text}
                </button>
            );
        });

        return (
            <div>
                <p>task counter : {this.props.todos.length}</p>
                <div>
                    <button  onClick={this.dellAllDoneTodo} >Dell Completed  tasks</button>
                    {button}
                </div>
            </div>
        );
    }
}

// const mapStateToProps = ({todoReducer}) => ({
//     todos: todoReducer.todos
// });
// const mapDispatchToProps = dispatch => ({
//     filters: (filter) => dispatch(filters(filter)),
//     dellAllDoneTodo: () => dispatch(dellAllDoneTodo())
//
// });
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Footer)

export default connect(
    ({todoReducer}) => ({
        todos: todoReducer.todos
    }),
    dispatch => bindActionCreators({
        filters,
        dellAllDoneTodo
    }, dispatch)
)(Footer);



