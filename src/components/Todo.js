import React from 'react';

export default ( {todo:{text, id, isEditing, done}, dellTodo, editing, submit, ChangeDoneTodo } ) => {
    if(isEditing) {

        return(
            <div>
                <form onSubmit={e => { e.preventDefault();  submit(this.input.value, id) }}>
                    <input  type = 'text'
                            placeholder = { text }
                            onKeyUp = { e => e.which === 13 && editing(isEditing) }
                            ref = {input => this.input = input }
                    />
                </form>
            </div>);
    }
    return (
        <div>
            <span  onDoubleClick ={ () => editing(isEditing) }
                   style={ { textDecoration: done ? 'line-through' : 'none'}}
                   className='list-group-item text-start'>
                <input type='checkbox' checked={done === true} onChange={ () => ChangeDoneTodo(id)}/>
                { text }
                <button  className='btn-danger button float-right' onClick={ () => dellTodo( id) }>dell</button>
            </span>
        </div>
    );
};
