import { Card, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingOutlined } from '@ant-design/icons';
import { productType } from "../store/actions/ActionTypes";
import useSelection from "antd/es/table/hooks/useSelection";


const { Meta } = Card;
const Product = ({data}) => {
    const {id,title,description,image,price,category} = data 
    const dispatch = useDispatch()

    // All Cart product here
    const cartData = useSelector((state)=>state.cart);
    const handleCartProduct = ()  => {
      const condition = cartData.some((item) => item.id == id);
      if (condition) {
        message.warning("This product is already in the cart!");
      }
      else {
        dispatch({type:productType.ADD_CART_PRODUCT, payload:data})
        message.success('Added successfully');
      }
    }

    console.log(cartData);
    


  return (
    <div>
        <Card
    hoverable
    className="p-5"
    cover={<img className="w-[150px] h-[150px] object-contain" alt="example" src={image} />}
  >
    <p>Category : {category}</p>
    <Meta title={title} description={description.slice(0,100)} />
    <div className="flex justify-between py-5 text-2xl">
    <p className="text-red-600">Price : {price}$</p>
    <p className="text-green-700 top-0 right-0 absolute p-5 text-3xl"><ShoppingOutlined onClick={handleCartProduct}/></p>
    </div>
  </Card>
    </div>
  )
}

export default Product