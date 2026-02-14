import AddButton from "../../components/button/addButton/addButton";
import FilterButton from "../../components/button/filterButton/filterButton";
import BodyLayout from "../../components/layout/bodyLayout/bodyLayout";
import MainLayout from "../../components/layout/mainLayout/mainLayout";
import Search from "../../components/search/search";
import ProductTable from "../../components/table/productTable/productTable";
import "./shopManagement.css";

export default function ShopManagement() {
  return (
    <MainLayout>
      <div className="shopManagement-layout">
        <div className="shopManagement-search-group-layout">
          <Search placeholder="Search For Product" />
          <AddButton title="+ Add New Product" dialogType="New Product" />
        </div>
        <BodyLayout
          children={<ProductTable />}
          header="Shop Management"
          filter={<FilterButton />}
        />
      </div>
    </MainLayout>
  );
}
