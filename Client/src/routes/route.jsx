import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import AuthLayout from "../Layouts/AuthLayout";
import UserLayout from "../Layouts/UserLayout";


import { AdminLayout } from "../Layouts/AdminLayout";
import Home from "../pages/home/Home";
import Cart from "../user/components/cart/Cart";
import ProductList from "../user/components/product/ProductList";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/blog/Blog";
import ProductDetails from "../user/components/product/ProductDetails";
import UpdateProduct from "../admin/components/products/UpdateProduct";
import AdminProductList from "../admin/components/products/AdminProductList";
import { Dashboard } from "../admin/components/Dashboard";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>

            {/* USER ROUTES*/}
            <Route path="" element={<UserLayout />}>
                <Route path="" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="products" element={<ProductList />} />
                <Route path="cart" element={<Cart />} />

            </Route>
            {/* ADMIN ROUTES */}
            <Route path="admin" element={<AdminLayout />}>
                <Route path="" element={<Dashboard />} />
                <Route path="products" element={<AdminProductList />} />
                <Route path="update/:product_id" element={<UpdateProduct />} />
                <Route path="more/:product_id" element={<ProductDetails />} />
            </Route>
            {/* AUTH ROUTES */}
            <Route path="auth" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
            </Route>

        </Route>
    )
);