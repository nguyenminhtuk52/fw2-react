import React from 'react';
import { Routes, Route } from 'react-router-dom'
import LayoutAdmin from './layout/layoutAdmin';
import AddProduct from './pages/admin/product/AddProduct';
import EditProduct from './pages/admin/product/EditProduct';
import ListProduct from './pages/admin/product/ListProduct';
function App() {
  return (
    <div>
      <Routes>
        <Route path='admin' element={<LayoutAdmin />}>
          <Route path='product'>
            <Route index element={<ListProduct />} />
            <Route path='add' element={<AddProduct />} />
            <Route path='edit/:id' element={<EditProduct />} />
          </Route>
        </Route>
      </Routes>
    </div>

  )
}

export default App
