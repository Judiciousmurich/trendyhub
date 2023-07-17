import { Link } from "react-router-dom"
import Product from "./Product"
import Clients from "../../../shared/Clients"

const ProductList = () => {
  return (
    <>
    <div className="bg-[#e2e2e2] w-screen p-16  mb-8 ">
    <i className="flex flex-col items-center w-full">
      <Link to="/" className=" text-[#666666]">Home / Products</Link>
      <h1 className="font-bold text-4xl ">Products</h1>
    </i>
  </div>
    <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 p-6">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
    <Clients/>
    </>
  )
}

export default ProductList