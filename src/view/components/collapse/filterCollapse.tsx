import "./filterCollapse.css";
import useViewModel from "./useViewModel";

const FilterCollapse: React.FC = () => {
  const {
    allType,
    selectType,
    onClickType,
  } = useViewModel();

  return (
    <div className="filter-collpase-layout">
      <text className="filter-collpase-text head">Filters</text>
      <text className="filter-collpase-text">type</text>
      <div className="filter-collpase-row-layout">
        {allType.map((item) => {
          return (
            <div className="filter-collpase-checkbox-wrapper">
              <input
                type="checkbox"
                className="filter-collpase-checkbox"
                checked={selectType === item.name ? true : false}
                onChange={() => {
                  onClickType(item.name);
                }}
              />
              <text className="filter-collpase-text">{item.name}</text>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterCollapse;
