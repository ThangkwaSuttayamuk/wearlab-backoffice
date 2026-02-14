import { useEffect } from "react";
import useTypeStore from "../../../../stores/type/useTypeStore";
import useStatusStore from "../../../../stores/status/useStatusStore";
import useProductStore from "../../../../stores/product/useProductStore";
import useTableStore from "../../../../stores/table/useTableStore";
import useFilterDialogStore from "../../../../stores/dialog/useFilterDialogStore";
import useDialogStore from "../../../../stores/dialog/useDialogStore";

const useViewModel = () => {
  const { typeDialog, setTypeDialog } = useDialogStore();
  const {
    selectStatus,
    selectType,
    setSelectStatus,
    setSelectType,
    setSelectInit,
  } = useFilterDialogStore();

  const onClick = () => {
    if (typeDialog !== "Filter Product") {
      setTypeDialog("Filter Product");
    } else {
      setTypeDialog("");
    }
  };

  return {
    selectStatus,
    selectType,
    setSelectStatus,
    setSelectType,
    typeDialog,
    onClick
  };
};

export default useViewModel;
