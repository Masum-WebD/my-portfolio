import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const navigate = useNavigate();
  const moreDetails = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div className="mx-20 ">
      <div className="flex justify-center mt-14 mb-10">
        <h1 className="text-4xl text-white font-bold ">My Project </h1>
        <div className="w-52 mt-7 ml-1 h-1 bg-[#f99fc3]"></div>
      </div>
      <div className=" grid lg:grid-cols-3 sm:grid-cols-1 gap-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="card card-compact lg:max-w-lg shadow-xl"
          >
            <figure>
              <img className="h-100" src={product.img} alt="Shoes" />
            </figure>
            <div className="card-body  text-white">
              <h2 className="card-title ">{product.name}</h2>
              <p className="text-xl">{product.description}</p>
              <a
                className="text-[#f99fc3] font-bold text-xl mr-5"
                target="_blank"
                href={product.liveLink}
                rel="noreferrer"
              >
                {" "}
                Live link{" "}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
