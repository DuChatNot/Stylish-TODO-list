import './TButton.css'

const Button = () =>{
    return (
        <>
            <button className="add"
            onClick={(e) => {
                console.log('Add clicked',e);
                console.log(e.target.textContent);
            }}
            >+</button>
        </>
    )
}

export { Button };