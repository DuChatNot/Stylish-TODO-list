import { useState } from 'react';

import { TodoList } from './components/Todolist';
import { TodoItem } from './components/TodoItem';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { Button } from './components/TodoButton';
import { Footer } from './components/Footer'

const defTasks = [
  {id: 1, text: 'Create a stylish index page', completed:false},
  {id: 2, text: 'Start a money laundry bussiness', completed:false},
  {id: 3, text: 'Meet CR7', completed:false},
  {id: 4, text: 'Beggin World DOM protocol', completed:false},
  {id: 5, text: 'Revert World DOM protocol', completed:false},
]

function App() {
  const [todos, setTodos] = useState(defTasks) //Todo Items
  const completedTodos = todos.filter(p => p.completed).length;
  const totalTodos = todos.length;

  const [sVal,setSVal] = useState(''); //Search Bar Value

  const req = todos.filter(p => p.text.toLowerCase().includes(sVal.toLowerCase())) //Filter search results
  
  const checkTodo = (id) => {
    console.log(`Clicked ${id}`)
    const newTodos = [...todos]
    const index = newTodos.findIndex(p => p.id === id)

    newTodos[index].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (id) => {
    const newTodos = [...todos]
    const index = newTodos.findIndex(p => p.id === id)

    newTodos.splice(index,1);
    setTodos(newTodos);
  }


  return (
    <>
      <div className='main'>
        <TodoCounter completed={completedTodos} total={totalTodos}/>
        <div className='interaction'>
          <TodoSearch 
          searchVal={sVal}
          setSearchVal={setSVal}
          />
        </div>

        <TodoList>
          {req.map(p => (
              <TodoItem 
              key={p.id} 
              text={p.text}
              completed={p.completed}
              onComplete={() => checkTodo(p.id)}
              onDelete={() => deleteTodo(p.id)}
              />
          ))}
        </TodoList>
      </div>
      <div className='bottomside'>

        <Button />
        <Footer />
      </div>
    </>
  );
}

export default App;
