import React  from 'react';

export default ( {todo:{text, id, status, isEditing}, onCompleted, dellTask, isEding ,addNewTodo, submit}) => {


    if(isEditing) {
     return(
         <div>
            <input
                type='text'
                placeholder={text}
                className='list-group-item'
                onKeyDown={(e) => e.which === 13 ? submit(e.target.value, id) : false}
                onKeyUp={(e) => e.which === 13 ? isEding(isEditing): false}


            />
         </div>
           );
    } else {
        return (
            <div>
            <span onDoubleClick ={() => isEding(isEditing)} className='list-group-item'>
                <input type='checkbox' checked={status === 'done'}  onChange={() => onCompleted(status)}/>
                {text}
                <button onClick={() => dellTask(id)} className='btn-danger float-right'>dell</button>
            </span>
            </div>
        );
    }


};