import {useState, useEffect} from 'react';
import {getAllCategory} from '../api';
import {Preloader} from '../components/Preloader';
import {CategoryList} from '../components/CategoryList'

export const Home = () => {

    const [data, setData] = useState([]);

    useEffect(async () => {

        getAllCategory().then(data => {
            setData(data.categories)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <>
            {
               data.length ? <CategoryList data={data}/> : <Preloader/>
            }
        </>
    )
}