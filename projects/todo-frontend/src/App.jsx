import './App.css';
import { Routes, Route } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';
import TodoList from './components/TodoList';
function App() {
    
  return (





  
    <Routes>
       <Route path="/" element={<TodoList/>} />
      <Route path="/add" element={<AddTodo/>} />
     
      <Route path = "/edit/:id" element={<EditTodo/>} />
  </Routes>
  );
}

export default App;
