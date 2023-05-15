import { TodoList } from './components/Todolist';
import { TodoItem } from './components/TodoItem';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { Button } from './components/TodoButton';
import { Footer } from './components/Footer'

const defTasks = [
  {id: 1, text: 'Create a stylish index page' , completed: false},
  {id: 2, text: 'Start a money laundry bussiness' , completed: true},
  {id: 3, text: 'Meet CR7' , completed: false},
  {id: 4, text: 'Beggin World DOM protocol' , completed: false}
]

function App() {
  return (
    <>
      <div className='main'>
        <TodoCounter completed={3} total={9}/>
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
        <Footer />
      </div>
    </>
  );
}

export default App;
