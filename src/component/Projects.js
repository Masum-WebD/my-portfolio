import React, { useEffect, useState } from "react";
import travel from '../Asset/project/travel.png'

const Projects = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className=' mx-20 grid lg:grid-cols-3 sm:grid-cols-1 gap-3'>
      {products.map(product => (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={product.img}
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{product.name}</h2>
            <p>{product.description}</p>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
