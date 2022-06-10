import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [detail, setDetail]=useState({});
  useEffect( () => {
    const data = async () => {
      const res = await fetch(`fakedata.json/${id}`)
      const data = await res.json()
      console.log({ data })
        // .then((data) => console.log('massega'));
    }
   data()
  }, [id]);
  return (
    <div class="carousel rounded-box w-100 h-100">
      <div class="carousel-item">
        <img src={detail.img} alt=" " />
        <h1 className="text-white">{detail.name}</h1>
      </div>
    </div>
  );
};

export default Details;
