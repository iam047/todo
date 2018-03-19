import React, { Component } from 'react';
import '../style.css'

export default class Header extends Component {
    activesearch () {
        let { searchTodo } = this.props;
         const onSearch =  searchTodo === false ? searchTodo = true : searchTodo = false;
         console.log(onSearch);
        this.props.setState({
            searchTodo: onSearch
        });
    }
    addSearchValue = e => {
        const { searchTodo} = this.props;
        if(searchTodo)
        this.props.setState({
            searchValue: e.target.value
        });

    };

    addtodo (e) {
        const { todo } = this.props;
        if( e.which === 13 ) {
            if (e.target.value === '') {
                return alert('Please write the text')
            }
            let addtarget = e.target.value;
            const newTask = {
                text: addtarget,
                status: 'active',
                id: Date.now().toString(),
                isEditing: false
            };
            todo.push(newTask);
            this.props.setState(todo);
            return e.target.value = '';
        }
    }
    render () {
        return (

            <div className='flexbox'>
                <h2>todolist
                    <span className='text'> on/off search
                        <input type='checkbox'
                               onClick={this.activesearch.bind(this)}/>
                    </span>
                </h2>
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