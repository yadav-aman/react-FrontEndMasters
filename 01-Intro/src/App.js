import React from "react";
// we dont need to import react with JSX but it's not working with Parcel

import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />;
    </div>
  );
};

render(<App />, document.getElementById("root"));
