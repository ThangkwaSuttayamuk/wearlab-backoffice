import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./view/pages/home/homePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/shop-management" element={<ShopManagement />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
