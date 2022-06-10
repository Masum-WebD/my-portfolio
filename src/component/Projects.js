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
    <div className='mx-20 '>
        <div className="flex justify-center mt-14 mb-10">
        <h1 className="text-4xl text-white font-bold ">My Project </h1>
        <div className="w-52 mt-7 ml-1 h-1 bg-[#f99fc3]"></div>
      </div>
        <div className=' grid lg:grid-cols-3 sm:grid-cols-1 gap-3'>
       
       {products.map(product => (
         <div class="card card-compact lg:max-w-lg shadow-xl">
           <figure>
             <img
               src={product.img}
               alt="Shoes"
             />
           </figure>
           <div class="card-body bg-[#FF87B7] text-black">
             <h2 class="card-title">{product.name}</h2>
             <p>{product.description}</p>
 
           </div>
         </div>
       ))}
     </div>
    </div>
  );
};

export default Projects;
