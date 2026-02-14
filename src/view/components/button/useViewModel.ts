import useDialogStore from "../../../stores/dialog/useDialogStore";

const useViewModel = () => {
  const { setTypeDialog } = useDialogStore();

  const setDialog = (typeDialog: string) => {
    setTypeDialog(typeDialog);
  };

  return { setDialog };
};

export default useViewModel;
