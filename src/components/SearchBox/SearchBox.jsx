import "./SearchBox.module.css";

const SearchBox = ({ filter, onChange }) => (
  <input
    className="search-box"
    type="text"
    placeholder="Search contacts:"
    value={filter}
    onChange={onChange}
  />
);

export default SearchBox;
