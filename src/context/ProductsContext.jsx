import { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      { id: 1, nombre: "Producto 1", precio: 400, img: "arcade-stick.jpg" },
      { id: 2, nombre: "Producto 2", precio: 600, img: "arcade-stick.jpg" },
      { id: 3, nombre: "Producto 3", precio: 4060, img: "arcade-stick.jpg" },
      { id: 4, nombre: "Producto 4", precio: 34563, img: "arcade-stick.jpg" },
      { id: 5, nombre: "Producto 5", precio: 73543, img: "arcade-stick.jpg" },
      { id: 6, nombre: "Producto 6", precio: 34573, img: "arcade-stick.jpg" },
      { id: 7, nombre: "Producto 7", precio: 34737, img: "arcade-stick.jpg" },
      { id: 8, nombre: "Producto 8", precio: 534773, img: "arcade-stick.jpg" },
      { id: 9, nombre: "Producto 9", precio: 345563, img: "arcade-stick.jpg" },
      { id: 10, nombre: "Producto 10", precio: 34555, img: "arcade-stick.jpg" },
      { id: 11, nombre: "Producto 11", precio: 346663, img: "arcade-stick.jpg" },
      { id: 12, nombre: "Producto 12", precio: 634555, img: "arcade-stick.jpg" },
      { id: 13, nombre: "Producto 13", precio: 53453, img: "arcade-stick.jpg" },
      { id: 14, nombre: "Producto 14", precio: 534567, img: "arcade-stick.jpg" },
      { id: 15, nombre: "Producto 15", precio: 733345, img: "arcade-stick.jpg" },
      { id: 16, nombre: "Producto 1", precio: 73435, img: "arcade-stick.jpg" },
      { id: 17, nombre: "Producto 1", precio: 1231243, img: "arcade-stick.jpg" },
    ]);
  }, []);



  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
