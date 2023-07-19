import { Outlet } from "react-router-dom"
import './layout.css'
import Footer from "../shared/footer/Footer"
import Navbar from "../shared/navbars/Nav"

const UserLayout = () => {
    return (
        <div className="user-layout overflow-hidden">
            <div>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default UserLayout