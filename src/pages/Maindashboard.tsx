import { Outlet } from "react-router-dom";

// import Dash from "./Dash";
import Side from "./Side";

const Maindashboard = () => {
  return (
    <div className="grid grid-cols-[220px_1fr]">
      <Side />
      <Outlet />
    </div>
  );
};

export default Maindashboard;
