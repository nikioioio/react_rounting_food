import { API_URL } from './config';

export const getMealById = async (id) => {

    const response = await fetch(API_URL + `lookup.php?i=${id}`);
    return  await response.json();
}

export const getAllCategory = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return  await response.json();
}

export const getMealByCategory = async (category) => {
    const response = await fetch(API_URL + `filter.php?c=${category}`);
    return  await response.json();
}