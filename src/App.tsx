import { Routes, Route } from "react-router-dom";
import {
  HomeScreen,
  LoginScreen,
  NotificationsScreen,
  OrderItemDetailsScreen,
  OrdersScreen,
} from "./screens";
import { RequireAuth } from "./components/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route element={<RequireAuth />}>
        <Route path="/orders" element={<OrdersScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/orders/:orderId" element={<OrderItemDetailsScreen />} />
        <Route path="/notifications" element={<NotificationsScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
