import { useEffect } from "react";
import useDialogStore from "../../../stores/dialog/useDialogStore";
import useFilterDialogStore from "../../../stores/dialog/useFilterDialogStore";
import useTableStore from "../../../stores/table/useTableStore";
import useTypeStore from "../../../stores/type/useTypeStore";

const useViewModel = () => {
  const { setTypeDialog } = useDialogStore();
  const { allType, getAllType } = useTypeStore();
  const { setItemInit } = useTableStore();
  
  const {
    selectType,
    applyType,
    setSelectType,
    setApplyType,
    setSelectInit,
    setApplyInit,
  } = useFilterDialogStore();

  const onApply = () => {
    setApplyType(selectType);
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
      setApplyType("");
      setItemInit();
    } else {
      setSelectType(type);
      setApplyType(type);
    }
  };

  const onOpenDialog = () => {
    getAllType();
    setSelectType(applyType);
  };

  useEffect(() => {
    onOpenDialog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    allType,
    onApply,
    onClear,
    applyType,
    selectType,
    setSelectType,
    onClickType,
  };
};

export default useViewModel;
