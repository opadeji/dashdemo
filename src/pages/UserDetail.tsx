import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { iUser } from "../interface/interface";
import axios from "axios";

const UserDetail = () => {
  const { id } = useParams();
  const [getSingleUser, setGetSingleUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);

  const singleData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://user-data-ci61.onrender.com/user/viewoneuser/${id}`
      );
      setGetSingleUser(res.data.data);
    } catch (err) {
      console.error("Error fetching user:", err);
      setGetSingleUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      singleData();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg">Loading user details...</p>
      </div>
    );
  }

  if (!getSingleUser) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 font-semibold">User not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-[900px] mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        User Detail
      </h1>

      <section className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="h-24 w-24 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex justify-center items-center text-white text-4xl font-bold mb-4">
          {getSingleUser.username?.charAt(0)}
        </div>

        {/* Name & Email */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">
          {getSingleUser.username}
        </h2>
        <p className="text-gray-500 mb-6">{getSingleUser.email}</p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left w-full max-w-md">
          <div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-medium text-gray-800">
              {getSingleUser.address || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Age</p>
            <p className="font-medium text-gray-800">
              {getSingleUser.age || "N/A"}
            </p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-sm text-gray-500">Bio</p>
            <p className="font-medium text-gray-800">
              {getSingleUser.bio || "No bio provided."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserDetail;
