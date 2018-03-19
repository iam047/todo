import React, { Component } from 'react';
import '../style.css'

export default class Header extends Component {

    activeSearch () {
        const search= 'search';
        this.props.setState({
            searchTodo: search
        });
    }

    activeInput () {
        const input = 'input';
        this.props.setState({
            searchTodo: input
        });
    }

    addSearchValue = e => {
        const { searchTodo} = this.props;
        if(searchTodo === 'search')
        this.props.setState({
            searchValue: e.target.value
        });
    };


    addtodo (e) {
        const { todo, searchTodo } = this.props;
        if(searchTodo === 'input')
        if( e.which === 13 ) {
            if (e.target.value === '') {
                return alert('Please write the text')
            }
            const addtarget = e.target.value;
            const newTask = {
                text: addtarget,
                status: 'active',
                id: Date.now().toString(),
                isEditing: false
            };
           todo.push(newTask);
            this.props.setState({
                todo: todo
            });
            return e.target.value = '';
        }
    }
    render () {
        return (
            <div className ='flexbox'>
                <h2>todolist</h2>
                <div className="btn-group">
                    <button className="btn btn-default btn-sm dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                        Select an { this.props.searchTodo }
                        <span className="caret"></span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li className="dropdown-item"
                            onClick={ this.activeInput.bind(this)  } >Input</li>
                        <li className="dropdown-item"
                            onClick={ this.activeSearch.bind(this)  }>Search</li>
                    </div>
                </div>
                <input type='text'
                       placeholder='Write to keep in mind'
                       onKeyDown={ this.addtodo.bind(this) }
                       className='list-group-item-light form-control'
                       onChange={ this.addSearchValue.bind(this) }
                />
            </div>
        );
    }
}