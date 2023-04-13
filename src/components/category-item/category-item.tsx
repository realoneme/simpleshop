import {
  BackgroundImage,
  CategoryBodyContainer,
  CategoryContainer,
} from './category-item.style';

import { useNavigate, NavigateFunction } from 'react-router-dom';

interface Icate {
  title: string;
  imageUrl: string;
}
interface IcateProps {
  cate: Icate;
}

type naviHandler = () => void;

const CategoryItem = ({ cate }: IcateProps) => {
  const { title, imageUrl } = cate;
  const navi = useNavigate();
  const naviHandler: naviHandler = () => navi(`shop/${title}`);
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
