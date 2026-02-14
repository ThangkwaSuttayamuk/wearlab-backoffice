import { DeleteProductService } from "../../../../../service/product/deleteProductService";
import useDialogStore from "../../../../../stores/dialog/useDialogStore";
import useProductStore from "../../../../../stores/product/useProductStore";
import useSelectProductStore from "../../../../../stores/product/useSelectProductStore";
import useTableStore from "../../../../../stores/table/useTableStore";

const useViewModel = () => {
  const { setTypeDialog } = useDialogStore();
  const { startItem, endItem } = useTableStore();
  const { getAllProduct } = useProductStore();
  const { id } = useSelectProductStore();

  const onConfirm = () => {
    onDeleteProduct(id);
  };

  const onDeleteProduct = async (id: number) => {
    const service = new DeleteProductService();
    try {
      const result = await service.deleteProduct({ id: id });
      if (result?.status === 200) {
        setTypeDialog("");
        getAllProduct(endItem, startItem);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onCancel = () => {
    setTypeDialog("");
  };

  return { onConfirm, onCancel };
};

export default useViewModel;
