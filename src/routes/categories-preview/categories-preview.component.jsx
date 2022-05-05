import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";
import { selectCategoriesMap, selectIsCategoriesLoading } from "../../store/categories/category.selector";


const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);

    const isLoading = useSelector(selectIsCategoriesLoading);

    return (
        <>
            { isLoading ? (<Spinner />) :
                (Object.keys(categoriesMap).map((title) => 
                    <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
                ))
            }
        </>
    )
}
export default CategoriesPreview;