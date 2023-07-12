import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import AuthLayout from "../Layouts/AuthLayout";
import Footer from "../components/shared/footer/Footer";
import UserLayout from "../Layouts/UserLayout";
import Cart from "../components/user/cart/Cart";
import ProductList from "../components/user/product/ProductList";
import AdminLayout from "../Layouts/AdminLayout";
import AdminProductList from "../components/admin/products/AdminProductList";
import UpdateProduct from "../components/admin/products/UpdateProduct";
import ProductDetails from "../components/user/product/ProductDetails";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>

            {/* USER ROUTES*/}
            <Route path="" element={<UserLayout />}>
                <Route path="" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="products" element={<ProductList />} />
                <Route path="cart" element={<Cart />} />

            </Route>
            {/* ADMIN ROUTES */}
            <Route path="admin" element={<AdminLayout />}>
                <Route path="products" element={<AdminProductList />} />
                <Route path="update/:product_id" element={<UpdateProduct />} />
                <Route path="more/:product_id" element={<ProductDetails />} />

            </Route>
            {/* AUTH ROUTES */}
            <Route path="auth" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
            </Route>
            {/* <Route path="footer" element={<Footer />} /> */}

        </Route>
    )
);