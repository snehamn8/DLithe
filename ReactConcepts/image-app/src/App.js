import React, { useState } from "react";
import Home from "./Home";
import Details from "./Details";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" ? <Home setPage={setPage} /> : <Details setPage={setPage} />}
    </div>
  );
}

export default App;
