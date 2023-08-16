import { useSelector } from "react-redux";
import { getWine } from "../api/api";
import { useState, useEffect } from "react";
import { Button, Typography } from "@material-tailwind/react";
import WineDetailShopping from "../components/WineDetailShopping";
import Checkout from "../components/Checkout";

export default function ShoppingCart({ user }) {
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const items = useSelector((state) => state.cart.items);
  const [theFetchedWines, setTheFetchedWines] = useState([]);
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    fetchWines();
  }, [user]);

  const fetchWines = async () => {
    const cartItems = items.map((item) => item._id);

    const wineByIdPromise = cartItems.map(getWine);

    const fetchedWines = await Promise.all(wineByIdPromise);
    setTheFetchedWines(fetchedWines);
  };

  const itemsInfo = theFetchedWines.map((wine) => {
    const item = items.find((item) => item._id === wine._id);
    return { ...wine, quantity: item.quantity };
  });

  const handleCheckout = () => {
    setCheckout(true);
  };

  const handleRemoveState = () => {
    localStorage.removeItem("persist:root");
    window.location.reload();
  };

  return (
    <div>
      {!checkout ? (
        <div>
          <Typography
            className="text-4xl py-5 pl-5 font-black"
            style={{
              fontFamily: "Wine Date",
              color: "rgb(96, 20, 30)",
            }}
          >
            Shopping Cart
          </Typography>
          <div>
            {itemsInfo.map((item, key) => (
              <WineDetailShopping key={item._id} index={key} itemInfo={item} />
            ))}
          </div>
          <div className="flex">
            <div className="flex grow"></div>
            <div
              className="flex flex-col p-5"
              style={{ color: "rgb(96, 20, 30)" }}
            >
              <Typography className="text-lg font-semibold">
                Cart Quantity: {cartQuantity}
              </Typography>

              <p className="text-lg text-green-500 font-semibold">
                Cart Total: {cartTotal} USD
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex grow"></div>
            <div className="flex flex-row px-5 pb-5">
              <Button
                variant="outlined"
                className="rounded-none w-32 mr-5"
                onClick={handleRemoveState}
              >
                Clear Cart
              </Button>
              <Button
                variant="outlined"
                className="rounded-none w-32"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Checkout
          user={user}
          itemsInfo={itemsInfo}
          cartQuantity={cartQuantity}
          cartTotal={cartTotal}
        />
      )}
    </div>
  );
}
