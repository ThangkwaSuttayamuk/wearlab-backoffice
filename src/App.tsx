import axios from "axios";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { API_PATH } from "./constant/api/apiPath";
import HomePage from "./view/pages/home/homePage";
import ShopManagement from "./view/pages/shopManagement/shopManagerment";
// import MyProfileScreen from "./presentation/screen/my_profile/my_profile_screen";
// import HomeScreen from "./presentation/screen/home/home_screen";
// import AddressScreen from "./presentation/screen/address/address_screen";

function App() {
  function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Navigate to="/" replace />;
    }

    return <>{children}</>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop-management" element={<ShopManagement/>}/>
        {/* <Route path="/my-profile" element={<ProtectedRoute><MyProfileScreen /></ProtectedRoute>} />
        <Route path="/address" element={<ProtectedRoute><AddressScreen /></ProtectedRoute>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
