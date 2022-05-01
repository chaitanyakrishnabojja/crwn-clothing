import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import { CategoryPreviewContainerStyed } from './category-preview.styles';

const CategoryPreview = ({title, products}) => {

    return (
        <CategoryPreviewContainerStyed>
            <h2>
                <Link className='title' to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className='preview'>
                {
                    products.filter((_, index) => index < 4).map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </CategoryPreviewContainerStyed>
    )
}

export default CategoryPreview;