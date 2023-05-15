import './TItem.css'

const TodoItem = ({text,completed}) => {
    return(
      <li>
        <div className='mainItemdiv'>
            <button type='check' className={`check ${completed && "check-completed"}`}>V</button>
            <p className={`text ${completed && "completed"}`}>{text}</p>
        </div>
        <button className='close'>❌</button>
      </li>
    );
};

export { TodoItem };