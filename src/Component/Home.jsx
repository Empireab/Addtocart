import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/ProductSlice";
import Modal from "./Modal";

function Home() {
  const [datas, setDatas] = useState([]);
  const [load, setLoad] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cartstuff);

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((res) => {
        setDatas(res.data);
        setLoad(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoad(false);
      });
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModal(true);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <div className="cont">



        {modal && selectedItem && (
          <Modal data={selectedItem} onClose={() => setModal(false)} />
        )}
        {load ? (
          <h1>Loading...</h1>
        ) : (
          datas.map((item) => (
            <div key={item.id}>
              <ul className="list" onClick={() => handleItemClick(item)}>
                <li>
                  <img className="img" src={item.image} alt="product" />
                </li>
                <li>
                  <p>{item.title}</p>
                </li>
                <li>{item.category}</li>
                <li>
                  <h3>${item.price}</h3>
                </li>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent modal from opening
                    handleAddToCart(item);
                  }}
                >
                  Add to Cart
                </button>
                <h5>{item.id}</h5>
              </ul>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Home;
