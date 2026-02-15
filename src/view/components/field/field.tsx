import "./field.css";
import { useViewModel } from "./useViewModel";

type FieldProps = {
  title: string;
  placeHolder: string;
  type: string;
  data: any;
  action: (value: any) => void;
  fullField: boolean;
  checkRequire?: boolean;
  errors?: string;
};

const Field: React.FC<FieldProps> = ({
  title,
  type,
  data,
  action,
  placeHolder,
  fullField,
  checkRequire,
  errors,
}) => {
  const { handleAlphanumericInput, handleKeyPress } = useViewModel();

  return (
    <div className="field-group-layout">
      <text className="field-text">{title}</text>
      <input
        type={
          type === "price" || type === "stock" ? "number" : "text"}
        min="0"
        step={type === "stock" ? "1" : type === "price" ? "0.01" : "any"}
        value={data === 0 ? "" : data}
        onChange={(e) =>
          action(
            type === "price" || type === "stock"
              ? Number(e.target.value)
              : type === "sme"
                ? handleAlphanumericInput(e)
                : e.target.value,
          )
        }
        onKeyPress={type === "sme" ? handleKeyPress : undefined}
        onInput={(e) => {
          const target = e.target as HTMLInputElement;
          if (type === "stock") {
            target.value = target.value.replace(/[^0-9]/g, "");
          } else if (type === "price") {
            // Allow only numbers and one decimal point with max 2 decimal places
            const value = target.value;
            const parts = value.split(".");
            if (parts.length > 2) {
              // More than one decimal point
              target.value = parts[0] + "." + parts.slice(1).join("");
            } else if (parts[1] && parts[1].length > 2) {
              // More than 2 decimal places
              target.value = parts[0] + "." + parts[1].slice(0, 2);
            }
          }
        }}
        className={`field-form-layout ${
          fullField || data !== "" ? "" : checkRequire ? "require" : ""
        }`}
        placeholder={placeHolder}
        disabled={type === "id" ? true : false}
      />
      {errors && <text className="field-error-text">{errors}</text>}
    </div>
  );
};

export default Field;
