import { useContext } from "react"
import { Link } from "react-router-dom"
import { ProductosContext } from "../context/ProductosProvider"
import {formatNumber} from "../helpers/formatNumber"


const Menu = () => {
 const {carrito} = useContext(ProductosContext)
 const total = carrito.reduce(
    (a, producto) => a + producto.price * producto.count,
    0,
  );

  return (
    <>
    
      <div className="navbar text-white py-3">
      <div className="container d-block">
        <div className="d-flex justify-content-between">
          <Link to="/" className="logo-nombre decoration mx-1 mb-0">
            <h4 className="color mb-0">🍕 Pizzería Mamma Mia! </h4>
          </Link>

          <Link to="/carrito" className="decoration logo-nombre mx-1 mb-0">
            <h4 className="mb-0 color">
              {""} 🛒Total: ${formatNumber(total)}
            </h4>
          </Link>
        </div>
      </div>
    </div>
  
    </>
  )
}

export default Menu
