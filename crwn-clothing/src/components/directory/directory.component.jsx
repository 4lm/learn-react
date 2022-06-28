import "./directory.styles.scss";

import CategoryItem from "../category-item/category-item.components";

const Directory = ({ categories }) => (
  <div className="directory-container">
    {categories.map(({ id, title, imageUrl }) => (
      <CategoryItem key={id} title={title} imageUrl={imageUrl} />
    ))}
  </div>
);

export default Directory;
