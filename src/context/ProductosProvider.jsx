import { createContext, useEffect, useState } from "react";

// Creación del context
export const ProductosContext = createContext();

// Provider con la fuente de datos
const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    getProductos();
  }, []);

  // Obtener las productos
  const getProductos = async () => {
    const res = await fetch("/pizzas.json");
    const productos = await res.json();
    setProductos(productos);
  };

  const agregarCarrito = ({ id, price, name, img }) => {
    const productoEncontradoIndex = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    if (productoEncontradoIndex >= 0) {
      carrito[productoEncontradoIndex].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const incrementar = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };

  const decrementar = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 1);
    } else {
      carrito[i].count--;
    }
    setCarrito([...carrito]);
  };

  return (
    <ProductosContext.Provider
      value={{
        productos,
        setProductos,
        carrito,
        agregarCarrito,
        incrementar,
        decrementar,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};

export default ProductosProvider;