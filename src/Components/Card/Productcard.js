import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/Reducers/Cart.reducer";

export default function Productcard({ data = {} }) {
  const dispatcher = useDispatch();
  const handleAddtocart = (e) => {
    if (e) {
      dispatcher(addItemToCart(data));
    }
  };

  return (
    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
      <div class="card">
        <img src={data.image} class="card-img-top" alt={data.name} />
        <div class="card-body">
          <h5 class="card-title">{data.name}</h5>
          <button class="btn btn-primary" onClick={handleAddtocart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
