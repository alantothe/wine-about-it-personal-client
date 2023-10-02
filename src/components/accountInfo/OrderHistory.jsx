import { useState, useEffect } from "react";
import { Card, CardBody } from "@material-tailwind/react";
import { orderByUser } from "../../api/orders";

export default function OrderHistory({ user }) {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const userOrders = await orderByUser(user.id);
    setOrders(userOrders);
  };

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  return (
    <div>
      {orders ? (
        <Card className="w-full bg-gray-100" style={{ height: "55vh" }}>
          <div className="bg-black text-white text-center py-6 font-bold text-3xl">
            Order History
          </div>
          <CardBody className="overflow-scroll">
            <div className=" py-4 text-gray-600">
              {orders.map((order, index) => (
                <div key={index}>
                  <h1 style={{ color: "rgb(159, 0, 63)" }}>
                    Order ID: {order._id} <br />
                    Cart Quantity: {order.cartQuantity} <br />
                    Total: ${order.total} <br />
                    Shipping Status: {order.isShipped
                      ? " Shipped"
                      : " Pending"}{" "}
                    <br />
                    Delivered: {order.isDelivered ? "Yes" : "No"}
                  </h1>
                  <hr className="w-full h-0.5 bg-gray-300" />
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      ) : (
        <Card className="w-full bg-gray-100" style={{ height: "55vh" }}>
          <div className="bg-black text-white text-center py-6 font-bold text-3xl">
            Order History
          </div>
          <CardBody className="overflow-scroll">
            <div className=" py-4 text-gray-600">
              <h1 className=" text-center" style={{ color: "rgb(159, 0, 63)" }}>
                No Orders
              </h1>
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
}
