import ArrowDown from "./../../../../assets/images/arrowDown.png";
import "./fieldDropdown.css";

type FieldDropdownProps = {
  type: string;
  title: string;
  placeHolder: string;
  listDropdown: string[];
  action: () => void;
  isOpen: boolean;
  setData?: (data: string) => void;
  selectdData: string;
  fullField: boolean;
  checkRequire?: boolean;
  errors?: string;
};

const FieldDropdown: React.FC<FieldDropdownProps> = ({
  type,
  title,
  placeHolder,
  listDropdown,
  action,
  isOpen,
  setData,
  selectdData,
  fullField,
  checkRequire,
  errors,
}) => {
  return (
    <div className="fieldDropdown-group-layout">
      <text className="fieldDropdown-text">{title}</text>
      <div className="fieldDropdown-group-wrapper ">
        <img
          src={ArrowDown}
          alt="arrowDown"
          className="fieldDropdown-icon"
          onClick={() => {
            action();
          }}
        />
        <div
          className={`fieldDropdown-layout ${
            fullField || selectdData !== "" ? "" : checkRequire ? "require" : ""
          }`}
        >
          <text
            className={`fieldDropdown-form-text ${
              selectdData !== "" ? "data" : ""
            }`}
          >
            {selectdData !== "" ? selectdData : placeHolder}
          </text>
          {isOpen && (
            <div className={`fieldDropdown-dropdown ${type}`}>
              {listDropdown?.map((item) => (
                <div
                  className="fieldDropdown-dropdown-list"
                  onClick={() => {
                    setData?.(item);
                    action();
                  }}
                >
                  <span className="product-dialog-text">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {errors && <text className="field-error-text">{errors}</text>}
    </div>
  );
};

export default FieldDropdown;
