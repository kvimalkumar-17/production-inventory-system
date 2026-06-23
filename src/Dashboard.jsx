import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  FaBoxes,
  FaExclamationTriangle,
  FaIndustry,
  FaClipboardCheck
} from "react-icons/fa";
import { useState } from "react";
import Inventory from "./Inventory";
import ProductionOrders from "./ProductionOrders";
import RawMaterials from "./RawMaterials";
function Dashboard() {
    const [activePage, setActivePage] = useState("dashboard");
  return (
    <div className="min-h-screen bg-[#F5F1EB] flex">
{/* Sidebar */}

<div className="w-64 bg-[#0F172A] text-white min-h-screen p-6">

  <h1 className="text-2xl font-bold mb-10">
    SEOLVIA
  </h1>

  <ul className="space-y-4">

   <li
  onClick={() => setActivePage("dashboard")}
  className={`px-4 py-3 rounded-xl cursor-pointer ${
    activePage === "dashboard"
      ? "bg-[#C8A96B] text-[#0F172A] font-semibold"
      : "hover:bg-slate-700"
  }`}
>
  Dashboard
</li>

<li
  onClick={() => setActivePage("inventory")}
  className={`px-4 py-3 rounded-xl cursor-pointer ${
    activePage === "inventory"
      ? "bg-[#C8A96B] text-[#0F172A] font-semibold"
      : "hover:bg-slate-700"
  }`}
>
  Inventory
</li>

  <li
  onClick={() => setActivePage("rawmaterials")}
  className={`px-4 py-3 rounded-xl cursor-pointer ${
    activePage === "rawmaterials"
      ? "bg-[#C8A96B] text-[#0F172A] font-semibold"
      : "hover:bg-slate-700"
  }`}
>
  Raw Materials
</li>
<li
  onClick={() => setActivePage("production")}
  className={`px-4 py-3 rounded-xl cursor-pointer ${
    activePage === "production"
      ? "bg-[#C8A96B] text-[#0F172A] font-semibold"
      : "hover:bg-slate-700"
  }`}
>
  Production Orders
</li>

    <li className="px-4 py-3 hover:bg-slate-700 rounded-xl cursor-pointer">
      Employees
    </li>

    <li className="px-4 py-3 hover:bg-slate-700 rounded-xl cursor-pointer">
      Reports
    </li>

    <li className="px-4 py-3 hover:bg-slate-700 rounded-xl cursor-pointer">
      Settings
    </li>

  </ul>

</div>
      {/* Top Navbar */}
     <div className="flex-1">
      <nav className="bg-[#0F172A] text-white px-8 py-4 flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold">
            SEOLVIA Products
          </h1>
        </div>

        <div className="flex items-center gap-4">

  <input
    type="text"
    placeholder="Search inventory..."
    className="px-4 py-2 rounded-xl bg-[#FAF7F2]
text-[#0F172A] w-64"
  />

  <button className="bg-white text-[#0F172A] px-4 py-2 rounded-xl">
    🔔
  </button>

  <div className="bg-[#C8A96B] text-[#0F172A] px-4 py-2 rounded-xl font-semibold">
    Admin
  </div>

</div>

      </nav>

      {/* Dashboard Content */}

      <div className="p-8">
{activePage === "inventory" ? (
  <Inventory />
) : activePage === "production" ? (
  <ProductionOrders />
) : activePage === "rawmaterials" ? (
  <RawMaterials />
) : (
  <>
        <h2 className="text-4xl font-bold text-[#0F172A] mb-8">
          Dashboard Overview
        </h2>
        <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] rounded-3xl p-8 mb-8 text-white shadow-xl">
  <div className="flex justify-between items-center">

    <div>
      <h3 className="text-3xl font-bold">
        Production Status
      </h3>

      <p className="text-gray-300 mt-2">
        Live Manufacturing Overview
      </p>

      <div className="flex gap-10 mt-6">

        <div>
          <p className="text-sm text-gray-400">
            Today's Production
          </p>
          <h4 className="text-3xl font-bold">
            1,250
          </h4>
        </div>

        <div>
          <p className="text-sm text-gray-400">
            Active Orders
          </p>
          <h4 className="text-3xl font-bold text-green-400">
            34
          </h4>
        </div>

        <div>
          <p className="text-sm text-gray-400">
            Efficiency
          </p>
          <h4 className="text-3xl font-bold text-yellow-400">
            94%
          </h4>
          
        </div>
        

      </div>
    </div>

  </div>
 
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

  <div className="bg-white p-6 rounded-2xl shadow-mdhover:-translate-y-2
hover:shadow-2xl
transition-all
duration-300
cursor-pointer">
   <div className="flex justify-between items-center">

  <h3 className="text-gray-500 text-sm">
    Total Raw Materials
  </h3>

  <FaBoxes className="text-[#C8A96B] text-2xl" />

</div>
    <p className="text-3xl font-bold text-[#0F172A] mt-2">245</p>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow-mdhover:-translate-y-2
hover:shadow-2xl
transition-all
duration-300
cursor-pointer">
    <div className="flex justify-between items-center">

  <h3 className="text-gray-500 text-sm">
    Low Stock Materials
  </h3>

  <FaExclamationTriangle className="text-red-500 text-2xl" />

</div>
    <p className="text-3xl font-bold text-red-500 mt-2">12</p>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow-mdhover:-translate-y-2
hover:shadow-2xl
transition-all
duration-300
cursor-pointer">
    <div className="flex justify-between items-center">

  <h3 className="text-gray-500 text-sm">
    Total Products
  </h3>

  <FaIndustry className="text-[#C8A96B] text-2xl" />

</div>
    <p className="text-3xl font-bold text-[#0F172A] mt-2">180</p>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow-mdhover:-translate-y-2
hover:shadow-2xl
transition-all
duration-300
cursor-pointer">
    <div className="flex justify-between items-center">

  <h3 className="text-gray-500 text-sm">
    Active Production Orders
  </h3>

  <FaClipboardCheck className="text-green-500 text-2xl" />

</div>
    <p className="text-3xl font-bold text-green-600 mt-2">34</p>
  </div>

</div>

<div className="bg-white rounded-3xl p-8 shadow-lg mt-8">
  <h2 className="text-3xl font-bold text-[#0F172A] mb-6">
    Active Production Orders
  </h2>

  <table className="w-full">
    <thead>
      <tr className="border-b">
        <th className="text-left p-4">Order ID</th>
        <th className="text-left p-4">Product</th>
        <th className="text-left p-4">Status</th>
        <th className="text-left p-4">Quantity</th>
      </tr>
    </thead>

    <tbody>
      <tr className="border-b hover:bg-slate-50">
        <td className="p-4">PO-101</td>
        <td className="p-4">Steel Rod</td>
        <td className="p-4 text-green-600">Completed</td>
        <td className="p-4">500</td>
      </tr>

      <tr className="border-b hover:bg-slate-50">
        <td className="p-4">PO-102</td>
        <td className="p-4">Paint Drum</td>
        <td className="p-4 text-red-500">Pending</td>
        <td className="p-4">200</td>
      </tr>

      <tr className="hover:bg-slate-50">
        <td className="p-4">PO-103</td>
        <td className="p-4">Chemical Mix</td>
        <td className="p-4 text-blue-500">Running</td>
        <td className="p-4">150</td>
      </tr>
    </tbody>
  </table>
  
</div>
<div className="bg-white rounded-3xl p-8 shadow-lg mt-8">

  <h2 className="text-3xl font-bold text-[#0F172A] mb-6">
    Live Activity Feed
  </h2>

  <div className="space-y-6">

    <div className="flex items-start gap-4">
      <div className="w-4 h-4 bg-green-500 rounded-full mt-2"></div>
      <div>
        <p className="font-semibold">
          Production Order #PO-101 Completed
        </p>
        <p className="text-gray-500 text-sm">
          09:45 AM
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <div className="w-4 h-4 bg-yellow-500 rounded-full mt-2"></div>
      <div>
        <p className="font-semibold">
          Steel Rod Inventory Updated
        </p>
        <p className="text-gray-500 text-sm">
          09:30 AM
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <div className="w-4 h-4 bg-red-500 rounded-full mt-2"></div>
      <div>
        <p className="font-semibold">
          Industrial Paint Running Low
        </p>
        <p className="text-gray-500 text-sm">
          09:10 AM
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <div className="w-4 h-4 bg-blue-500 rounded-full mt-2"></div>
      <div>
        <p className="font-semibold">
          New Production Order Created
        </p>
        <p className="text-gray-500 text-sm">
          08:45 AM
        </p>
      </div>
    </div>

 </div>
</div>
  </>
)}
      </div>
      </div>
    </div>
  );
}
export default Dashboard;