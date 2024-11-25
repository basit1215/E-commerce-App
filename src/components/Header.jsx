import React, { useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Drawer, Empty } from "antd";
import CartProduct from "./CartProduct";
import { useSelector } from "react-redux";

const Header = () => {
  const cartData = useSelector((state) => state?.cart);
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [cartData.length == 0]);

  const totalAmonut = cartData.reduce((acc, current) => {
    return acc + current.price;
  }, 0);

  return (
    <div>
      <header className="flex shadow-md px-4 sm:px-10  font-[sans-serif] min-h-[70px] tracking-wide z-50 fixed w-[100%] top-0 left-0 transition-all duration-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white ">
        <div className="flex flex-wrap items-center justify-around w-full p-3">
          <a
            className="flex items-center lg:text-3xl md:text-2xl sm:text-xl font-extrabold hover:opacity-80 transition-opacity duration-300"
            href="javascript:void(0)"
          >
            <img
              src="/productStore.webp"
              alt="logo"
              className="w-24 xxs:w-20 xxxs:w-16"
            />
            <span className="lg:text-3xl md:text-2xl sm:text-xl xs:text-[20px] xxs:text-[20px] xxxs:text-[20px] ml-2">
              Mega Mart
            </span>
          </a>

          <div
            id="collapseMenu"
            className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
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
                  className=" hover:text-black font-bold transition-all duration-300 text-white block  text-[15px] p-2 rounded-xl"
                >
                  Home
                </a>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  className=" hover:text-black font-bold  transition-all duration-300 text-white block  text-[15px] p-2 rounded"
                >
                  Feature
                </a>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  className=" hover:text-black font-bold  transition-all duration-300 text-white block  text-[15px] p-2 rounded"
                >
                  About
                </a>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  className=" hover:text-black font-bold  transition-all duration-300 text-white block  text-[15px] p-2 rounded"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex max-lg:ml-auto space-x-3">
            <Badge count={cartData?.length}>
              <ShoppingCartOutlined
                onClick={showDrawer}
                className="text-4xl text-white hover:text-gray-200 transition-all duration-300"
              />
            </Badge>

            <Drawer title="Your Cart" className="text-black" style={{backgroundColor: "pink"}} onClose={onClose} open={open}>
              <div className="h-[500px]  overflow-y-scroll">
                {cartData.length > 0 ? (
                  <>
                    {cartData.map((item) => {
                      return (
                        <div className="p-2 " key={item.id}>
                          <CartProduct data={item} />
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <Empty description="No Product Found" />
                )}
              </div>
              <p className="mt-1 text-xl">
                Total Amount :{" "}
                <span className="text-2xl font-semibold ">{totalAmonut.toFixed(2)}$</span>
              </p>
            </Drawer>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header