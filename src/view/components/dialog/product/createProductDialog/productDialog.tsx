import DialogButton from "../../../button/dialogButton/dialogButton";
import FieldDropdown from "../../../dropdown/fieldDropdown/fieldDropdown";
import Field from "../../../field/field";
import "./productDialog.css";
import useViewModel from "./useViewModel";

const ProductDialog: React.FC = () => {
  const {
    productName,
    smeCode,
    productType,
    productPrice,
    stock,
    setProductName,
    setSmeCode,
    setStock,
    setProductType,
    setProductPrice,
    setOpenDropdown,
    openProductType,
    onCancel,
    onCreate,
    fullField,
    errors,
    allTypeWithoutAll
  } = useViewModel();

  return (
    <div className="product-dialog-background">
      <div className="product-dialog-group-layout">
        <text className="product-dialog-text head">New Product Detail</text>
        <div className="product-dialog-group-form-layout">
          <div className="product-dialog-form-group">
            <Field
              title={"Product Name"}
              placeHolder={"Product Name"}
              type={"name"}
              data={productName === "" ? "" : productName}
              action={setProductName}
              fullField={fullField}
              checkRequire
              errors={errors.productName}
            />
          </div>
          <div className="product-dialog-form-group">
            <Field
              title={"SME Code"}
              placeHolder={"XXXXXXXX"}
              type={"sme"}
              data={smeCode === "" ? "" : smeCode}
              action={setSmeCode}
              fullField={fullField}
              checkRequire
              errors={errors.smeCode}
            />
          </div>
          <div className="product-dialog-form-group">
            <FieldDropdown
              type="type"
              title={"Product Type"}
              placeHolder={"Select Product Type"}
              listDropdown={allTypeWithoutAll.map((item) => item.name) as string[]}
              action={() => {
                setOpenDropdown();
              }}
              setData={setProductType}
              isOpen={openProductType}
              selectdData={productType}
              fullField={fullField}
              checkRequire
              errors={errors.productType}
            />
          </div>
          <div className="product-dialog-form-group">
            <Field
              title={"Price"}
              placeHolder={"Price (bath)"}
              type={"price"}
              data={productPrice === 0 ? "" : productPrice}
              action={setProductPrice}
              fullField={fullField}
              checkRequire
              errors={errors.productPrice}
            />
            <Field
              title={"Stock"}
              placeHolder={"0"}
              type={"stock"}
              data={stock === 0 ? "" : stock}
              action={setStock}
              fullField={fullField}
              checkRequire
              errors={errors.stock}
            />
          </div>
        </div>
        <div className="product-dialog-form-group bottom">
          <DialogButton title={"Cancel"} action={onCancel} />
          <DialogButton title={"Create"} action={onCreate} />
        </div>
      </div>
    </div>
  );
};

export default ProductDialog;
