import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/ProductSlice";
function Home() {
  const [datas, setDatas] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const res = axios("https://fakestoreapi.com/products");
    res.then((items) => {
      setDatas(items.data);
      setLoad(false);
    });
  }, []);

  const dispatch = useDispatch();
  return (
    <>
      <div className="cont">
        {load ? (
          <h1>loading....</h1>
        ) : (
          datas.map((rend, index) => {
            return (
              <ul className="list">
                <li>
                  <img className="img" src={rend.image} alt="jpeg" />
                </li>
                <li>
                  <p>{rend.title}</p>
                </li>
                <li>{rend.category}</li>

                <li>
                  <h3>{rend.price}</h3>
                </li>
                <button onClick={() => dispatch(addToCart(rend))}>
                  {" "}
                  Add to Cart
                </button>
                <h5>{rend.id}</h5>
              </ul>
            );
          })
        )}
      </div>
    </>
  );
}

export default Home;
