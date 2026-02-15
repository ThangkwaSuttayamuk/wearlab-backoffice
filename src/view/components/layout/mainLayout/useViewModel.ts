import useDialogStore from "../../../../stores/dialog/useDialogStore";
import usePopUpStore from "../../../../stores/dialog/usePopUpStore";
import useLoadingStore from "../../../../stores/loading/useLoadingStore";

const useViewModel = () => {
  const { typeDialog } = useDialogStore();
  const { isOpen} = usePopUpStore();
  const { isLoading } = useLoadingStore();

  return { typeDialog, isOpen, isLoading };
};

export default useViewModel;
