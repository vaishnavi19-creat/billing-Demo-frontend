import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
// import RegisterPage from './pages/Register/RegisterPage';
import SuperAdminPage from './pages/SuperAdmin/SuperAdminPage';
import Menubar from './components/Menubar/Menubar';
import CustomerList from './components/Customer/CustomerList';
import ShopList from './components/Shop/ShopList';
import AddCustomer from './components/Customer/AddCustomer';
import AddShop from './components/Shop/AddShop';

function App() {
  return (
    <Router>
      <div>
        <Menubar /> {/* Menubar is now visible on all pages */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          <Route path="/superadmin" element={<SuperAdminPage />} />
          <Route path="/add-shop" element={<AddShop />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/customer-list" element={<CustomerList />} />
          <Route path="/shop-list" element={<ShopList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




































// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './pages/Login/LoginPage';
// // import RegisterPage from './pages/Register/RegisterPage';
// import SuperAdminPage from './pages/SuperAdmin/SuperAdminPage';
// import Menubar from './components/Menubar/Menubar';
// import CustomerList from './components/Customer/CustomerList';
// import ShopList from './components/Shop/ShopList'
// import AddCustomer from './components/Customer/AddCustomer';
// import AddShop from './components/Shop/AddShop';





// function App() {


//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         {/* <Route path="/register" element={<RegisterPage />} /> */}
//         <Route path="/superadmin" element={<SuperAdminPage />} />
//         <Route path="/add-shop" element={<AddShop/>} />
//         <Route path="/add-customer" element={<AddCustomer/>} />
//         <Route path="/customerlist" element={<CustomerList/>} />
//         <Route path='/shoplist' element={<ShopList/>}/>
//         <Route path="/menubar" element={<Menubar/>} />


//       </Routes>
//     </Router>
//   );
// }

// export default App;












