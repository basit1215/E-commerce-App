import React, { useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Drawer, Empty } from "antd";
import CartProduct from "./CartProduct";
import { useSelector } from "react-redux";

const Header = () => {
  const cartData = useSelector((state) => state?.cart);
  // console.log(cartData);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false);
  }, [cartData.length == 0]);

  const totalAmonut = cartData.reduce((acc, current) => {
    return acc + current.price;
  }, 0);

  return (
    <div>
      <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide  z-50 fixed w-[100%] top-0 left-0">
        <div className="flex flex-wrap items-center justify-around gap-5 w-full p-3">
          <a
            className="flex items-center text-4xl font-extrabold"
            href="javascript:void(0)"
          >
            <img src="/productStore.webp" alt="logo" class="w-10" />
            Product Store
          </a>

          <div
            id="collapseMenu"
            className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
                <a href="javascript:void(0)">
                  <img
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    className="w-36"
                  />
                </a>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]"
                >
                  Home
                </a>
              </li>

              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  Feature
                </a>
              </li>

              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  About
                </a>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex max-lg:ml-auto space-x-3">
            <Badge count={cartData?.length}>
              {/* <Button type="" className='bg-gray-500 text-white text-2xl p-5' > */}
              <ShoppingCartOutlined
                onClick={showDrawer}
                className="text-4xl "
              />
              {/* </Button> */}
            </Badge>

            <Drawer title="Your Cart" onClose={onClose} open={open}>
              <div className="h-[500px] overflow-y-scroll">
                {cartData.length > 0 ? (
                  <>
                    {cartData.map((item) => {
                      return (
                        <div className="p-2">
                          <CartProduct key={item.id} data={item} />
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <Empty description="No Product Found" />
                )}
              </div>
              <p className="my-5 text-2xl">
                Total Amount :{" "}
                <span className="text-3xl">{totalAmonut.toFixed(2)}$</span>
              </p>
            </Drawer>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
