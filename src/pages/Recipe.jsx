import {useParams, useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getMealById} from '../api';
import {Preloader} from '../components/Preloader';

export const Recipe = () => {
    const [recipe, setRecipe] = useState({})
    const {goBack} = useHistory();
    const {idMeal} = useParams();

    const {strMealThumb, strMeal, strCategory, strArea, strInstructions, strYoutube} = recipe;

    useEffect(() => {

        getMealById(idMeal).then(json => setRecipe(json.meals[0]))

    }, [idMeal]);

    return (
        <>
            {
                !recipe.idMeal ? <Preloader/> : (
                    <div className='recipe'>
                        <img src={strMealThumb} alt={strMeal}/>
                        <h1>{strMeal}</h1>
                        <h6>Category: {strCategory}</h6>
                        {strArea ? <h6>Area: {strArea}</h6> : null}
                        <p>{strInstructions}</p>
                        <table className="centered">
                            <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                Object.keys(recipe).map(key => {
                                    let s = 'strIngredient';
                                    let length  = s.split('').length;
                                    let s1 = 'strMeasure';
                                    if (key.includes(s) && recipe[key]) {
                                        return (
                                            <>
                                                <tr>
                                                    <th>{recipe[key]}</th>
                                                    <th>{recipe[s1+key.slice(length)]}</th>
                                                </tr>
                                            </>
                                        )

                                    }
                                })
                            }


                            </tbody>
                        </table>
                        {strYoutube ? (
                            <div className='row'>
                                <h5>Video recipe</h5>
                                <iframe title={idMeal} src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}/>
                            </div>

                        ) : null}
                    </div>
                )
            }
            <button className='btn' onClick={goBack}>Назад</button>
        </>
    )
}