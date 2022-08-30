import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/SignUp";
import Dashboard from "./pages/Home";
import Customer from "./pages/Customer";
import Setting from "./pages/Setting";
import Product from "./pages/Product";
import NotFound from "./pages/NotFoundPage";
import Account from "./pages/Account";
import StatusOrder from "./pages/StatusOrder";
import Payment from "./pages/Payment";
import Budget from "./pages/Budget";
import PrivateRoute from "./PrivateRoute";
import BudgetUser from "./pages/Budget";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/register" element={<Register />} />

            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/account" element={<Account />} />
              <Route path="/products" element={<Product />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/budget" element={<BudgetUser />} />
              <Route path="/statusOrders" element={<StatusOrder />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
