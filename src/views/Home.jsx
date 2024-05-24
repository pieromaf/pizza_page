import { ProductosContext } from "../context/ProductosProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Home = () => {
  const { productos } = useContext(ProductosContext);
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-4 mt-5" key={producto.id}>
            <div className="card">
              <img src={producto.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">{producto.name}</h4>
                <h6><b>Ingredientes:</b></h6>
                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {producto.ingredients.map((ingredient, i)=> (
                  <li key={i}>🍕{ingredient}</li>
                ))}
                </ul>
                <h5 className="card-text">${producto.price}</h5>
                <a
                  onClick={() => navigate(`/productos/${producto.id}`)}
                  className="btn btn-celeste"
                >
                  Detalle
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;