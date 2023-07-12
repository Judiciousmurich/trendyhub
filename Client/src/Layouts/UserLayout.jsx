import { Outlet } from "react-router-dom"
import Footer from "../components/shared/footer/Footer"
import Navbar from "../components/shared/navbars/Nav"
import './layout.css'

const UserLayout = () => {
    return (
        <div className="user-layout">
            <div>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default UserLayout