import React, {Component} from 'react';

class AddTodo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todo: []
        };

       // this.handleChange = this.handleChange.bind(this);
    }
    addtodo(e) {
        if(e.which === 13){
            if (e.target.value === '') {
                return alert('Please write the text')
            }
            const addetarget = e.target.value;
            const newTask = {
                text: addetarget,
                action: false,
                id: Date.now()
            };
            const todos = this.state.todo;
            todos.push(newTask);
            this.setState(todos);
            return e.target.value = '';
        }
    }
     dellTask(index){
     const task = this.state.todo;
     task.splice(index, 1);
     this.setState(task)
     }

    // changeText(index){
    //     const task = this.state.todo;
    //     let s = task.slice(index,index+1);
    //     console.log(s);
    //     this.setState(task)
    // }
    // handleChange(event) {
    //      console.log('adsdad');
    //      const text = this.state.todo.text;
    //      console.log(text);
    //     this.setState({text: event.target.value});
    //
    // }

    render() {
        return (
            <div>
               <input type='text'
                      placeholder='Write to keep in mind'
                      onKeyDown={this.addtodo.bind(this)}
                      className='list-group-item-light form-control'
                      value={this.state.todo.text}

               />
                <p> </p>
                <h6>
                    {this.state.todo.map((tod, index) => {
                        return(
                            // isRend ? input val = onchange=(newvalue => setstate({})) onsubmit
                        <li key={tod.id} className='list-group-item ' onDoubleClick={this.handleChange} >
                            {tod.text}
                            <button onClick={this.dellTask.bind(this,index)} className='btn-danger float-right'>dell</button>
                        </li>

                        )
                    })}
                    <p className='small'>Counter of records: {this.state.todo.length}</p>
                 </h6>
            </div>
        )
    }
}

export default  AddTodo