import React  from 'react';

export default ( {todo:{text, id, status, isEditing}, onCompleted, dellTask, Eding ,submit} ) => {
    if(isEditing) {
     return(
         <div>
            <input
                type = 'text'
                placeholder = { text }
                className = 'list-group-item'
                onKeyDown = { e => e.which === 13 && submit(e.target.value, id)}
                onKeyUp = { e => e.which === 13 && Eding(isEditing) }
            />
         </div>
           );
    }
        return (
            <div>
            <span onDoubleClick ={ () => Eding(isEditing) } className='list-group-item'>
                <input type='checkbox' checked={ status === 'done' }   onChange={ () =>  onCompleted(status) }/>
                { text }
                <button onClick={ () => dellTask(id) } className='btn-danger float-right'>dell</button>
            </span>
            </div>
        );



};