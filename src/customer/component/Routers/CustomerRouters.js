import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Cart from '../Cart/Cart'
import HomePage from '../Pages/HomePage'
import Product from '../Product/Product'
import ProductDetails from '../ProductDetails/ProductDetails'
import Checkout from '../Checkout/Checkout'
import Order from '../Order/Order'
import OrderDetails from '../Order/OrderDetails'
import PaymentSuccess from '../Payment/PaymentSuccess'
function CustomerRouters() {
    return (
        <div>
            <div>
                <Navbar />
            </div>

            <Routes>
                <Route path='/login' element={<HomePage />}></Route>
                <Route path='/register' element={<HomePage />}></Route>
                
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
                <Route path='/product/:productId' element={<ProductDetails />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
                <Route path='/account/order' element={<Order />}></Route>
                <Route path='/account/order/:orderId' element={<OrderDetails />}></Route>
                <Route path='/payment/:orderId' element={<PaymentSuccess />}></Route>


            </Routes>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default CustomerRouters
