import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from "react-hot-toast";
import Footer from './components/Footer';
import { useAppContext } from './context/AppContext';
import Login from './components/Login';
import AllProducts from './pages/AllProducts';
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import AddAddress from './pages/AddAddress';
import MyOrders from './pages/MyOrders';
import SellerLogin from './components/seller/SellerLogin';
import SellerLayout from './pages/seller/SellerLayout';
import AddProduct from './pages/seller/AddProduct';
import ProductList from './pages/seller/ProductList';
import Orders from './pages/seller/Orders';
import Loading from './components/Loading';
import MapView from './components/MapView';
import ContactUs from './pages/Contect';
import CreditCard from './components/Card';
import BestSeller from './components/BestSeller';
import DeveloperCards from './pages/Devs';
import Pov from "./pages/Pov";
import DeliveryInfo from './pages/Deliveryinfo';
import PaymentMethods from './pages/PayMethod';
import ReturnRefundPolicy from './pages/Return';

const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller");
  const {showUserLogin, isSeller} = useAppContext()

  return (
    <div className='text-default min-h-screen text-gray-700 bg-white'>

     {isSellerPath ? null : <Navbar/>} 
     {showUserLogin ? <Login/> : null}

     <Toaster />

      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<AllProducts/>} />
          <Route path='/products/:category' element={<ProductCategory/>} />
          <Route path='/products/:category/:id' element={<ProductDetails/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/add-address' element={<AddAddress/>} />
          <Route path='/my-orders' element={<MyOrders/>} />
          <Route path='/loader' element={<Loading/>} />
          <Route path="/delivery-info" element={<DeliveryInfo />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/return-refund-policy" element={<ReturnRefundPolicy />} />
          <Route path='/pov' element={<Pov/>} />
          <Route path='/devscard' element={<DeveloperCards/>} />
          <Route path='/mapview' element={<MapView fullWidth />} />
         <Route path='/card' element={<CreditCard/>}/>
         <Route path='/bestseller' element={<BestSeller/>}/>
          <Route path='/contect' element={<ContactUs/>}/>
          <Route path='/CreditCard' element={<CreditCard/>}/>
          <Route path='/seller' element={isSeller ? <SellerLayout/> : <SellerLogin/>}>
            <Route index element={isSeller ? <AddProduct/> : null} />
            <Route path='product-list' element={<ProductList/>} />
            <Route path='orders' element={<Orders/>} />
          </Route>
        </Routes>
      </div>
      
     
     {!isSellerPath && <Footer/>}
    </div>
  )
}

export default App
