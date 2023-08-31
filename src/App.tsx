import { Routes, Route } from "react-router-dom";
import {
  HomeScreen,
  LoginScreen,
  OrdersScreen,
} from "./screens";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/orders" element={<OrdersScreen />} />
    </Routes>
  );
}

export default App;
