import React, { Component } from 'react';
import Todos from './Todos';


class AddTodo extends Component{

    state={
        id: null,
        content: null
    }

    handleChange= (e) =>{
        this.state[e.target.id]=e.target.value;
        this.state.id=Math.random;
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
    }

    render(){
        return(
                <form onSubmit={this.handleSubmit}>
                    <input id="content" type="text" placeholder="content" onChange={this.handleChange}/>
                    <input type="submit" value="Submit" />

                </form>

        )
    }

}

export default AddTodo;