import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import StatsCard from "../pages/StatsCard";

const barData = [
  { name: "Jan", employees: 30 },
  { name: "Feb", employees: 45 },
  { name: "Mar", employees: 60 },
  { name: "Apr", employees: 40 },
  { name: "May", employees: 80 },
  { name: "Jun", employees: 55 },
];

const lineData = [
  { month: "Jan", salary: 3000 },
  { month: "Feb", salary: 3200 },
  { month: "Mar", salary: 2800 },
  { month: "Apr", salary: 3500 },
  { month: "May", salary: 3700 },
  { month: "Jun", salary: 4000 },
];

const Dash = () => {
  return (
    <div>
      <main className="flex-1 p-6">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <h1 className="texxt-3xl font-semibold">Welcome back Ayo</h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3 py-1"
            />
            <div className="h-10 w-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard title="Total Employees" value="120" />
          <StatsCard title="Active Projects" value="8" />
          <StatsCard title="Departments" value="5" />
          <StatsCard title="Avg. Salary" value="$3,500" />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Bar Chart */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold mb-4">Employees Joined (Last 6 Months)</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="employees" fill="#7C3AED" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold mb-4">Average Salary Trend</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="salary"
                  stroke="#7C3AED"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold mb-4">Recent Activity</h2>
          <ul className="divide-y">
            <li className="py-2 flex justify-between">
              <span>John Doe joined the Marketing department</span>
              <span className="text-gray-500 text-sm">2h ago</span>
            </li>
            <li className="py-2 flex justify-between">
              <span>Salary processed for June</span>
              <span className="text-gray-500 text-sm">5h ago</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dash;
