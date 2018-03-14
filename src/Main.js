import React, {Component} from 'react';
import Form from './Form';
import './style.css'
class Main extends Component{

    render() {
        const style = {width: '50%'};
        return (
            <div className='container'>
                <div className='jumbotron mx-auto' style={style}>
               <h2 className='todoh'>todolist</h2>
                <Form />
                </div>
            </div>

        )

    }


}




export default  Main