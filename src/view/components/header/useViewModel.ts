import useNavbarStore from "../../../stores/navbar/useNavbarStore";

const useViewModel = () => {
  const { isShowNavbar, setIsShowNavbar } = useNavbarStore();

  const onClickNavbarHeaderIcon = () => {
    setIsShowNavbar();
  };

  return { isShowNavbar, onClickNavbarHeaderIcon };
};

export default useViewModel;
