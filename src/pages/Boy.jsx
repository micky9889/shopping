import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from '../context/ContextApi';

const apiUrl = "https://jsonplaceholder.typicode.com/photos";

const Boy = () => {
  const [data, setData] = useState([]);
  const{addToCart}=useCart();
  useEffect(() => {
    getData1();
  }, []);
  //  promise --------------------------------------------
  //   const getData = () => {
  //     axios
  //       .get(apiUrl)
  //       .then((response) => {
  //         setData(response.data);
  //         console.log("Data:", response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   };
  //  async/await --------------------------------------------
  const getData1 = async () => {
    try {
      const response = await axios.get(apiUrl, { params: { albumId: 2 } });
      setData(response.data);
      // console.log("Data:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-10 pt-1">
      {data.map((item) => (
        <div key={item.id}>
            <Link to={`/productDetail/${item.id}`}>
          <div className="bg-gray-100 p-5">
            <img src={item.thumbnailUrl} alt="" className="mx-auto my-auto" />
            {/* <button onClick={() => addToCart({ id:item.id, titll:item.title,url:item.url })}>add</button> */}
          </div>
            </Link>
          <div className="flex justify-between">
            <div>
              <p className="text-lg">{item.title.slice(0, 10)}</p>
              <p className="text-lg text-gray-300">stock: {item.id}</p>
            </div>
            <p className="text-lg text-green-600">$ {item.id * 15}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Boy;
