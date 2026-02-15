import useFilterDialogStore from "../../../../stores/dialog/useFilterDialogStore";
import useDialogStore from "../../../../stores/dialog/useDialogStore";

const useViewModel = () => {
  const { typeDialog, setTypeDialog } = useDialogStore();
  const {
    selectType,
    setSelectType,
  } = useFilterDialogStore();

  const onClick = () => {
    if (typeDialog !== "Filter Product") {
      setTypeDialog("Filter Product");
    } else {
      setTypeDialog("");
    }
  };

  return {
    selectType,
    setSelectType,
    typeDialog,
    onClick
  };
};

export default useViewModel;
