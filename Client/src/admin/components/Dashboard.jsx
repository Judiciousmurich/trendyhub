import { useState } from "react";
import { Box } from "./Box";
import ProductsTable from "./ProductsTable";
import CreatePoductForm from "./CreateProduct";

export const Dashboard = () => {
  const [tally, setTally] = useState("45%");
  return (
    <div className=" w-full">
      <div className="flex flex-col sm:flex-row justify-between px-4 py-7 gap-4">
        <Box icon="" tally={tally} text="New Orders" bg="bg-[#9559a8]" />
        <Box icon="" tally={tally} text="All Users" bg="bg-[#ed5637]" />
        <Box icon=" " tally={tally} text="Products Count" bg="bg-[#3a599b]" />
        <Box icon="" tally={tally} text="Profit Today" bg="bg-[#02abf1]" />
      </div>
      <div className="p-4">
        {/* <ProductsTable /> */}
        <CreatePoductForm />
      </div>
    </div>

  );
};
