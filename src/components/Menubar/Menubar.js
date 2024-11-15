import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menubar.css';


function Menubar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [customerDropdown, setCustomerDropdown] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search Term:', searchTerm);
  };

  return (
    <div className="menubar">
      <nav>
        <ul>
          {/* Customer Dropdown */}
          <li onMouseEnter={() => setCustomerDropdown(true)} onMouseLeave={() => setCustomerDropdown(false)}>
            <span>Customer</span>
            {customerDropdown && (
              <ul className="dropdown">
                <li><Link to="/add-customer">Add Customer</Link></li>
                <li><Link to="/customer-list">Customer List</Link></li>
              </ul>
            )}
          </li>

          {/* Shop Dropdown */}
          <li onMouseEnter={() => setShopDropdown(true)} onMouseLeave={() => setShopDropdown(false)}>
            <span>Shop</span>
            {shopDropdown && (
              <ul className="dropdown">
                <li><Link to="/add-shop">Add Shop</Link></li>
                <li><Link to="/shop-list">Shop List</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Search Form */}
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Menubar;
