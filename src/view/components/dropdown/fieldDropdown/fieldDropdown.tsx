import { OwnerEntity } from "../../../../entity/owner/ownerEntity";
import ArrowDown from "./../../../../assets/images/arrowDown.png";
import "./fieldDropdown.css";

type FieldDropdownProps = {
  type: string;
  title: string;
  placeHolder: string;
  listDropdown?: string[];
  listOwner?: OwnerEntity[];
  action: () => void;
  isOpen: boolean;
  setData?: (data: string) => void;
  setOwner?: (data: OwnerEntity) => void;
  selectdData: string;
  fullField: boolean;
  checkRequire?: boolean;
};

const FieldDropdown: React.FC<FieldDropdownProps> = ({
  type,
  title,
  placeHolder,
  listDropdown,
  listOwner,
  action,
  isOpen,
  setData,
  setOwner,
  selectdData,
  fullField,
  checkRequire,
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
              {type === "owner"
                ? listOwner?.map((item) => (
                    <div
                      className="fieldDropdown-dropdown-list"
                      onClick={() => {
                        setOwner?.(item);
                        action();
                      }}
                    >
                      <span className="product-dialog-text">{item.name}</span>
                    </div>
                  ))
                : listDropdown?.map((item) => (
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
    </div>
  );
};

export default FieldDropdown;
