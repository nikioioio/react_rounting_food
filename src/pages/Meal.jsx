import {Link} from "react-router-dom";
import { useParams, useHistory } from 'react-router-dom';


export const Meal = (props) => {
    const {idMeal, strMeal, strMealThumb, name, goBack} = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal}/>

            </div>
            <div className="card-content">
                <span className="card-title">{strMeal}</span>
            </div>
            <div className="card-action">
                <Link to={`/category/${name}/${idMeal}`} className="btn">Watch meal</Link>
            </div>
        </div>
    )
}