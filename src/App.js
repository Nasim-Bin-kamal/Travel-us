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
            {/* <Route path="/courses/order/:id" element={<PrivateRoute>
              <Order />
            </PrivateRoute>} />

            <Route path="*" element={<NotFound />} />
            {/* <Route path="/dashboard/*" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
              <Route path="" element={<DashboardHome />} />
              <Route path="manageOrders" element={<ManageOrders />} />
              <Route path="addProducts" element={<AddProducts />} />
              <Route path="manageProducts" element={<ManageProducts />} />
              <Route path="myOrders" element={<MyOrders />} />
              <Route path="addReview" element={<AddReview />} />
            </Route>
            <Route path="/checkout" element={<PrivateRoute>
              <Checkout />
            </PrivateRoute>} /> */}
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
