import React, { useState } from "react";
import { useCart } from "./../context/ContextApi";
import { Link } from "react-router-dom";

const Search = () => {
  const { allData } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredData = allData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredData);
  };
  return (
    <div>
      <div className="flex flex-row justify-center items-center border-gray-500 shadow-md w-">
        <input
          type="text"
          className="w-screen text-center h-10"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-8 gap-y-10 pt-3">
        {searchResults.map((item) => (
          <div key={item.id}>
            <Link to={`/productDetail/${item.id}`}>
              <div className="bg-gray-100 p-5">
                <img
                  src={item.thumbnailUrl}
                  alt=""
                  className="mx-auto my-auto"
                />
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
    </div>
  );
};

export default Search;
