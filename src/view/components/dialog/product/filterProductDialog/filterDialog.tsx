import DialogButton from "../../../button/dialogButton/dialogButton";
import "./filterDialog.css";
import "./useViewModel";
import useViewModel from "./useViewModel";

const FilterDialog: React.FC = () => {
  const {
    allType,
    allStatus,
    applyType,
    applyStatus,
    selectStatus,
    selectType,
    setSelectStatus,
    setSelectType,
    onClickType,
    onClickStatus,
    onApply,
    onClear
  } = useViewModel();

  return (
    <div className="filter-dialog-layout">
      <text className="filter-dialog-text head">Filters</text>
      <text className="filter-dialog-text">type</text>
      <div className="filter-dialog-row-layout">
        {allType.map((item) => {
          return (
            <div className="filter-dialog-checkbox-wrapper">
              <input
                type="checkbox"
                className="filter-dialog-checkbox"
                checked={selectType === item.name ? true : false}
                onChange={() => {
                  onClickType(item.name);
                }}
              />
              <text className="filter-dialog-text">{item.name}</text>
            </div>
          );
        })}
      </div>
      <text className="filter-dialog-text">status</text>
      <div className="filter-dialog-row-layout">
        {allStatus.map((item) => {
          return (
            <div className="filter-dialog-checkbox-wrapper">
              <input
                type="checkbox"
                className="filter-dialog-checkbox"
                checked={selectStatus === item.name ? true : false}
                onChange={() => {
                  onClickStatus(item.name);
                }}
              />
              <text className="filter-dialog-text">{item.name}</text>
            </div>
          );
        })}
      </div>
      <div className="filter-dialog-button-group">
        <DialogButton title={"Apply"} action={onApply} />
        <DialogButton title={"Clear"} action={onClear} />
      </div>
    </div>
  );
};

export default FilterDialog;
