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
      { id: 4, nombre: "Producto 4", precio: 400, img: "arcade-stick.jpg" },
      { id: 5, nombre: "Producto 5", precio: 400, img: "arcade-stick.jpg" },
      { id: 6, nombre: "Producto 6", precio: 400, img: "arcade-stick.jpg" },
      { id: 7, nombre: "Producto 7", precio: 400, img: "arcade-stick.jpg" },
      { id: 8, nombre: "Producto 8", precio: 640, img: "arcade-stick.jpg" },
      { id: 9, nombre: "Producto 9", precio: 2000, img: "arcade-stick.jpg" },
      { id: 10, nombre: "Producto 10", precio: 8000, img: "arcade-stick.jpg" },
      { id: 11, nombre: "Producto 11", precio: 4000, img: "arcade-stick.jpg" },
      { id: 12, nombre: "Producto 12", precio: 6400, img: "arcade-stick.jpg" },
      { id: 13, nombre: "Producto 13", precio: 7400, img: "arcade-stick.jpg" },
      { id: 14, nombre: "Producto 14", precio: 4100, img: "arcade-stick.jpg" },
      { id: 15, nombre: "Producto 15", precio: 4200, img: "arcade-stick.jpg" },
      { id: 16, nombre: "Producto 1", precio: 400, img: "arcade-stick.jpg" },
      { id: 17, nombre: "Producto 1", precio: 400, img: "arcade-stick.jpg" },
    ]);
  }, []);



  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
