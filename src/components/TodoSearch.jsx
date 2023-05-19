import './TSearch.css'

const TodoSearch = ({searchVal , setSearchVal}) => {
    return(
        <input 
        placeholder="Workout..."
        value={searchVal}
        onChange={(e) =>{
            setSearchVal(e.target.value);
            console.log(e.target.value)
        }}
        />
    );
}

export {TodoSearch};