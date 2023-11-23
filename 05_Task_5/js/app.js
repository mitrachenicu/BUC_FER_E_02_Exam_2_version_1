import React from "react";
import { createRoot } from "react-dom/client";

const UserDetails = (props) => {
    return (<div class="card">
    <div>
      <h5>{props.name} {props.surname}</h5>
      <div>{props.address}</div>
      <div>{props.postalcode} {props.city}</div>
    </div>
  </div>
  )
};

const user = {
    name: "Jon",
    surname: "Alfred",
    address: "street 42",
    postalcode: "235635",
    city: "Bucuresti",
}

const App =() => {
    return <UserDetails name={user.name} surname={user.surname} address={user.address} postalcode={user.postalcode} city={user.city}/>
};

/**
 * Do not modify the code below!
 */
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
