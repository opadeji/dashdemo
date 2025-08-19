import { useState } from "react";

interface LeaveRequest {
  id: number;
  employeeName: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  status: "Pending" | "Approved" | "Rejected";
}

const LeaveApproval = () => {
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([
    {
      id: 1,
      employeeName: "Alice Johnson",
      leaveType: "Annual",
      startDate: "2025-08-15",
      endDate: "2025-08-20",
      status: "Pending",
    },
    {
      id: 2,
      employeeName: "Mark Smith",
      leaveType: "Sick",
      startDate: "2025-08-05",
      endDate: "2025-08-07",
      status: "Pending",
    },
    {
      id: 3,
      employeeName: "billgates",
      leaveType: "wedding",
      startDate: "2025-08-05",
      endDate: "2025-08-07",
      status: "Pending",
    },
    {
      id: 4,
      employeeName: "ogunmepon ",
      leaveType: "death",
      startDate: "2025-08-05",
      endDate: "2025-08-07",
      status: "Pending",
    },
  ]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Leave Requests</h1>

      <table className="w-full border border-gray-200 shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Employee</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Dates</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map((req) => (
            <tr key={req.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{req.employeeName}</td>
              <td className="p-3">{req.leaveType}</td>
              <td className="p-3">
                {req.startDate} → {req.endDate}
              </td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-full text-sm font-semibold 
                  ${
                    req.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : req.status === "Rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {req.status}
                </span>
              </td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() =>
                    setLeaveRequests((prev) =>
                      prev.map((item) =>
                        item.id === req.id
                          ? {
                              ...item,
                              status:
                                item.status === "Approved"
                                  ? "Pending"
                                  : "Approved",
                            }
                          : item
                      )
                    )
                  }
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  {req.status === "Approved" ? "Undo" : "Approve"}
                </button>

                <button
                  onClick={() =>
                    setLeaveRequests((prev) =>
                      prev.map((item) =>
                        item.id === req.id
                          ? {
                              ...item,
                              status:
                                item.status === "Rejected"
                                  ? "Pending"
                                  : "Rejected",
                            }
                          : item
                      )
                    )
                  }
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  {req.status === "Rejected" ? "Undo" : "Reject"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveApproval;
