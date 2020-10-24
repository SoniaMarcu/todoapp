import React from 'react';


const Todos = ({todos, deleteItem})=>{


    const todosList=todos.map((todo)=> 
        
            <div className="collection-item" key={todo.id}>
                <span>{todo.content}</span>
              <button className="waves-effect waves-light btn-small" onClick={()=>deleteItem(todo.id)}>Button</button>

            </div>
        
    )

    return(

        <div className="collection">
            {todosList}
        </div>
    );

}

export default Todos;