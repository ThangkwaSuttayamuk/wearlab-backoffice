import useDialogStore from "../../../../stores/dialog/useDialogStore";

const useViewModel = () => {
  const { typeDialog } = useDialogStore();

  return { typeDialog };
};

export default useViewModel;
