import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <motion.div
      className="hidden sm:block w-[15%] bg-black min-h-[90vh] py-4"
      initial={{ opacity: 0, x: -100 }} // Example initial animation properties
      animate={{ opacity: 1, x: 0 }} // Example animate animation properties
      transition={{ duration: 0.5 }} // Example transition properties
    >
      <div className="w-[15%] bg-black min-h-[90vh] py-4">
        <div className="h-full text-white pl-4  flex flex-col gap-4 cursor-pointer">
          <Link to="" className="flex items-center gap-2">
            Dashboard
          </Link>
          <Link to="products" className="flex items-center gap-2 text-white">
            Products
          </Link>
          <Link to="users" className="flex items-center gap-2 text-white">
            Users
          </Link>
          <Link to="createproduct" className="flex items-center gap-2 text-white">
            CreateProduct
          </Link>
          <Link to="orders" className="flex items-center gap-2 text-white">
            Orders
          </Link>

        </div>
      </div>
    </motion.div>

  );
};
