import { useEffect, useState } from "react";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { productType } from "../store/actions/ActionTypes";
import { Col, Row, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

const ProductListening = () => {
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(false)
  const allProducts = useSelector((state) => state?.allProducts);
  const getData = async () => {
    const productData = await fetch("https://fakestoreapi.com/products");
    const response = await productData.json();
    dispatch({ type: productType.ALL_PRODUCTS, payload: response });
    setLoading(true);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(allProducts);

  return (
    <div className="bg-pink-300 pt-10 h-auto pb-8">
    <div className="flex flex-wrap gap- justify-between mt-16 pt-12 m-5 p-5">
        {loading ?
      <Row gutter={[16, 16]}>
        {allProducts?.map((item, index) => {
          return (
            <Col key={index} xl={6} lg={6} md={12} sm={12} xs={24}>
              <Product data={item} />
            </Col>
          );
        })}
      </Row>
      : <div className="flex justify-center items-center h-[100vh] w-[100vw] ">
        <Spin  indicator={<LoadingOutlined style={{fontSize:150}} spin />} size="large" />
      </div>    
}
    </div>
    </div>
  );
};

export default ProductListening