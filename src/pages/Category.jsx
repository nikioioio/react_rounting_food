import { getMealByCategory } from '../api';
import { useEffect, useState } from 'react';
import { useParams, useHistory} from 'react-router-dom';
import { MealList } from './MealList';
import { Preloader } from '../components/Preloader';

export const Category = () => {

    const [dataMeals, setDataMeals] = useState([])

    const {name} = useParams();
    const {goBack} = useHistory();

    useEffect(() => {
        getMealByCategory('Seafood').then(json => {
            setDataMeals(json.meals)
        })
    }, [name])

    return (
        <>
            <button onClick={goBack} className='btn'>Назад</button>
            {
                dataMeals.length ? <MealList meals={dataMeals}/> : <Preloader/>
            }
        </>
    )
}