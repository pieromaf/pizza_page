import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { ProductosContext } from "../context/ProductosProvider.jsx";

const Detalle = () => {
  const { productos, agregarCarrito } = useContext(ProductosContext);
  const { id } = useParams();
  const [productoDetail, setProductoDetail] = useState({});

  const obtenerDatos = () => {
    const datosProducto = productos.find((producto) => producto.id === id);

    setProductoDetail(datosProducto);
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <>
      {productoDetail && (
        <div className="container mt-5">
          <div className="card mb-3 estilos">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={productoDetail.img}
                  className="img-fluid estilos rounded-start"
                  alt={productoDetail.name}
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title text-capitalize">
                    {productoDetail.name}
                  </h5>
                  <p className="card-text">{productoDetail.desc}</p>

                  <div className="d-flex justify-content-around">
                    <h4>Precio: ${productoDetail.price}</h4>
                    <button
                      className="btn btn-celeste"
                      onClick={() => agregarCarrito(productoDetail)}
                    >
                      Añadir &#128722;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Detalle;
