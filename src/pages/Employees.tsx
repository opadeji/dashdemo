import { useEffect, useState } from "react";
import type { iUser } from "../interface/interface";
import { Link } from "react-router-dom";
import axios from "axios";

const Employees = () => {
  const [getUser, setGetUser] = useState<iUser[]>([]);
  const [loading, setLoading] = useState(true);
  const getMyUser = async () => {
    try {
      const res = await axios.get(
        "https://user-data-ci61.onrender.com/user/viewalluser"
      );
      setGetUser(res.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMyUser();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg">Loading Employees...</p>
      </div>
    );
  }
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        All Employees
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {getUser?.map((user: iUser) => (
          <Link to={`/userdetail/${user._id}`} key={user._id} className="group">
            <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold">
                {user.username?.charAt(0)}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                  {user.username}
                </h2>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Employees;
