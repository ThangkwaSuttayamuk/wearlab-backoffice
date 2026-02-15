import usePopUpStore from "../../../stores/dialog/usePopUpStore";

const useViewModel = () => {
  const { setInitialState, title, message } = usePopUpStore();

  return {
    setInitialState,
    title,
    message,
  };
};

export default useViewModel;
