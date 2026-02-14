import DialogButton from "../../../button/dialogButton/dialogButton";
import "./deleteDialog.css";
import useViewModel from "./useViewModel";

const DeleteProductDialog: React.FC = () => {
  const { onConfirm,onCancel } = useViewModel();
  return (
    <div className="delete-product-dialog-background">
      <div className="delete-product-dialog-group-layout">
        <text className="delete-product-dialog-text-title">
          Are you sure to delete this product?
        </text>
        <div className="delete-product-dialog-group-button">
          <DialogButton title={"Confirm"} action={onConfirm} />
          <DialogButton title={"Close"} action={onCancel} />
        </div>
      </div>
    </div>
  );
};

export default DeleteProductDialog;
