import { CategoryContainerStyled, BackgroundImage, Body } from './category-item.styles';
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({ category }) => {

    const {title, imageUrl, route} = category;

    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route);
    return (
        <CategoryContainerStyled onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </Body>
        </CategoryContainerStyled>
    );
}

export default CategoryItem;