import { Fragment } from "react";

function SmallWineDetail({ wine }) {
  return (
    <Fragment>
      <img src={wine.img} alt="wine photo" />
      <h1>{wine.WineName}</h1>
      <h3>{wine.Price}</h3>
      <h3>{wine.ProductType}</h3>
      <p>{wine.Description}</p>
    </Fragment>
  );
}

export default SmallWineDetail;
