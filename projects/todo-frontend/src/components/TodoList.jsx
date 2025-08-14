import { useEffect, useState } from "react";
import api from '../api/axios';
import { Link } from "react-router-dom";
const TodoList = () => {

  const [todos, setTodos] = useState([]);


const fetchTodos = async () => {

  try {


    const response  = await api.get("")
    setTodos(response.data)
  } catch(error) {
    console.error("Error fetching todos:", error);
  }
};
useEffect (() => {
  fetchTodos();
}, []);


const deleteTodo = async(id) => {

  try{

await api.delete(`/${id}`);
fetchTodos();

  } catch (error) {
    console.error("error deleting todo:" , error)
  }
};




return (


<div>


<h1>Todo List</h1>
<Link to="/add">
<button>Add Todo </button>
</Link>


<ul>


  {todos.map((todo)=>(
<li key={todo.id}>
<h3>{todo.title}</h3>
<p>{todo.description}</p>
<Link to={`/edit/${todo.id}`}>

<button>Edit</button>

</Link>


<button onClick={() => deleteTodo(todo.id)}  > Delete </button>

console.log(todos); // inside the component

</li>



  ))}
</ul>


</div>

);

};

export default TodoList;