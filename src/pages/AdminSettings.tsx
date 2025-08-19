import { useState } from "react";

const AdminSettings = () => {
  const [companyName, setCompanyName] = useState("TechCorp Inc.");
  const [companyEmail, setCompanyEmail] = useState("hr@techcorp.com");

  const [timezone, setTimezone] = useState("GMT");
  const [themeColor, setThemeColor] = useState("#7C3AED");

  return (
    <div className="max-w-[1440px] mx-auto p-6 space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold">Admin Settings</h1>
        <p className="text-gray-500">
          Manage company details, preferences, and appearance.
        </p>
      </div>

      {/* Company Info Card */}
      <div className="bg-white rounded-2xl shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold border-b pb-2">
          Company Information
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block font-medium">Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block font-medium">Company Email</label>
            <input
              type="email"
              value={companyEmail}
              onChange={(e) => setCompanyEmail(e.target.value)}
              className="w-full border rounded-lg p-2"
            />
          </div>
        </div>
      </div>

      {/* Preferences Card */}
      <div className="bg-white rounded-2xl shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold border-b pb-2">Preferences</h2>

        <div className="space-y-4">
          <div>
            <label className="block font-medium">Timezone</label>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="w-full border rounded-lg p-2"
            >
              <option value="GMT">GMT</option>
              <option value="EST">EST</option>
              <option value="PST">PST</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Theme Color</label>
            <input
              type="color"
              value={themeColor}
              onChange={(e) => setThemeColor(e.target.value)}
              className="w-16 h-10 border rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;
