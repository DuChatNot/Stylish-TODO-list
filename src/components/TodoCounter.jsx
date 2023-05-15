import './TCounter.css';

const TodoCounter = ({total, completed}) => {
    return(
        <div className='mainTitle'>
            <h1>
                Completed: <span>{completed}</span> / <span>{total}</span>
            </h1>
        </div>
        
    );
};

export { TodoCounter };