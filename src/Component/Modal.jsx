import React from "react";

function Modal({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>
          &times;
        </button>
        <img src={data.image} alt="product" className="modal-img" />
        <h2 className="dtitle">{data.title}</h2>
        <p className="category_section">Category: {data.category}</p>
        <p className="modal-description">{data.description}</p>
        <h3 className="modal-price">${data.price}</h3>
      </div>
    </div>
  );
}

export default Modal;
