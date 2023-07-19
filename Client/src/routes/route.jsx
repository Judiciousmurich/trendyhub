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
import { Dashboard } from "../admin/components/Dashboard";
import About from "../pages/about/About";
import UpdateProductForm from "../admin/components/UpdateProduct";
import ProductsTable from "../admin/components/ProductsTable";
import UsersTable from "../admin/components/UsersTable";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>

            {/* USER ROUTES*/}
            <Route path="" element={<UserLayout />}>
                <Route path="" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="products" element={<ProductList />} />
                <Route path="cart" element={<Cart />} />

            </Route>
            {/* ADMIN ROUTES */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="" element={<Dashboard />} />
                <Route path="products" element={<ProductsTable />} />
                <Route path="users" element={<UsersTable />} />

                <Route path="update/:product_id" element={<UpdateProductForm />} />
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