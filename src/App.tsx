import React from 'react';
import { Routes, Route } from 'react-router-dom'
import LayoutAdmin from './layout/layoutAdmin';
import styled from 'styled-components'
import WebsiteLayout from './layout/WebsiteLayout';
import AddProduct from './pages/admin/product/AddProduct';
import EditProduct from './pages/admin/product/EditProduct';
import ListProduct from './pages/admin/product/ListProduct';
function App() {
  return (
    <div>
      <Wrapper>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}></Route>
          <Route path='admin' element={<LayoutAdmin />}>
            <Route path='product'>
              <Route index element={<ListProduct />} />
              <Route path='add' element={<AddProduct />} />
              <Route path='edit/:id' element={<EditProduct />} />
            </Route>
          </Route>
        </Routes>
      </Wrapper>
    </div>

  )
}
const Wrapper = styled.div`
  max-width: 1777px;
  margin: 0 auto;
  font-family: Roboto, sans-serif;
  background-color: #e5e5e5;
`;
export default App
