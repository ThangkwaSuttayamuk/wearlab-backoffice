import FilterDialog from "../../dialog/product/filterProductDialog/filterDialog";
import Filter from "./../../../../assets/images/filter.png";
import "./filterButton.css";
import useViewModel from "./useViewModel";

const FilterButton: React.FC = () => {
  const { typeDialog, onClick } = useViewModel();

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
      {typeDialog === "Filter Product" && <FilterDialog />}
    </div>
  );
};

export default FilterButton;
