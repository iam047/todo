import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTodo } from "../actions";

class Header extends Component {
    render() {
        let input;

        return (
            <div>
            <h1>Header</h1>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                console.log(input.value);
                this.props.addTodo(input.value);
                input.value = ''
            }}>
                <input  ref={node => input = node} />
            </form>
            </div>
        );
    }
}



export default connect(
    state => ({
        store: state
    }),
    dispatch => bindActionCreators({
        addTodo
    }, dispatch)
)(Header);

