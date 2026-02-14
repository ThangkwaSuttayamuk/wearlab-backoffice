import Cross from "../../../../../assets/images/whiteCross.png";
import Image from "../../../../../assets/images/image.png";
import DialogButton from "../../../button/dialogButton/dialogButton";
import FieldDropdown from "../../../dropdown/fieldDropdown/fieldDropdown";
import Field from "../../../field/field";
import "./productDialog.css";
import useViewModel from "./useViewModel";

const ProductDialog: React.FC = () => {
  const {
    productId,
    productName,
    productDescription,
    productDefect,
    productType,
    productWaist,
    productLength,
    productChest,
    productStatus,
    productPrice,
    productSalePrice,
    productImage,
    productOwnerName,
    setProductId,
    setProductName,
    setProductDescription,
    setProductDefect,
    setProductWaist,
    setProductLength,
    setProductChest,
    setProductStatus,
    setProductPrice,
    setProductSalePrice,
    setOpenDropdown,
    onSetProductType,
    openProductType,
    openProductOwner,
    openProductStatus,
    setOwner,
    allOwner,
    onCancel,
    onCreate,
    fullField,
    fileURLs,
    handleFileChange,
    handleDelete,
    extractFilePath,
  } = useViewModel();

  return (
    <div className="product-dialog-background">
      <div className="product-dialog-group-layout">
        <text className="product-dialog-text head">New Product Detail</text>
        <div className="product-dialog-group-form-layout">
          <div className="product-dialog-form-group">
            <Field
              title={"Product ID."}
              placeHolder={"Product ID."}
              type={"id"}
              data={productId === 0 ? "" : productId}
              action={setProductId}
              fullField={fullField}
              checkRequire
            />
            <Field
              title={"Product Name"}
              placeHolder={"Product Name"}
              type={"name"}
              data={productName === "" ? "" : productName}
              action={setProductName}
              fullField={fullField}
              checkRequire
            />
          </div>
          <div className="product-dialog-form-group">
            <Field
              title={"Product Description"}
              placeHolder={"Product Description"}
              type={"description"}
              data={productDescription === "" ? "" : productDescription}
              action={setProductDescription}
              fullField={fullField}
              checkRequire
            />
          </div>
          <div className="product-dialog-form-group">
            <Field
              title={"Product Defect"}
              placeHolder={"Product Defect"}
              type={"defect"}
              data={productDefect === "" ? "" : productDefect}
              action={setProductDefect}
              fullField={fullField}
              checkRequire
            />
          </div>
          <div className="product-dialog-form-group">
            <FieldDropdown
              type="type"
              title={"Product Type"}
              placeHolder={"Select Product Type"}
              listDropdown={["Top", "Bottom", "Accessory"]}
              action={() => {
                setOpenDropdown("type");
              }}
              setData={onSetProductType}
              isOpen={openProductType}
              selectdData={productType}
              fullField={fullField}
              checkRequire
            />
            {productType === "Bottom" && (
              <Field
                title={"Waist"}
                placeHolder={"Waist (inch)"}
                type={"waist"}
                data={productWaist === 0 ? "" : productWaist}
                action={setProductWaist}
                fullField={fullField}
                checkRequire
              />
            )}
            {(productType === "Bottom" || productType === "Top") && (
              <Field
                title={"Length"}
                placeHolder={"Length (inch)"}
                type={"length"}
                data={productLength === 0 ? "" : productLength}
                action={setProductLength}
                fullField={fullField}
                checkRequire
              />
            )}
            {productType === "Top" && (
              <Field
                title={"Chest"}
                placeHolder={"Checst (inch)"}
                type={"chest"}
                data={productChest === 0 ? "" : productChest}
                action={setProductChest}
                fullField={fullField}
                checkRequire
              />
            )}
          </div>
          <div className="product-dialog-form-group">
            <FieldDropdown
              type="owner"
              title={"Product Owner"}
              placeHolder={"Select Product Owner"}
              listOwner={allOwner}
              action={() => {
                setOpenDropdown("owner");
              }}
              isOpen={openProductOwner}
              setOwner={setOwner}
              selectdData={productOwnerName}
              fullField={fullField}
              checkRequire
            />
            <FieldDropdown
              type="status"
              title={"Product Status"}
              placeHolder={"Select Product Status"}
              listDropdown={["Available", "Out Of Stock"]}
              action={() => {
                setOpenDropdown("status");
              }}
              isOpen={openProductStatus}
              setData={setProductStatus}
              selectdData={productStatus}
              fullField={fullField}
              checkRequire
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
            />
            <Field
              title={"Sale Price"}
              placeHolder={"Sale Price (bath)"}
              type={"salePrice"}
              data={productSalePrice === 0 ? "" : productSalePrice}
              action={setProductSalePrice}
              fullField={fullField}
              checkRequire
            />
          </div>
          <div className="product-dialog-form-group image">
            <text className="image-text">Upload Image :</text>
            <input
              type="file"
              multiple
              onChange={(e) => {
                handleFileChange(e);
              }}
            />
          </div>
          {productImage.length > 0 ? (
            <div className="image-container">
              {productImage.map((url, index) => {
                const filePath = extractFilePath(url);
                return (
                  <div className="image-wrapper">
                    <img
                      className="image-item"
                      src={url}
                      alt="urlimage"
                      width={300}
                      height={300}
                    />
                    <div
                      className="image-delete"
                      onClick={() => handleDelete(filePath)}
                    >
                      <img src={Cross} alt="cross" width={20} height={20} />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              className={`image-container-empty ${
                fullField || fileURLs.length !== 0 ? "" : "require"
              }`}
            >
              <img src={Image} alt="imagebg" className="image-background" />
              <text className="image-text background">Upload Image</text>
            </div>
          )}
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
