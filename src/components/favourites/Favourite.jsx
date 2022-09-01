import { Link } from "react-router-dom"
import {AddButton} from '../UI/AddButton'


export function Favourite(props){
    const {name, image, species, status, id} = props
    return(
            <div className="main__character">
                <AddButton {...props}/>
            <Link to={`/character/${id}`}>
            <img className="character__image" src={image}/>
            </Link>
            <Link to={`/character/${id}`} className="character__info">
            <div className="character__name">{name}</div>
            <div className="character__species">{species}</div>
            <div className="character__status">{status}</div>
            </Link>
        </div>
    )
}