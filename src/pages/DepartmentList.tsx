import React, { useEffect, useState } from "react";

type Department = {
  id: number;
  name: string;
  description?: string;
};

const DepartmentList = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        setLoading(true);
        const data: Department[] = [
          {
            id: 1,
            name: "Human Resources",
            description: "Handles employee relations and workplace policies.",
          },
          {
            id: 2,
            name: "Engineering",
            description: "Responsible for building and maintaining products.",
          },
          {
            id: 3,
            name: "Marketing",
            description: "Promotes brand awareness and drives user engagement.",
          },
        ];
        await new Promise((res) => setTimeout(res, 1000));
        setDepartments(data);
      } catch (err) {
        setError("Failed to load departments");
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading departments...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500 font-semibold text-lg">{error}</p>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800">Departments</h1>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition-colors duration-200">
          + Add Department
        </button>
      </div>

      {/* Departments Grid */}
      {departments.length === 0 ? (
        <p className="text-gray-500 text-center">No departments found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map(({ id, name, description }) => (
            <div
              key={id}
              className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 p-5"
            >
              <h2 className="text-xl font-semibold text-blue-700">{name}</h2>
              {description && (
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {description}
                </p>
              )}
              <div className="mt-4 flex justify-end">
                <button className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-150">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DepartmentList;
