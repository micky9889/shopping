import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCart } from "./../context/ContextApi";

const ProductDetail = () => {
  const params = useParams(); //or  const {id} = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState([]);
  // console.log("product:", product);
  const apiUrl = "https://jsonplaceholder.typicode.com/photos";
  useEffect(() => {
    getData1();
  }, []);
  const getData1 = async () => {
    try {
      const response = await axios.get(`${apiUrl}/${params.id}`);
      // console.log("resp", response);
      setProduct(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div className="flex flex-row space-x-3 mt-2">
        <img src={product.url} alt="picture" />
        <div className="flex flex-col">
          <p>{product.title}</p>
          <p>
            Price: <span className="text-green-500"> {product.id * 15} $</span>
          </p>
          <Link to='/cart'>
            <button
              className="border bg-red-400 text-white w-10 h-8"
              onClick={() =>
                addToCart({
                  id: product.id,
                  title: product.title,
                  url: product.url,
                  price: product.id * 15,
                  qty:1
                })
              }
            >
              add
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
