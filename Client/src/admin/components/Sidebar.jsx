import { motion } from "framer-motion";

export const Sidebar = () => {
  return (
    <motion.div
      className="w-[15%] bg-black min-h-[90vh] py-4"
      initial={{ opacity: 0, x: -100 }} // Example initial animation properties
      animate={{ opacity: 1, x: 0 }} // Example animate animation properties
      transition={{ duration: 0.5 }} // Example transition properties
    >
      <div className="w-[15%] bg-black min-h-[90vh] py-4">
        <div className="h-full text-white pl-4  flex flex-col gap-4 cursor-pointer">
          <div className="flex items-center gap-2">
            Dashboard
          </div>
          <div className="flex items-center gap-2 text-white">
            Products
          </div>
          <div className="flex items-center gap-2">
             Users
          </div>

        </div>
      </div>
    </motion.div>

  );
};
