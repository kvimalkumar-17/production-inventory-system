import { useState } from "react";
function Employees() {
    const [selectedEmployee, setSelectedEmployee] = useState("");
    const [showForm, setShowForm] = useState(false);
  return (
    <div className="p-8">

      <h1 className="text-5xl font-bold text-[#0F172A] mb-6">
        Employee Management
      </h1>

      <div className="grid grid-cols-4 gap-6 mb-10">

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Total Employees</p>
          <h2 className="text-4xl font-bold">120</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Present Today</p>
          <h2 className="text-4xl font-bold text-green-500">108</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">On Leave</p>
          <h2 className="text-4xl font-bold text-yellow-500">8</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">New Joiners</p>
          <h2 className="text-4xl font-bold text-blue-500">4</h2>
        </div>

      </div>
<div className="flex justify-between items-center mb-8">

  <input
    type="text"
    placeholder="Search Employee..."
    className="border border-gray-400 rounded-xl px-4 py-3 w-72"
  />

<button
  onClick={() => setShowForm(true)}
  className="bg-[#C8A96B] text-white px-6 py-3 rounded-xl hover:bg-[#A67C3D]"
>
  + Add Employee
</button>

</div>
{showForm && (
  <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

    <h2 className="text-2xl font-bold mb-4">
      Add New Employee
    </h2>

    <input
      type="text"
      placeholder="Employee Name"
      className="border p-3 rounded-lg w-full mb-3"
    />

    <input
      type="text"
      placeholder="Department"
      className="border p-3 rounded-lg w-full mb-3"
    />

    <input
      type="text"
      placeholder="Role"
      className="border p-3 rounded-lg w-full mb-3"
    />

    <input
      type="email"
      placeholder="Email Address"
      className="border p-3 rounded-lg w-full mb-3"
    />

    <div className="flex gap-3">

      <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
        Save Employee
      </button>

      <button
        onClick={() => setShowForm(false)}
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Cancel
      </button>

    </div>

  </div>
)}
<div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-xl mb-8">

  <h3 className="font-bold text-green-700">
    Workforce Status
  </h3>

  <p>
    108 Employees Present • Attendance Rate 90%
  </p>

</div>
<div className="bg-white rounded-3xl shadow-lg p-8">

  <h2 className="text-2xl font-bold mb-6">
    Employee Directory
  </h2>
{selectedEmployee && (
  <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl mb-4">
    <strong>Selected Employee:</strong> {selectedEmployee}
  </div>
)}
  <table className="w-full">

    <thead>
      <tr className="border-b">
        <th className="text-left py-4">Employee ID</th>
        <th className="text-left py-4">Name</th>
        <th className="text-left py-4">Department</th>
        <th className="text-left py-4">Role</th>
        <th className="text-left py-4">Attendance</th>
        <th className="text-left py-4">Status</th>
        <th className="text-left py-4">Actions</th>
      </tr>
    </thead>

    <tbody>

      <tr className="border-b">
        <td>EMP001</td>
        <td>Rajesh Kumar</td>
        <td>Production</td>
        <td>Supervisor</td>
        <td>96%</td>
        <td className="text-green-600">Present</td>
        <td>
        <button
  onClick={() =>
    setSelectedEmployee("EMP001 - John Smith - Production Manager")
  }
  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg"
>
  View
</button>
        </td>
      </tr>

      <tr className="border-b">
        <td>EMP002</td>
        <td>Priya Sharma</td>
        <td>Inventory</td>
        <td>Manager</td>
        <td>92%</td>
        <td className="text-green-600">Present</td>
        <td>
          <button
  onClick={() =>
    setSelectedEmployee("EMP002 - Sarah Johnson - Quality Analyst")
  }
  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg"
>
  View
</button>
        </td>
      </tr>

      <tr>
        <td>EMP003</td>
        <td>Arun Raj</td>
        <td>Quality</td>
        <td>Inspector</td>
        <td>88%</td>
        <td className="text-yellow-600">On Leave</td>
        <td>
          <button
  onClick={() =>
    setSelectedEmployee("EMP003 - Michael Lee - Store Supervisor")
  }
  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg"
>
  View
</button>
        </td>
      </tr>

    </tbody>

  </table>

</div>
<div className="bg-white rounded-3xl shadow-lg p-6 mt-8">

  <h2 className="text-2xl font-bold mb-4">
    Employee Performance Spotlight
  </h2>

  <div className="flex justify-between">

    <div>
      <p className="text-gray-500">Top Performer</p>
      <h3 className="text-xl font-bold">
        Rajesh Kumar
      </h3>
    </div>

    <div>
      <p className="text-gray-500">Attendance</p>
      <h3 className="text-xl font-bold text-green-600">
        96%
      </h3>
    </div>

    <div>
      <p className="text-gray-500">Productivity Score</p>
      <h3 className="text-xl font-bold text-blue-600">
        9.5 / 10
      </h3>
    </div>

  </div>

</div>
    </div>
  );
}

export default Employees;