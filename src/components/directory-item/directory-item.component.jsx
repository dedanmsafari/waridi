import {
  DirectoryContainer,
  BackgroundImage,
  ItemBody,
  Title,
  Shop,
} from "./directory-item.styles.jsx";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();
  const onClickHandler = () => navigate(category.routeName);

  return (
    <DirectoryContainer key={category.id} onClick={onClickHandler}>
      <BackgroundImage ImageUrl={category.imageUrl} />
      <ItemBody>
        <Title>{category.title}</Title>
        <Shop>SHOP NOW</Shop>
      </ItemBody>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
