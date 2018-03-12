import React, {Component} from 'react';
import arr from './arr';
class Main extends Component{
    state = {
        isOpen: true
    };

    componentWillMount(){

    }



    render() {
        const d = this.state.isOpen &&  <h3> create date: {(new Date()).toDateString()}</h3>;

        const listItems = arr.map((arr) =>
            <li key = {arr.toString()}>{arr}</li>
        );
        return (
            <div>
                <button onClick = {this.handlerClick}>
                    {this.state.isOpen ? 'close': 'open'}
                </button>
                {d}
                {listItems}
            </div>
        )
    }
    handlerClick = () => {
        console.log('click');
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
}




export default  Main