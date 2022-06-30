import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  return (
    <div className="directory-item-container" key={category.id}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      />
      <div className="body">
        <h2>{category.title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
