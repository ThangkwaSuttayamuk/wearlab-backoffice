import { useCallback, useEffect } from "react";
import useDialogStore from "../../../../../stores/dialog/useDialogStore";
import useFilterDialogStore from "../../../../../stores/dialog/useFilterDialogStore";
import useProductStore from "../../../../../stores/product/useProductStore";
import useStatusStore from "../../../../../stores/status/useStatusStore";
import useTableStore from "../../../../../stores/table/useTableStore";
import useTypeStore from "../../../../../stores/type/useTypeStore";
import useSearchStore from "../../../../../stores/search/useSearchStore";

const useViewModel = () => {
  const { setTypeDialog } = useDialogStore();
  const { allType, getAllType } = useTypeStore();
  const { allStatus, getAllStatus } = useStatusStore();
  const { startItem, setItemInit, setAllPage } = useTableStore();
  const { getProductWithFilter, total } = useProductStore();
  const { input } = useSearchStore();

  const {
    selectStatus,
    selectType,
    applyType,
    applyStatus,
    setSelectStatus,
    setSelectType,
    setApplyType,
    setApplyStatus,
    setSelectInit,
    setApplyInit,
  } = useFilterDialogStore();

  const onApplyFilter = () => {
    getProductWithFilter(15, startItem, selectStatus, selectType, input);
    const totalPages = Math.ceil(total / 15);
    setAllPage(totalPages);
  };

  const onApply = () => {
    setApplyType(selectType);
    setApplyStatus(selectStatus);
    setSelectInit();
    setTypeDialog("");
    setItemInit();
  };

  const onClear = () => {
    setSelectInit();
    setApplyInit();
    setItemInit();
    setTypeDialog("");
  };

  const onClickType = (type: string) => {
    if (selectType === type) {
      setSelectType("");
    } else {
      setSelectType(type);
    }
  };

  const onClickStatus = (status: string) => {
    if (selectStatus === status) {
      setSelectStatus("");
    } else {
      setSelectStatus(status);
    }
  };

  const onOpenDialog = useCallback(() => {
    getAllType();
    getAllStatus();
    setSelectStatus(applyStatus);
    setSelectType(applyType);
  }, [applyStatus, applyType, getAllStatus, getAllType, setSelectStatus, setSelectType]                                                                       );

  useEffect(() => {
    onOpenDialog();
  }, [onOpenDialog]);

  return {
    allType,
    allStatus,
    onApplyFilter,
    onApply,
    onClear,
    applyType,
    applyStatus,
    selectStatus,
    selectType,
    setSelectStatus,
    setSelectType,
    onClickType,
    onClickStatus,
  };
};

export default useViewModel;
