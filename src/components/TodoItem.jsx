import './TItem.css'

const TodoItem = ({text,completed}) => {
    return(
      <li>
        <div className='mainItemdiv'>
          <div className='leftside'>
            <span>{completed}</span>
            <p>{text}</p>
          </div>
          <div className='rightside'>
            <button className='close'>❌</button>
          </div>
        </div>
      </li>
    );
};

export { TodoItem };