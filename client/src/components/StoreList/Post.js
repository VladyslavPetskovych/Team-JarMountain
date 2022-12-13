import React from "react";
import { Button } from "react-bootstrap";
import { isTemplateMiddle } from "typescript";
import { useShoppingCart } from "../../context/shoppingCartContext";
import "./Post.css";

export default function Post({ posts, loading }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  let Show1render = posts.map((item) => {
    console.log()
    const quantity = getItemQuantity(item._id);
    return (
      <div className="d-flex flex-column m-3  " key={item._id}>
        <img
          className="itemImg"
          src={
            "http://tlwsn.westeurope.cloudapp.azure.com/api/image/" + item._id
          }
        />
        <div className="d-flex flex-row m-3 p-1 justify-content-between align-items-baseline">
          <p className="m-1 fs-5 ">{item.name}</p>
          <p className=" fs-5 text-muted">{item.price}</p>
        </div>
        <p className=" m-2">{item.description}</p>
        <div>
          {quantity === 0 ? (
            <Button
              className="w-100"
              onClick={() => { increaseCartQuantity(item._id)}}
            >
              + Додати товар
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center flex-row "
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(item._id)}>
                  -
                </Button>
                <div className="d-flex align-items-center justify-content-center flex-column">
                  <span className="fs-5">{quantity}</span>
                  <p></p>
                </div>
                <Button
                  onClick={() => removeFromCart(item._id)}
                  variant="danger"
                  
                >Видалити</Button>
                <Button onClick={() => increaseCartQuantity(item._id)}>
                  +
                </Button>
              </div>
              buy
            </div>
          )}
        </div>
      </div>
    );
  });
  return Show1render;
}
