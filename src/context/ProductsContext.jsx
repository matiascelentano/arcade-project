import { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  const productList = [{ id: 1, name: "Producto 1111111111111111111111111111111111111111111111111111111111111111111111111111111111111", price: 400, img: "arcade-stick.jpg", quantity: 40, category: 1 },
  { id: 2, name: "Producto 2", price: 600, img: "arcade-stick.jpg", quantity: 30, category: 2 },
  { id: 3, name: "Producto 3", price: 4060, img: "arcade-stick.jpg", quantity: 20, category: 3 },
  { id: 4, name: "Producto 4", price: 34563, img: "arcade-stick.jpg", quantity: 15, category: 3 },
  { id: 5, name: "Producto 5", price: 73543, img: "arcade-stick.jpg", quantity: 55, category: 3 },
  { id: 6, name: "Producto 6", price: 34573, img: "arcade-stick.jpg", quantity: 25, category: 2 },
  { id: 7, name: "Producto 7", price: 34737, img: "arcade-stick.jpg", quantity: 23, category: 2 },
  { id: 8, name: "Producto 8", price: 534773, img: "arcade-stick.jpg", quantity: 76, category: 4 },
  { id: 9, name: "Producto 9", price: 345563, img: "arcade-stick.jpg", quantity: 67, category: 4 },
  { id: 10, name: "Producto 10", price: 34555, img: "arcade-stick.jpg", quantity: 9, category: 5 },
  { id: 11, name: "Producto 11", price: 346663, img: "arcade-stick.jpg", quantity: 10, category: 4 },
  { id: 12, name: "Producto 12", price: 634555, img: "arcade-stick.jpg", quantity: 18, category: 2 },
  { id: 13, name: "Producto 13", price: 53453, img: "arcade-stick.jpg", quantity: 30, category: 2 },
  { id: 14, name: "Producto 14", price: 534567, img: "arcade-stick.jpg", quantity: 20, category: 1 },
  { id: 15, name: "Producto 15", price: 733345, img: "arcade-stick.jpg", quantity: 55, category: 1 },
  { id: 16, name: "Producto 16", price: 73435, img: "arcade-stick.jpg", quantity: 43, category: 1 },
  { id: 17, name: "Producto 17", price: 1231243, img: "arcade-stick.jpg", quantity: 19, category: 2 },
  { id: 18, name: "Producto 18", price: 4511, img: "arcade-stick.jpg", quantity: 19, category: 3 },
  { id: 19, name: "Producto 19", price: 312354, img: "arcade-stick.jpg", quantity: 19, category: 5 },
  { id: 20, name: "Producto 20", price: 31235, img: "arcade-stick.jpg", quantity: 19, category: 4 },
  { id: 21, name: "Producto 21", price: 234265, img: "arcade-stick.jpg", quantity: 19, category: 3 },
  { id: 22, name: "Producto 22", price: 2344234, img: "arcade-stick.jpg", quantity: 19, category: 1 },
  { id: 23, name: "Producto 24", price: 234234, img: "arcade-stick.jpg", quantity: 19, category: 2 },
  { id: 24, name: "Producto 25", price: 23442, img: "arcade-stick.jpg", quantity: 19, category: 2 },
  { id: 25, name: "Producto 26", price: 2344234, img: "arcade-stick.jpg", quantity: 19, category: 2 },
  { id: 26, name: "Producto 27", price: 234234, img: "arcade-stick.jpg", quantity: 19, category: 4 },
  { id: 27, name: "Producto 28", price: 42342562, img: "arcade-stick.jpg", quantity: 19, category: 4 },
  { id: 28, name: "Producto 29", price: 23424423, img: "arcade-stick.jpg", quantity: 19, category: 3 },
  { id: 29, name: "Producto 30", price: 1231243, img: "arcade-stick.jpg", quantity: 19, category: 3 },
  { id: 30, name: "Producto 31", price: 4234565, img: "arcade-stick.jpg", quantity: 19, category: 5 },
  { id: 31, name: "Producto 32", price: 42346856, img: "arcade-stick.jpg", quantity: 19, category: 5 },
  { id: 32, name: "Producto 33", price: 1231243, img: "arcade-stick.jpg", quantity: 19, category: 6 },
  { id: 33, name: "Producto 34", price: 42346, img: "arcade-stick.jpg", quantity: 19, category: 6 },
  { id: 34, name: "Producto 35", price: 34442, img: "arcade-stick.jpg", quantity: 19, category: 5 },
  { id: 35, name: "Producto 36", price: 85765, img: "arcade-stick.jpg", quantity: 19, category: 4 },
  { id: 36, name: "Producto 37", price: 123512, img: "arcade-stick.jpg", quantity: 19, category: 3 },
  { id: 37, name: "Producto 38", price: 52356, img: "arcade-stick.jpg", quantity: 19, category: 2 },
  { id: 38, name: "Producto 39", price: 234234, img: "arcade-stick.jpg", quantity: 19, category: 1 },]

  const [products, setProducts] = useState(productList);

  useEffect(() => {
    setProducts(products);
  }, []);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id != id));
  }

  return (
    <ProductsContext.Provider value={{ products, setProducts, deleteProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
