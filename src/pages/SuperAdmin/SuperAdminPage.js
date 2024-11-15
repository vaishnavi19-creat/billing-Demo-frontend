import React from 'react';
import ShopList from '../../components/Shop/ShopList';
import Addshop from '../../components/Shop/AddShop'

function SuperAdminPage() {
  return (
    <div>
      <h2>Super Admin Portal</h2>
      <ShopList />
      <Addshop/>
    </div>
  );
}

export default SuperAdminPage;
