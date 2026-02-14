import ProductDialog from "../../dialog/product/createProductDialog/productDialog";
import DeleteProductDialog from "../../dialog/product/deleteProductDialog/deleteDialog";
import UpdateProductDialog from "../../dialog/product/updateProductDialog/updateProductDialog";
import Header from "../../header/header";
import Navbar from "../../navbar/navbar";
import "./mainLayout.css";
import useViewModel from "./useViewModel";

type MainLayoutProps = {
  children: any;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { typeDialog } = useViewModel();

  return (
    <div className="mainLayout-layout">
      <Header />
      <div className="mainLayout-body-layout">
        <Navbar />
        {children}
      </div>
      {typeDialog === "New Product" ? (
        <ProductDialog />
      ) : typeDialog === "Update Product" ? (
        <UpdateProductDialog />
      ) : typeDialog === "Delete Product" ? (
        <DeleteProductDialog />
      ) : (
        <></>
      )}
    </div>
  );
};

export default MainLayout;
