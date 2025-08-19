import { Link } from "react-router-dom";

const Side = () => {
  return (
    <div className="bg-gray-100 h-[100vh] px-5 flex justify-center items-center">
      <ul className="leading-20">
        <Link to="/dashboard">
          {" "}
          <li>dashboard</li>
        </Link>
        <Link to="/employees">
          {" "}
          <li>employees</li>
        </Link>
        <Link to="/leave">
          {" "}
          <li>leave</li>
        </Link>
        <Link to="/adminsetting">
          <li>settings</li>
        </Link>
        <Link to="/department">
          {" "}
          <li>departments</li>
        </Link>
        <Link to="/payroll">
          <li>Payroll</li>
        </Link>
      </ul>
    </div>
  );
};

export default Side;
