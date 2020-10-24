import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo'


class  App extends Component {

  state={
    todo:[
      {id: 1, content:  "play mario cart" },
      {id: 2, content: "buy some milk"}
    ]
  }

  deleteItem =(id)=>{
    const filteredList=this.state.todo.filter((todo)=>{
      return todo.id !==id
    }
    )

    this.setState({todo : filteredList})
  }

  addTodo = (todo)=>{
    console.log("from todo in parent")
    let newList=[...this.state.todo, todo]
    this.setState({todo: newList})
  }

 render(){
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">TODOS</h1>
      <Todos todos={this.state.todo} deleteItem={this.deleteItem}  />
     <AddTodo addTodo={this.addTodo} />
    </div>
  );
 }
 
}

export default App;
