import { useCallback, useEffect } from "react";
import useDialogStore from "../../../../stores/dialog/useDialogStore";
import useProductStore from "../../../../stores/product/useProductStore";
import useSelectProductStore from "../../../../stores/product/useSelectProductStore";
import useTableStore from "../../../../stores/table/useTableStore";
import useFilterDialogStore from "../../../../stores/dialog/useFilterDialogStore";
import useSearchStore from "../../../../stores/search/useSearchStore";
import { DeleteProductService } from "../../../../service/product/deleteProductService";

const useViewModel = () => {
  const tableHead = [
    "action",
    "id",
    "name",
    "type",
    "status",
    "createDate",
    "updateDate",
  ];

  const tableHead1= [
    "action",
    "id",
    "name",
    "type",
    "status",
    "typeOfPartner",
    "createDate",
    "updateDate",
  ]
  const { input, setInput, getInput } = useSearchStore();
  const { allProduct, total, getAllProduct, getProductWithFilter } =
    useProductStore();
  const { setTypeDialog } = useDialogStore();
  const { setId, getProductById } = useSelectProductStore();
  const {
    page,
    allPage,
    startItem,
    endItem,
    allItem,
    setPage,
    setAllPage,
    setStartItem,
    setEndItem,
    setAllItem,
  } = useTableStore();
  const { applyStatus, applyType } = useFilterDialogStore();

  const formatDate = (original: string) => {
    const date = new Date(original);

    const formatted = date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    return formatted;
  };

  const onCheckPrevious = () => {
    if (startItem !== 0) {
      return true;
    } else {
      return false;
    }
  };

  const onCheckNext = () => {
    if (startItem + 15 < total) {
      return true;
    } else {
      return false;
    }
  };

  const onPrevious = () => {
    if (onCheckPrevious()) {
      setStartItem(startItem - 15);
      setPage(page - 1);
      onGetAllProduct();
    }
  };

  const onNext = () => {
    if (onCheckNext()) {
      setStartItem(startItem + 15);
      // setEndItem(endItem + 15);
      setPage(page + 1);
      onGetAllProduct();
    }
  };

  const onGetAllProduct = useCallback(() => {
    const limit = 15;
    const offset = startItem;

    if (applyStatus || applyType || input) {
      getProductWithFilter(limit, offset, applyStatus, applyType, input);
    } else {
      getAllProduct(limit, offset);
    }
  }, [
    startItem,
    applyStatus,
    applyType,
    input,
    getProductWithFilter,
    getAllProduct,
  ]);

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

  useEffect(() => {
    onGetAllProduct();
    const totalPages = Math.ceil(total / 15);
    setAllPage(totalPages);
  }, [onGetAllProduct, setAllPage, total]);

  return {
    tableHead,
    allProduct,
    setTypeDialog,
    setId,
    getProductById,
    formatDate,
    page,
    allPage,
    startItem,
    endItem,
    allItem,
    setPage,
    setAllPage,
    setStartItem,
    setEndItem,
    setAllItem,
    onDeleteProduct,
    onCheckPrevious,
    onCheckNext,
    onPrevious,
    onNext,
    total,
    tableHead1
  };
};

export default useViewModel;
