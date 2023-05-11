import './TCounter.css';

const TodoCounter = ({total, completed}) => {
    return(
        <div className='mainTitle'>
            <h1>
                Completed: {completed} / {total}
            </h1>
        </div>
        
    );
};

export { TodoCounter };