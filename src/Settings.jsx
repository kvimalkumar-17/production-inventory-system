import { useState } from "react";
function Settings() {
    const [darkMode, setDarkMode] = useState(false);
    const [saved, setSaved] = useState(false);
    const [passwordUpdated, setPasswordUpdated] = useState(false);
    const [newPassword, setNewPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [message, setMessage] = useState("");
const [companyName, setCompanyName] = useState("");
const [companyEmail, setCompanyEmail] = useState("");
const [saveMessage, setSaveMessage] = useState("");
  return (
   <div
  className={`p-8 ${
    darkMode
      ? "bg-slate-900 text-white min-h-screen"
      : ""
  }`}
>

      <h1 className="text-5xl font-bold text-[#0F172A] mb-8">
        Settings
      </h1>

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-2xl font-bold mb-6">
          Company Information
        </h2>

        <div className="grid grid-cols-2 gap-6">

         <input
  type="text"
  placeholder="Company Name"
  value={companyName}
  onChange={(e) => setCompanyName(e.target.value)}
  className="border p-3 rounded-xl"
/>

          <input
            type="text"
            placeholder="Company Address"
            className="border p-3 rounded-xl"
          />

          <input
  type="email"
  placeholder="Company Email"
  value={companyEmail}
  onChange={(e) => setCompanyEmail(e.target.value)}
  className="border p-3 rounded-xl"
/>

          <input
            type="text"
            placeholder="GST Number"
            className="border p-3 rounded-xl"
          />

        </div>

       <button
  onClick={() => {
    if (!companyName || !companyEmail) {
      setSaveMessage("Please fill required fields ❌");
    } else if (!companyEmail.includes("@")) {
      setSaveMessage("Enter a valid email ❌");
    } else {
      setSaveMessage("Settings Saved Successfully ✅");
    }
  }}
  className="bg-[#C8A96B] text-white px-6 py-3 rounded-xl mt-6 hover:bg-[#B89555]"
>
  Save Settings
</button>
<p className="mt-4 font-semibold">
  {saveMessage}
</p>
{saved && (
  <p className="text-green-600 mt-4">
    Settings Saved Successfully ✅
  </p>
)}

      </div>
<div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

  <h2 className="text-2xl font-bold mb-6">
    User Roles
  </h2>

  <table className="w-full">

    <thead>
      <tr className="border-b">
        <th className="text-left py-4">User</th>
        <th className="text-left py-4">Role</th>
        <th className="text-left py-4">Access Level</th>
      </tr>
    </thead>

    <tbody>

      <tr className="border-b">
        <td>Admin</td>
        <td>System Administrator</td>
        <td className="text-green-600">Full Access</td>
      </tr>

      <tr className="border-b">
        <td>Manager</td>
        <td>Production Manager</td>
        <td className="text-blue-600">Limited Access</td>
      </tr>

      <tr>
        <td>Operator</td>
        <td>Factory Operator</td>
        <td className="text-yellow-600">View Only</td>
      </tr>

    </tbody>

  </table>

</div>
<div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

  <h2 className="text-2xl font-bold mb-6">
    System Preferences
  </h2>

  <div className="space-y-4">

    <label className="flex items-center gap-3">
      <input type="checkbox" />
      Enable Email Notifications
    </label>

    <label className="flex items-center gap-3">
      <input type="checkbox" />
      Enable Low Stock Alerts
    </label>

    <label className="flex items-center gap-3">
      <input type="checkbox" />
      Auto Generate Reports
    </label>
    <label className="flex items-center gap-3">

  <input
    type="checkbox"
    checked={darkMode}
    onChange={() => setDarkMode(!darkMode)}
  />

  Enable Dark Mode

</label>

  </div>

</div>
<div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

  <h2 className="text-2xl font-bold mb-6">
    Security Settings
  </h2>

  <input
  type="password"
  placeholder="New Password"
  value={newPassword}
  onChange={(e) => setNewPassword(e.target.value)}
  className="border p-3 rounded-xl w-full mb-4"
/>

  <input
  type="password"
  placeholder="Confirm Password"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  className="border p-3 rounded-xl w-full mb-4"
/>
<button
  onClick={() => {
    if (!newPassword || !confirmPassword) {
      setMessage("Please fill all fields ❌");
    } else if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match ❌");
    } else if (newPassword.length < 6) {
      setMessage("Password must be at least 6 characters ❌");
    } else {
      setMessage("Password Updated Successfully ✅");
    }
  }}
  className="bg-red-600 text-white px-6 py-3 rounded-xl"
>
  Update Password
</button>
<p className="mt-4 font-semibold">
  {message}
</p>
{passwordUpdated && (
  <p className="text-green-600 mt-4 font-semibold">
    Password Updated Successfully ✅
  </p>
)}

</div>
<div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

  <h2 className="text-2xl font-bold mb-6">
    Backup & Restore
  </h2>

  <div className="flex gap-4">

  <button
  onClick={() => alert("Backup Created Successfully")}
  className="bg-blue-600 text-white px-6 py-3 rounded-xl"
>
  Backup Data
</button>

   <button
  onClick={() => alert("Data Restored Successfully")}
  className="bg-green-600 text-white px-6 py-3 rounded-xl"
>
  Restore Data
</button>

  </div>

</div>
    </div>
  );
}

export default Settings;