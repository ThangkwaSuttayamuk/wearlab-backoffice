import Filter from "./../../../../assets/images/filter.png";
import "./filterButton.css";
import useViewModel from "./useViewModel";

const FilterButton: React.FC = () => {
  const { onClick } = useViewModel();

  return (
    <div className="filterButton-layout">
      <img
        src={Filter}
        alt="filter"
        className="filterButton-icon-layout"
        onClick={() => {
          onClick();
        }}
      />
    </div>
  );
};

export default FilterButton;
