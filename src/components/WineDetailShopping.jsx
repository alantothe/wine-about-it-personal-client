import { useNavigate } from "react-router-dom";
import Counter from "./Counter";
export default function WineDetailShopping({ itemInfo }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div
        className="w-screen flex items-center p-5 bg-gray-100"
        style={{
          borderTop: "1px solid rgb(96, 20, 30)",
          borderBottom: "1px solid rgb(96, 20, 30)",
          marginTop: "-1px",
        }}
      >
        <div className="w-1/2 flex items-center">
          <img
            className="w-32 h-32 object-contain"
            src={itemInfo.img}
            alt={itemInfo.WineName}
          />
          <div className="flex flex-col justify-between ml-4">
            <h3
              onClick={() => navigate(`/search/wine-detail/${itemInfo._id}`)}
              className="text-2xl font-semibold cursor-pointer hover:underline"
              style={{ color: "rgb(96, 20, 30)" }}
            >
              {itemInfo.WineName}
            </h3>
            <p style={{ color: "rgb(96, 20, 30)" }}>${itemInfo.Price} each</p>
            <p style={{ color: "rgb(96, 20, 30)" }}>
              Quantity: {itemInfo.quantity}
            </p>
            <p className="text-green-500 font-semibold">
              Item Total: ${Math.floor(itemInfo.Price * itemInfo.quantity)}
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center mr-5">
          <Counter count={itemInfo.quantity} />
        </div>
      </div>
    </div>
  );
}
