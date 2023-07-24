// FilterController.js

const filterProductsByCategory = (products, selectedCategory) => {
    if (!selectedCategory) {
      return products; // If no category is selected, return all products
    } else {
      return products.filter((product) => product.category === selectedCategory);
    }
  };
  
  export default filterProductsByCategory;
  