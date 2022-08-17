import React from 'react';
import { Routes, Route } from 'react-router-dom'
import LayoutAdmin from './layout/layoutAdmin';
import styled from 'styled-components'
import WebsiteLayout from './layout/WebsiteLayout';
import AddProduct from './pages/admin/product/AddProduct';
import EditProduct from './pages/admin/product/EditProduct';
import ListProduct from './pages/admin/product/ListProduct';
import ListCategory from './pages/admin/category/ListCategory';
import AddCate from './pages/admin/category/AddCate';
import EditCate from './pages/admin/category/EditCate';
import ListUsers from './pages/admin/users/ListUsers';
import EditUser from './pages/admin/users/EditUser';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Cart from './components/Cart';
import WebsiteMain from './components/WebsiteMain';
import WebsiteDetail from './components/WebsiteDetail';
function App() {
  return (
    <div>
      <Wrapper>
        <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<WebsiteMain />} />
          <Route path="cart" element={<Cart/>} />
          <Route path="category/:id" element={< WebsiteMain/>} />
          <Route path=":id/detail" element={< WebsiteDetail/>} />
        </Route>
          <Route path="login" element={<LoginPage />} /> 
          <Route path="register" element={<RegisterPage />} />
          <Route path='admin' element={<LayoutAdmin />}>
            <Route path='product'>
              <Route index element={<ListProduct />} />
              <Route path='add' element={<AddProduct />} />
              <Route path='edit/:id' element={<EditProduct />} />
            </Route>
            <Route path='category'>
              <Route index element={<ListCategory />} />
              <Route path='add' element={<AddCate />} />
              <Route path='edit/:id' element={<EditCate />} />
            </Route>
            <Route path='user'>
              <Route index element={<ListUsers />} />
              <Route path='edit/:id' element={<EditUser />} />
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
`;
export default App
