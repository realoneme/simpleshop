import {
  BackgroundImage,
  CategoryBodyContainer,
  CategoryContainer,
} from './category-item.style';

import { useNavigate } from 'react-router-dom';

const CategoryItem = ({ cate }) => {
  const { title, imageUrl } = cate;
  const navi = useNavigate();
  const naviHandler = () => navi(`shop/${title}`);
  return (
    <CategoryContainer onClick={naviHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>shop now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;
