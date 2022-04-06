import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import Packages from './pages/Packages/Packages';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './pages/Booking/Booking';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';
import AddPackage from './pages/Dashboard/AddPackage/AddPackage';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import ManageOrders from './pages/Dashboard/ManageOrders/ManageOrders';




function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            {/* <Route path="/courses" element={<PrivateRoute>
              <AllCourses />
            </PrivateRoute>} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/packages/booking/:id" element={<PrivateRoute>
              <Booking />
            </PrivateRoute>} />

            <Route path="*" element={<NotFound />} />
            <Route path="/dashboard/*" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
              <Route path="" element={<DashboardHome />} />
              {/* <Route path="manage-orders" element={<ManageOrders />} /> */}
              <Route path="add-package" element={<AddPackage />} />
              <Route path="manage-orders" element={<ManageOrders />} />
              <Route path="my-orders" element={<MyOrders />} />
              {/* <Route path="addReview" element={<AddReview />} /> */}
            </Route>
            {/* <Route path="/checkout" element={<PrivateRoute>
              <Checkout />
            </PrivateRoute>} /> */}

          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
