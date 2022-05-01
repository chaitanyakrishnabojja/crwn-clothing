import {  useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesConext } from "../../contexts/categories.context";


const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesConext);

    return (
        <>
            {
                Object.keys(categoriesMap).map((title) => 
                    <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
                )
            }
        </>
    )
}
export default CategoriesPreview;