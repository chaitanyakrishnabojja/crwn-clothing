import './category.styles.tsx';
import { useParams } from 'react-router-dom';
import {  useEffect, useState } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectIsCategoriesLoading } from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.component';
import { CategoryContainer, CategoryTitle } from './category.styles';

type CategoryRouteParams = {
    category: string;
};

const Category = () => {
    const {category} = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsCategoriesLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return(
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading ? (<Spinner /> ) : (
                    <CategoryContainer>
                    {
                        products && products.map((product) => <ProductCard key={product.id} product={product} />)
                    }
                    </CategoryContainer>
                )
            }
        </>
    )
}

export default Category;