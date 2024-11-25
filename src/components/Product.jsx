import { Card, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingOutlined } from '@ant-design/icons';
import { productType } from "../store/actions/ActionTypes";


const { Meta } = Card;
const Product = ({data}) => {
    const {id,title,description,image,price,category} = data 
    const dispatch = useDispatch()

    const cartData = useSelector((state)=>state.cart);
    const handleCartProduct = ()  => {
      const condition = cartData.some((item) => item.id == id);
      if (condition) {
        message.warning("Oops! This product is already in your cart. Check it out!");
      }
      else {
        dispatch({type:productType.ADD_CART_PRODUCT, payload:data})
        message.success('Added successfully');
      }
    }

    console.log(cartData);
    


  return (
    <div >
      <Card
        hoverable
        className="px-5 pt-5 pb-3 bg-gray-100 border border-blue-500  shadow-lg rounded-lg hover:shadow-sm hover:shadow-white hover:border-blue-400 transition-all duration-300 ease-in-out transform hover:scale-105"
        cover={
          <img
            className="w-[150px] bg-white h-[150px] object-contain rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-110"
            alt="example"
            src={image}
          />
        }
      >
        <div className="flex flex-col justify-between h-full">
          <p className="text-gray-500 text-sm">Category: {category}</p>
          <Meta
            title={<span className="text-lg font-semibold text-gray-800">{title}</span>}
            description={<span className="text-sm text-gray-600">{description.slice(0, 50)}</span>}
          />
          <div className="flex justify-between pt-5 items-center  text-2xl ">
            <p className="text-pink-600 font-semibold">Price: {price}$</p>
            <p className=" text-blue-700 bg-white rounded-full px-3 py-2 shadow-md hover:bg-blue-100 transition-all duration-300 ease-in-out cursor-pointer">
              <ShoppingOutlined onClick={handleCartProduct} />
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
  
}

export default Product