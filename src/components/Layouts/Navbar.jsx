import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { useTotalPrice } from "../../context/TotalPriceContext";

export const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-end h-20 bg-blue-600 items-center px-10 text-white">
      {username}
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
        Item : {totalCart} | price : $ {total}
      </div>
      <Button classname="ml-5 bg-black" onClick={handleLogout}>
        Log Out
      </Button>
      
    </div>
  );
};
