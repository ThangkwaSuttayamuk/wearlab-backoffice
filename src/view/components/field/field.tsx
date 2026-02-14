import "./field.css";

type FieldProps = {
  title: string;
  placeHolder: string;
  type: string;
  data: any;
  action: (value: any) => void;
  fullField: boolean;
  checkRequire?: boolean;
};

const Field: React.FC<FieldProps> = ({
  title,
  type,
  data,
  action,
  placeHolder,
  fullField,
  checkRequire,
}) => {
  return (
    <div className="field-group-layout">
      <text className="field-text">{title}</text>
      {type === "description" || type === "defect" ? (
        <textarea
          value={data === 0 ? "" : data}
          className={`field-form-layout ${type} ${
            fullField || data !== "" ? "" : checkRequire ? "require" : ""
          }`}
          placeholder={placeHolder}
          onChange={(e) => action(e.target.value)}
        />
      ) : (
        <input
          type={
            type === "id" ||
            type === "waist" ||
            type === "length" ||
            type === "chest" ||
            type === "price" ||
            type === "salePrice"
              ? "number"
              : "text"
          }
          min="0"
          value={data === 0 ? "" : data}
          onChange={(e) =>
            action(
              type === "id" ||
                type === "waist" ||
                type === "length" ||
                type === "chest" ||
                type === "price" ||
                type === "salePrice"
                ? Number(e.target.value)
                : e.target.value
            )
          }
          className={`field-form-layout ${type} ${
            fullField || data !== "" ? "" : checkRequire ? "require" : ""
          }`}
          placeholder={placeHolder}
          disabled={type === "id" ? true : false}
        />
      )}
    </div>
  );
};

export default Field;
