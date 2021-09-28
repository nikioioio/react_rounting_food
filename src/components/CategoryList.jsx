import {CategoryItem} from '../components/CategoryItem'

export const CategoryList = ({data = []}) => {

    return (
            <div className="list">
                {
                    data.map(element => (
                        <CategoryItem key={element.idCategory} {...element} />
                    ))
                }
            </div>

    )
}