import { Card } from "antd";
import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { productType } from "../store/actions/ActionTypes";

const { Meta } = Card;

const CartProduct = ({ data }) => {
  const { id, title, description, image, price, category } = data;
  const dispatch = useDispatch();

  return (
    <div>
      <Card
        hoverable
        className="p-5"
        cover={
          <img
            className="w-[150px] h-[150px] object-contain "
            alt="example"
            src={image}
          />
        }
      >
        <p>Category : {category}</p>
        <Meta title={title} description={description.slice(0, 100)} />
        <div className="flex justify-between py-5 text-2xl">
          <p className="text-green-500-600">Price : {price}$</p>
          <p className="text-red-600 top-0 absolute right-0 px-5 py-2">
            <DeleteOutlined
              onClick={() =>
                dispatch({ type: productType.REMOVE_CART_PRODUCT, payload: {id:id} })
              }
            />
          </p>
        </div>
      </Card>
    </div>
  );
};

export default CartProduct;