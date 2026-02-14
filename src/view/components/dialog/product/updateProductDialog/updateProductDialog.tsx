import DialogButton from "../../../button/dialogButton/dialogButton";
import FieldDropdown from "../../../dropdown/fieldDropdown/fieldDropdown";
import Field from "../../../field/field";
import Cross from "../../../../../assets/images/whiteCross.png";
import Image from "../../../../../assets/images/image.png";
import useViewModel from "./useViewModel";

const UpdateProductDialog: React.FC = () => {
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
    setProductImage,
    setOpenDropdown,
    onSetProductType,
    openProductType,
    openProductOwner,
    openProductStatus,
    setOwner,
    allOwner,
    onCancel,
    onSave,
    fullField,
    selectProductId,
    selectProductName,
    selectProductDescription,
    selectProductDefect,
    selectProductType,
    selectProductWaist,
    selectProductLength,
    selectProductChest,
    selectProductStatus,
    selectProductPrice,
    selectProductSalePrice,
    selectProductImage,
    selectProductOwnerName,
    extractFilePath,
    fileURLs,
    handleDelete,
    handleFileChange,
  } = useViewModel();

  return (
    <div className="product-dialog-background">
      <div className="product-dialog-group-layout">
        <text className="product-dialog-text head">Edit Product Detail</text>
        <div className="product-dialog-group-form-layout">
          <div className="product-dialog-form-group">
            <Field
              title={"Product ID."}
              placeHolder={selectProductId?.toString() ?? "Product ID."}
              type={"id"}
              data={productId === 0 ? "" : productId}
              action={setProductId}
              fullField={fullField}
              checkRequire={false}
            />
            <Field
              title={"Product Name"}
              placeHolder={selectProductName?.toString() ?? "Product Name"}
              type={"name"}
              data={productName === "" ? "" : productName}
              action={setProductName}
              fullField={fullField}
              checkRequire={false}
            />
          </div>
          <div className="product-dialog-form-group">
            <Field
              title={"Product Description"}
              placeHolder={
                selectProductDescription?.toString() ?? "Product Description"
              }
              type={"description"}
              data={productDescription === "" ? "" : productDescription}
              action={setProductDescription}
              fullField={fullField}
              checkRequire={false}
            />
          </div>
          <div className="product-dialog-form-group">
            <Field
              title={"Product Defect"}
              placeHolder={selectProductDefect?.toString() ?? "Product Defect"}
              type={"defect"}
              data={productDefect === "" ? "" : productDefect}
              action={setProductDefect}
              fullField={fullField}
              checkRequire={false}
            />
          </div>
          <div className="product-dialog-form-group">
            <FieldDropdown
              type="type"
              title={"Product Type"}
              placeHolder={
                selectProductType?.toString() ?? "Select Product Type"
              }
              listDropdown={["Top", "Bottom", "Accessory"]}
              action={() => {
                setOpenDropdown("type");
              }}
              setData={onSetProductType}
              isOpen={openProductType}
              selectdData={productType}
              fullField={fullField}
              checkRequire={false}
            />
            {(productType === "Bottom" ||
              (selectProductType === "Bottom" &&
                productType !== "Top" &&
                productType !== "Accessory")) && (
              <Field
                title={"Waist"}
                placeHolder={
                  selectProductWaist === 0
                    ? ""
                    : selectProductWaist?.toString() ?? "Waist (inch)"
                }
                type={"waist"}
                data={productWaist === 0 ? "" : productWaist}
                action={setProductWaist}
                fullField={fullField}
                checkRequire
              />
            )}
            {(productType === "Top" ||
              productType === "Bottom" ||
              (selectProductType === "Top" &&
                productType !== "Bottom" &&
                productType !== "Accessory") ||
              (selectProductType === "Bottom" &&
                productType !== "Top" &&
                productType !== "Accessory")) && (
              <Field
                title={"Length"}
                placeHolder={
                  selectProductLength === 0
                    ? ""
                    : selectProductLength?.toString() ?? "Length (inch)"
                }
                type={"length"}
                data={productLength === 0 ? "" : productLength}
                action={setProductLength}
                fullField={fullField}
                checkRequire
              />
            )}
            {(productType === "Top" ||
              (selectProductType === "Top" &&
                productType !== "Bottom" &&
                productType !== "Accessory")) && (
              <Field
                title={"Chest"}
                placeHolder={selectProductChest?.toString() ?? "Checst (inch)"}
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
              placeHolder={
                selectProductOwnerName?.toString() ?? "Select Product Owner"
              }
              listOwner={allOwner}
              action={() => {
                setOpenDropdown("owner");
              }}
              isOpen={openProductOwner}
              setOwner={setOwner}
              selectdData={productOwnerName}
              fullField={fullField}
              checkRequire={false}
            />
            <FieldDropdown
              type="status"
              title={"Product Status"}
              placeHolder={
                selectProductStatus?.toString() ?? "Select Product Status"
              }
              listDropdown={["Available", "Out Of Stock"]}
              action={() => {
                setOpenDropdown("status");
              }}
              isOpen={openProductStatus}
              setData={setProductStatus}
              selectdData={productStatus}
              fullField={fullField}
              checkRequire={false}
            />
          </div>
          <div className="product-dialog-form-group">
            <Field
              title={"Price"}
              placeHolder={selectProductPrice?.toString() ?? "Price (bath)"}
              type={"price"}
              data={productPrice === 0 ? "" : productPrice}
              action={setProductPrice}
              fullField={fullField}
            />
            <Field
              title={"Sale Price"}
              placeHolder={
                selectProductSalePrice?.toString() ?? "Sale Price (bath)"
              }
              type={"salePrice"}
              data={productSalePrice === 0 ? "" : productSalePrice}
              action={setProductSalePrice}
              fullField={fullField}
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
          {fileURLs.length > 0 ? (
            <div className="image-container">
              {fileURLs.map((url, index) => {
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
                fullField || productImage.length !== 0 ? "" : "require"
              }`}
            >
              <img src={Image} alt="imagebg" className="image-background" />
              <text className="image-text background">Upload Image</text>
            </div>
          )}
        </div>
        <div className="product-dialog-form-group bottom">
          <DialogButton title={"Cancel"} action={onCancel} />
          <DialogButton title={"Save"} action={onSave} />
        </div>
      </div>
    </div>
  );
};

export default UpdateProductDialog;
