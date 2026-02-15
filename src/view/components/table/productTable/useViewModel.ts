import { useCallback, useEffect, useMemo } from "react";
import { SellProductService } from "../../../../service/product/sellProductService";
import useDialogStore from "../../../../stores/dialog/useDialogStore";
import useFilterDialogStore from "../../../../stores/dialog/useFilterDialogStore";
import usePopUpStore from "../../../../stores/dialog/usePopUpStore";
import useNavbarStore from "../../../../stores/navbar/useNavbarStore";
import useProductStore from "../../../../stores/product/useProductStore";
import useSearchStore from "../../../../stores/search/useSearchStore";
import useTableStore from "../../../../stores/table/useTableStore";

const useViewModel = () => {
  const tableHead = [
    "action",
    "id",
    "name",
    "sku",
    "type",
    "price",
    "stock",
    "createDate",
  ];
  const { isShowNavbar } = useNavbarStore();
  const { input } = useSearchStore();
  const { allProduct, total, totalValue, getAllProduct, getProductWithFilter } =
    useProductStore();
  const { typeDialog, setTypeDialog } = useDialogStore();
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
  const { applyType } = useFilterDialogStore();
  const { setTitle, setMessage, setIsOpen } = usePopUpStore();

  const onShowFilter = useMemo(() => {
    if (typeDialog === "Filter Product") {
      return "filter";
    } else {
      return "";
    }
  }, [typeDialog]);

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
    if (applyType || input) {
      getProductWithFilter(applyType, input);
    } else {
      getAllProduct();
    }
  }, [applyType, input, getProductWithFilter, getAllProduct]);

  const onSellProduct = async (id: number, stock: number) => {
    if (stock <= 0) {
      return;
    }

    const service = new SellProductService();
    try {
      const result = await service.sellProduct({
        productID: id,
        quantity: 1,
      });
      if (result?.status === 200) {
        getAllProduct();
        setIsOpen(true);
        setTitle("Success");
        setMessage("Product sold successfully.");
      }
    } catch (err: any) {
      setIsOpen(true);
      setTitle("Error");
      setMessage(err.error);
    }
  };

  useEffect(() => {
    onGetAllProduct();
    const totalPages = Math.ceil(total / 15);
    setAllPage(totalPages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, applyType]);

  return {
    tableHead,
    allProduct,
    setTypeDialog,
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
    onSellProduct,
    onCheckPrevious,
    onCheckNext,
    onPrevious,
    onNext,
    total,
    isShowNavbar,
    onShowFilter,
    totalValue
  };
};

export default useViewModel;
