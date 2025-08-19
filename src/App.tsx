import Dash from "./pages/Dash";
import Employees from "./pages/Employees";
import Maindashboard from "./pages/Maindashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetail from "./pages/UserDetail";
import AdminSettings from "./pages/AdminSettings";
import LeaveApproval from "./pages/LeaveApproval";
import Payroll from "./pages/Payroll";
import DepartmentList from "./pages/DepartmentList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Maindashboard />}>
            <Route path="dashboard" element={<Dash />} />
            <Route path="employees" element={<Employees />} />
            <Route path="/userdetail/:id" element={<UserDetail />} />
            <Route path="/adminsetting" element={<AdminSettings />} />
            <Route path="/leave" element={<LeaveApproval />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/department" element={<DepartmentList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
