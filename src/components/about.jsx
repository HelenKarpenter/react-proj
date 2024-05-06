import "../index.css";
import { Link } from "react-router-dom";


export default function About() {
    
  return (
    <div className="wrapper-about">
      
      <div className="text-about">
        <h1>Interior design service packages at a glance</h1>
        <p>
          Choose between three service classes from Westwing Studio, tailored to
          your needs. One-time payment, no hidden additional costs.
        </p>
      </div>
      <div className="wrap-about">
        <div className="box-about">
          <h3>Basic</h3>
          <p>
            <i>120€/per living area</i>
          </p>
          <Link to="/contact">
            <button>Start my Basic project</button>
          </Link>
          <ul>
            <li>Telephone consultation with your interior designer</li>
            <li>
              Shopping list with product selection tailored to your style and
              budget
            </li>
            <li>Integration of your existing favorite pieces</li>
          </ul>
        </div>
        <div className="box-about">
          <h3>Premium</h3>
          <p>
            <i>220€/per living area</i>
          </p>
          <Link to="/contact">
            <button>Start my Premium project</button>
          </Link>
          <ul>
            <li>Telephone consultation with your interior designer</li>
            <li>
              Shopping list with product selection tailored to your style and
              budget
            </li>
            <li>Integration of your existing favorite pieces</li>
            <li>Photorealistic 3D visualization of your room concept</li>
          </ul>
        </div>
        <div className="box-about">
          <h3>Deluxe</h3>
          <p>
            <i>999€/per living area</i>
          </p>
          <Link to="/contact">
            <button>Start my Deluxe project</button>
          </Link>
          <ul>
            <li>Telephone consultation with your interior designer</li>
            <li>
              Shopping list with product selection tailored to your style and
              budget
            </li>
            <li>Integration of your existing favorite pieces</li>
            <li>Photorealistic 3D visualization of your room concept</li>
            <li>On-site measurement of your premises</li>
            <li>Presentation of your concept on site</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
