import AddButton from "../../components/button/addButton/addButton";
import FilterButton from "../../components/button/filterButton/filterButton";
import BodyLayout from "../../components/layout/bodyLayout/bodyLayout";
import MainLayout from "../../components/layout/mainLayout/mainLayout";
import Search from "../../components/search/search";
import ProductTable from "../../components/table/productTable/productTable";
import "./homePage.css";

export default function Home() {
  return (
    <MainLayout>
      <div className="homePage-layout">
        <div className="homePage-search-group-layout">
          <Search placeholder="Search For Product" />
          <AddButton title="+ Add New Product" dialogType="New Product" />
        </div>
        <BodyLayout
          children={<ProductTable />}
          header="Product Management"
          filter={<FilterButton />}
        />
      </div>
    </MainLayout>
  );
}
