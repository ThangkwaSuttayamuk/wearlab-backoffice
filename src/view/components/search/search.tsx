import "./search.css";
import searchIcon from "./../../../assets/images/search.png";
import useViewModel from "./useViewModel";

type SearchProps = {
  placeholder: string;
};

const Search: React.FC<SearchProps> = ({ placeholder }) => {
  const { input, setNewInput, onEnter, onClickSearch } = useViewModel();
  return (
    <div className="search-wrapper">
      <img
        src={searchIcon}
        alt="search"
        className="search-icon"
        onClick={onClickSearch}
      />
      <input
        value={input}
        onChange={(e) => setNewInput(e.target.value)}
        onKeyDown={onEnter}
        className="search-layout"
        placeholder={placeholder ?? "Search"}
      />
    </div>
  );
};

export default Search;
