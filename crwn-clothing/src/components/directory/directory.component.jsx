import "./directory.styles.scss";

import DirectoryItem from "../directory-item/directory-item.components";

const Directory = ({ categories }) => (
  <div className="directory-container">
    {categories.map(({ id, title, imageUrl }) => (
      <DirectoryItem key={id} title={title} imageUrl={imageUrl} />
    ))}
  </div>
);

export default Directory;
