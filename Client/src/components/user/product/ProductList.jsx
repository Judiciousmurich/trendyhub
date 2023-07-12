import Product from "./Product"

const ProductList = () => {
  return (
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
  )
}

export default ProductList