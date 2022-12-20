import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Home";
import Login from "./pages/login/login";
import HomePage from "./pages/homePage/homePage";
import Register from "./pages/register/register";
import AllProduct from "./pages/AllProduct";
import Cart from "./pages/Cart";
import AccountProfile from "./pages/AccountProfile";
import Chat from "./pages/Chat";
import Customer from "./pages/Customer";
import Setting from "./pages/Setting";
import Product from "./pages/Product";
import NotFound from "./pages/NotFoundPage";
import Account from "./pages/Account";
import StatusOrder from "./pages/StatusOrder";
import Payment from "./pages/Payment";
import PrivateRoute from "./PrivateRoute";
import BudgetUser from "./pages/Budget";
import LoginSeller from "./pages/Login";
import PrivateRouteSeller from "./PrivateRouteSeller";
import RegisterSeller from "./pages/RegisterSeller";
import Verify from "./pages/Verify";
import DetailProduct from "./pages/DetailProduct";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            
            <Route path="/register" element={<Register />} />
            <Route path="/product" element={<AllProduct />} />
            <Route path="/product/:id" element={<DetailProduct />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/cart" element={<Cart />} />
              <Route path="/registerSeller" element={<RegisterSeller />} />
              <Route path="/registerSeller/:id" element={<Verify />} />
              <Route path="/user" element={<AccountProfile />} />
              <Route path="/seller" element={<PrivateRouteSeller />}>
                <Route path="/seller" element={<Dashboard />} />
                <Route path="/seller/customer" element={<Customer />} />
                <Route path="/seller/setting" element={<Setting />} />
                <Route path="/seller/account" element={<Account />} />
                <Route path="/seller/products" element={<Product />} />
                <Route path="/seller/add" element={<Payment />} />
                <Route path="/seller/budget" element={<BudgetUser />} />
                <Route path="/seller/statusOrders" element={<StatusOrder />} />
              </Route>
            </Route>
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
