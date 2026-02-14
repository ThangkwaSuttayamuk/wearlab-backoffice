import DashboardIcon from "./../../../assets/images/dashboardIcon.png";
import ProductIcon from "./../../../assets/images/productIcon.png";
import OrderIcon from "./../../../assets/images/orderIcon.png";
import UserIcon from "./../../../assets/images/userIcon.png";
import useNavbarStore from "../../../stores/navbar/useNavbarStore";
import { useNavigate } from "react-router-dom";

const useViewModel = () => {
  const { activeButton, setActiveButton, isShowNavbar } = useNavbarStore();
  const navigate = useNavigate();

  const listNavbar = [
    { id: 0, title: "Dashboard", icon: DashboardIcon },
    { id: 1, title: "Product Management", icon: ProductIcon },
    { id: 2, title: "Order Management", icon: OrderIcon },
    { id: 3, title: "Customer Management", icon: UserIcon },
    { id: 4, title: "Shop Management", icon: UserIcon },
  ];

  const onClick = (id: number) => {
    setActiveButton(id);
    switch (activeButton) {
      case 0:
        navigate("/");
        break;
      case 4:
        navigate("/shop-management");
        break;
      default:
        navigate("/");
    }
  };

  return { listNavbar, activeButton, onClick, isShowNavbar };
};

export default useViewModel;
