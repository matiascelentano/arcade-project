import { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      { id: 1, name: "Producto 1111111111111111111111111111111111111111111111111111111111111111111111111111111111111", price: 400, img: "arcade-stick.jpg", quantity: 40, category: 1 },
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
      { id: 17, name: "Producto 17", price: 1231243, img: "arcade-stick.jpg", quantity: 19, category: 1 },
    ]);
  }, []);


  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
