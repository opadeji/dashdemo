import { useState } from "react";

interface PayrollRecord {
  id: number;
  employeeName: string;
  position: string;
  baseSalary: number;
  bonus: number;
  deductions: number;
}

const Payroll = () => {
  const [payrollData] = useState<PayrollRecord[]>([
    {
      id: 1,
      employeeName: "John Doe",
      position: "Software Engineer",
      baseSalary: 5000,
      bonus: 500,
      deductions: 200,
    },
    {
      id: 2,
      employeeName: "Jane Smith",
      position: "UI/UX Designer",
      baseSalary: 4500,
      bonus: 300,
      deductions: 150,
    },
    {
      id: 3,
      employeeName: "Michael Johnson",
      position: "HR Manager",
      baseSalary: 5500,
      bonus: 700,
      deductions: 250,
    },
  ]);

  const calculateNetPay = (record: PayrollRecord) => {
    return record.baseSalary + record.bonus - record.deductions;
  };

  return (
    <div className="max-w-[1440px] mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Payroll Management</h1>
      <p className="text-gray-500 mb-6">
        View and manage monthly salary details for employees.
      </p>

      <div className="bg-white shadow rounded-2xl overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4">Employee</th>
              <th className="p-4">Position</th>
              <th className="p-4">Base Salary ($)</th>
              <th className="p-4">Bonus ($)</th>
              <th className="p-4">Deductions ($)</th>
              <th className="p-4">Net Pay ($)</th>
            </tr>
          </thead>
          <tbody>
            {payrollData.map((record) => (
              <tr key={record.id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">{record.employeeName}</td>
                <td className="p-4">{record.position}</td>
                <td className="p-4">${record.baseSalary.toLocaleString()}</td>
                <td className="p-4 text-green-600">
                  +${record.bonus.toLocaleString()}
                </td>
                <td className="p-4 text-red-600">
                  -${record.deductions.toLocaleString()}
                </td>
                <td className="p-4 font-bold">
                  ${calculateNetPay(record).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Section */}
      <div className="mt-6 bg-purple-50 p-4 rounded-lg flex justify-between items-center">
        <h2 className="font-bold">Total Payroll Cost</h2>
        <span className="text-xl font-bold text-purple-700">
          $
          {payrollData
            .reduce((total, record) => total + calculateNetPay(record), 0)
            .toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default Payroll;
