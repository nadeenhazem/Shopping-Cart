import React from "react";
import { Button, Card } from "react-bootstrap";
import FormateCurrency from "./FormateCurrency";
import { useCartContext } from "../context/CartContext";

function StoreItem({ id, name, price, img }) {
  const {
    GetItemQuantity,
    IncreaseItemQuantity,
    DecreaseItemQuantity,
    RemoveItemFromCart,
  } = useCartContext();
  const quantity = GetItemQuantity(id);
  return (
    <Card>
      <Card.Img src={img} variant="top" style={{ height: "35vh" }} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-2">{name}</span>
          <span className="text-muted me-2">{FormateCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => IncreaseItemQuantity(id)}>
              Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex flex-column align-items-center"
              style={{ gap: "0.5rem" }}>
              <div
                className="d-flex justify-content-center align-items-center "
                style={{ gap: "0.5rem" }}>
                <Button onClick={() => DecreaseItemQuantity(id)}>-</Button>
                <span className="fs-4"> {quantity} in Cart </span>
                <Button onClick={() => IncreaseItemQuantity(id)}>+</Button>
              </div>
              <Button variant="danger" onClick={() => RemoveItemFromCart(id)}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoreItem;
