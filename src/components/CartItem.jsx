import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const CartItem = ({ item, setFlag, flag, calculateTotal }) => {
  const [{ cartItems }, dispatch] = useStateValue();
  const [qty, setQty] = useState(item.qty);

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: cartItems,
    });
  };

  const updateQty = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
      cartItems.forEach((cartItem) => {
        if (cartItem.id === id) {
          cartItem.qty += 1;
        }
      });
      setFlag(flag + 1);
    } else {
      if (qty === 1) {
        const updatedItems = cartItems.filter((cartItem) => cartItem.id !== id);
        dispatch({
          type: actionType.SET_CARTITEMS,
          cartItems: updatedItems,
        });
        setFlag(flag + 1);
      } else {
        setQty(qty - 1);
        cartItems.forEach((cartItem) => {
          if (cartItem.id === id) {
            cartItem.qty -= 1;
          }
        });
        setFlag(flag + 1);
      }
    }
    cartDispatch();
    calculateTotal();
  };

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
      <img
        src={item?.imageURL}
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        alt=""
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item?.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          {parseFloat(item?.price) * qty} 000 VND
        </p>
      </div>

      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("remove", item?.id)}
        >
          <BiMinus className="text-gray-50 " />
        </motion.div>

        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          {qty}
        </p>

        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("add", item?.id)}
        >
          <BiPlus className="text-gray-50 " />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
