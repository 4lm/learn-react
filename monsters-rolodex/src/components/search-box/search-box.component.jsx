import { Component } from "react";
import "./search-box.styles.css";

const SearchBox = ({ className, onChangeHandler, placeholder }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export class SearchBoxByClass extends Component {
  render() {
    const { className, onChangeHandler, placeholder } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
