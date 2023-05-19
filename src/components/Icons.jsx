import { AiFillBell } from 'react-icons/ai'
import { GiCrossedSabres } from 'react-icons/gi'

const iconType = {
    "check": <AiFillBell />,
    "delete": <GiCrossedSabres />
}

function Icon ({type , color}){
    return (
        <span>
            {iconType[type]}
        </span>
    );
};


export { Icon }