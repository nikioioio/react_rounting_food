import { Meal } from './Meal'
import { useParams, useHistory } from 'react-router-dom';

export const MealList = ({meals = []}) => {

    const {name} = useParams();
    const {goBack} = useHistory();

    return(
        <div className='list'>
            {
                meals.map(meal => (
                    <Meal key={meal.idMeal} name={name} goBack={goBack} {...meal} />
                ))
            }
        </div>
    )
}