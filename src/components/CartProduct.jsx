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
        className="px-5 pt-5 pb-2 border border-blue-500 hover:border-blue-500 bg-gray-100  shadow-lg rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        cover={
          <img
            className="w-[150px] bg-white h-[150px] object-contain rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-110"
            alt="product"
            src={image}
          />
        }
      >
        <p className="text-gray-500 text-sm">Category: {category}</p>
        <Meta
          title={<span className="text-lg font-semibold text-gray-800">{title}</span>}
          description={<span className="text-sm text-gray-600">{description.slice(0, 50)}</span>}
        />
        <div className="flex justify-between pt-5 text-2xl items-center">
          <p className="text-blue-700 font-semibold">Price: {price}$</p>
          <p className=" text-pink-600 bg-white rounded-full px-3 py-2 shadow-md hover:bg-red-100 transition-all duration-300 ease-in-out cursor-pointer">
            <DeleteOutlined
              onClick={() =>
                dispatch({ type: productType.REMOVE_CART_PRODUCT, payload: { id: id } })
              }
            />
          </p>
        </div>
      </Card>
    </div>
  );
};

export default CartProduct