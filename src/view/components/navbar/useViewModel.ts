import ProductIcon from "./../../../assets/images/productIcon.png";
import useNavbarStore from "../../../stores/navbar/useNavbarStore";
import { useNavigate } from "react-router-dom";

const useViewModel = () => {
  const { activeButton, setActiveButton, isShowNavbar } = useNavbarStore();
  const navigate = useNavigate();

  const listNavbar = [
    { id: 1, title: "Product Management", icon: ProductIcon },
  ];

  const onClick = (id: number) => {
    setActiveButton(id);
    switch (activeButton) {
      case 1:
        navigate("/");
        break;
      default:
        navigate("/");
    }
  };

  return { listNavbar, activeButton, onClick, isShowNavbar };
};

export default useViewModel;
