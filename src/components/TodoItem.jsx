import './TItem.css'
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';

const TodoItem = ({text, completed, onComplete, onDelete}) => {
    return(
      <li>
        <div className='mainItemdiv'>
            <button type='check'
            onClick={onComplete} 
            className={`check ${completed && "check-completed"}`}><CompleteIcon /></button>
            <p className={`text ${completed && "completed"}`}>{text}</p>
        </div>
        
        <button className='close'
        onClick={onDelete}><DeleteIcon /></button>
      </li>
    );
};



export { TodoItem };