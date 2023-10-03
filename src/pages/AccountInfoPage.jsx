import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderHistory from "../components/accountInfo/OrderHistory";
import Favorites from "../components/accountInfo/Favorites";
import UserInfoCard from "../components/accountInfo/UserInfo";

export default function AccountInfoPage({ user }) {
  const navigate = useNavigate();

  console.log("User in useEffect", user);
  if (!user) {
    navigate("/sign-in");
  }

  return (
    <div className="flex pb-5 " style={{ minHeight: "68vh" }}>
      <div className="w-1/3">
        <UserInfoCard user={user} />
      </div>
      <div className="w-1/3">
        <OrderHistory user={user} />
      </div>
      <div className="w-1/3">
        <Favorites user={user} />
      </div>
    </div>
  );
}
