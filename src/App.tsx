import { Routes, Route } from "react-router-dom";
import {
  LoginScreen
} from "./screens";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      {/* <Route path="/home" element={<HomeScreen />} /> */}
      {/* <Route path="/categories" element={<CategoriesScreen />} />
      <Route path="/admins" element={<AdminsScreen />} />
      <Route path="/deliveries" element={<DeliveriesScreen />} />
      <Route path="/products" element={<ProductsScreen />} />
      <Route path="/products/:productId/edit" element={<EditProductScreen />} />
      <Route path="/products/create" element={<CreateProductScreen />} />
      <Route path="/delivery-areas" element={<DeliveryAreasScreen />} />
      <Route path="/slider" element={<SliderScreen />} /> */}
    </Routes>
  );
}

export default App;
