import ProductDialog from "../../dialog/product/createProductDialog/productDialog";
import Header from "../../header/header";
import Loading from "../../loading/loading";
import Navbar from "../../navbar/navbar";
import PrimaryPopUp from "../../pop-up/primaryPopUp";
import "./mainLayout.css";
import useViewModel from "./useViewModel";

type MainLayoutProps = {
  children: any;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { typeDialog, isOpen, isLoading } = useViewModel();

  return (
    <div className="mainLayout-layout">
      <Header />
      <div className="mainLayout-body-layout">
        <Navbar />
        {children}
      </div>
      {typeDialog === "New Product" && <ProductDialog />}
      {isOpen&& <PrimaryPopUp />}
      {isLoading && <Loading />}
    </div>
  );
};

export default MainLayout;
