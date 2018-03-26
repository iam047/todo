import React, {Component} from 'react';
import { connect } from 'react-redux'
import { addTodo, changeSearch, valueSearch} from "../actions";

class Header extends Component {

    activeSearch (item) {
        this.props.changeSearch(item);
    }

    addSearchValue  (e) {
        const { searchTodo} = this.props;
        if(searchTodo === 'search')
        this.props.valueSearch(e.target.value);
    };

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
                this.props.addTodo(input.value);
                input.value = ''
            }}>
                <div className="btn-group">
                    <button className="btn btn-default btn-sm dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                        Select an {this.props.searchTodo}
                        <span className="caret"></span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li className="dropdown-item"
                            onClick={()=> this.activeSearch('input')  } >Input</li>
                        <li className="dropdown-item"
                            onClick={()=> this.activeSearch('search')  }>Search</li>
                    </div>
                </div>
                <input  ref={node => input = node}
                        onChange={ e => this.addSearchValue(e) }
                />
            </form>
            </div>
        );
    }
}

const mapStateToProps = ({todoReducer}) => ({
    todos: todoReducer.todos,
    searchTodo: todoReducer.searchTodo
});
const mapDispatchToProps = dispatch => ({
    addTodo: value => dispatch(addTodo(value)),
    changeSearch: value => dispatch(changeSearch(value)),
    valueSearch:  value => dispatch(valueSearch(value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)



