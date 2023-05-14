import { TodoList } from './components/Todolist';
import { TodoItem } from './components/TodoItem';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { Button } from './components/Button.jsx';

const defTasks = [
  {id: 1, text: 'Task 1' , completed: false},
  {id: 2, text: 'Task 2' , completed: true},
  {id: 3, text: 'Task 3' , completed: false},
  {id: 4, text: 'Task 4' , completed: true}
]

function App() {
  return (
    <>
      <div className='main'>
        <TodoCounter completed={5} total={15}/>
        <div className='interaction'>
          <TodoSearch />
        </div>
      

        <TodoList>
          {defTasks.map(p => (
              <TodoItem 
              key={p.id} 
              text={p.text}
              completed={p.completed} 
              />
          ))}
        </TodoList>
      </div>
      <div className='bottomside'>
        <Button />
      </div>
    </>
  );
}

export default App;
