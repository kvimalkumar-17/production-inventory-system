import { useState } from "react";
function ProductionOrders() {
    const [selectedOrder, setSelectedOrder] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [status, setStatus] = useState("In Progress");
  return (
    <>
    <div className="p-8">
        
      <h1 className="text-5xl font-bold text-[#0F172A] mb-6">
  Production Orders
</h1>

      <div className="grid grid-cols-4 gap-6 mb-10">

  <div className="bg-white p-6 rounded-2xl shadow">
    <p className="text-gray-500">Total Orders</p>
    <h2 className="text-4xl font-bold">45</h2>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow">
    <p className="text-gray-500">Running</p>
    <h2 className="text-4xl font-bold text-blue-500">12</h2>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow">
    <p className="text-gray-500">Completed</p>
    <h2 className="text-4xl font-bold text-green-500">28</h2>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow">
    <p className="text-gray-500">Pending</p>
    <h2 className="text-4xl font-bold text-yellow-500">5</h2>
  </div>

</div>
<div className="flex justify-between items-center mb-8 mt-10">

  <input
    type="text"
    placeholder="Search Order..."
    className="border border-gray-400 rounded-xl px-4 py-3 w-72"
  />

 <button
  onClick={() => setShowForm(!showForm)}
  className="bg-[#C8A96B] text-white px-6 py-3 rounded-xl hover:bg-[#A67C3D] hover:scale-105 transition-all duration-300"
>
  + Add Order
</button>

</div>

{showForm && (
  <div className="bg-white p-6 rounded-2xl shadow mb-8">
    <h3 className="text-xl font-bold mb-4">
      Add New Production Order
    </h3>

    <input
      type="text"
      placeholder="Product Name"
      className="border p-3 rounded-lg w-full mb-3"
    />

    <input
      type="number"
      placeholder="Quantity"
      className="border p-3 rounded-lg w-full mb-3"
    />

    <button
  onClick={() => {
    alert("Production Order Added Successfully ✅");
    setShowForm(false);
  }}
  className="bg-green-500 text-white px-4 py-2 rounded-lg"
>
  Save Order
</button>
  </div>
)}
<div className="bg-white rounded-3xl shadow-lg p-8">

  <h2 className="text-2xl font-bold mb-6">
    Production Orders
  </h2>
{selectedOrder && (
  <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl mb-4">
    <strong>Selected Order:</strong> {selectedOrder}
  </div>
)}
  <table className="w-full">

    <thead>
      <tr className="border-b">
        <th className="text-left py-4">Order ID</th>
        <th className="text-left py-4">Product</th>
        <th className="text-left py-4">Quantity</th>
        <th className="text-left py-4">Progress</th>
    <th className="text-left py-4 pl-16">Material Status</th>
        <th className="text-left py-4">Actions</th>
      </tr>
    </thead>

    <tbody>

      <tr className="border-b">
        <td className="py-4">PO001</td>
        <td>Paint Drum</td>
        <td>500</td>

        <td className="w-64">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-500 h-3 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
          <p className="text-sm mt-1">80%</p>
        </td>

       <td className="pl-16">
  <span className="text-green-600 font-semibold">
    Ready 🟢
  </span>
</td>

        <td>
          <button
  onClick={() => setSelectedOrder("PO001 - Paint Drum")}
  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg"
>
  View
</button>
        </td>
      </tr>
      <tr className="border-b">
  <td className="py-4">PO002</td>
  <td>Steel Rod</td>
  <td>300</td>

  <td className="w-64">
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="bg-yellow-500 h-3 rounded-full"
        style={{ width: "45%" }}
      ></div>
    </div>
    <p className="text-sm mt-1">45%</p>
  </td>
<td className="pl-16">
  <span className="text-yellow-600 font-semibold">
    Running 🟡
  </span>
</td>


  <td>
    <button
  onClick={() => setSelectedOrder("PO002 - Steel Rod")}
  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg"
>
  View
</button>
  </td>
</tr>

<tr className="border-b">
  <td className="py-4">PO003</td>
  <td>Chemical Mix</td>
  <td>200</td>

  <td className="w-64">
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="bg-green-500 h-3 rounded-full"
        style={{ width: "100%" }}
      ></div>
    </div>
    <p className="text-sm mt-1">100%</p>
  </td>

  <td className="pl-16">
  <span className="text-green-600 font-semibold">
    Completed 🟢
  </span>
</td>

  <td>
   <button
  onClick={() => setSelectedOrder("PO003 - Chemical Mix")}
  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg"
>
  View
</button>
  </td>
</tr>

<tr>
  <td className="py-4">PO004</td>
  <td>Paint Can</td>
  <td>150</td>

  <td className="w-64">
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="bg-red-500 h-3 rounded-full"
        style={{ width: "20%" }}
      ></div>
    </div>
    <p className="text-sm mt-1">20%</p>
  </td>

<td className="pl-16">
  <span className="text-red-600 font-semibold">
    Delayed 🔴
  </span>
</td>

  <td>
   <button
  onClick={() => setSelectedOrder("PO004 - Paint Can")}
  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg"
>
  View
</button>
  </td>
</tr>

    </tbody>

  </table>

</div>

    </div>
    <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">

  
  <div className="flex justify-between items-center mb-6">

  <h2 className="text-2xl font-bold">
    Production Workflow Status
  </h2>

  <select
    value={status}
    onChange={(e) => setStatus(e.target.value)}
    className="border rounded-lg px-4 py-2"
  >
    <option>Not Started</option>
    <option>In Progress</option>
    <option>Completed</option>
    <option>On Hold</option>
  </select>

</div>

  <div className="grid grid-cols-4 gap-6">

    <div className="bg-gray-100 p-5 rounded-2xl">
      <h3 className="font-bold mb-3">Not Started</h3>

      <div className="bg-white p-3 rounded-xl shadow">
        Packaging
      </div>
    </div>

    <div className="bg-blue-50 p-5 rounded-2xl">
      <h3 className="font-bold mb-3">In Progress</h3>

      <div className="bg-white p-3 rounded-xl shadow">
        Mixing
      </div>
    </div>

    <div className="bg-green-50 p-5 rounded-2xl">
      <h3 className="font-bold mb-3">Completed</h3>

      <div className="bg-white p-3 rounded-xl shadow mb-2">
        Raw Material Collection
      </div>

      <div className="bg-white p-3 rounded-xl shadow">
        Cleaning
      </div>
    </div>

    <div className="bg-red-50 p-5 rounded-2xl">
      <h3 className="font-bold mb-3">On Hold</h3>

      <div className="bg-white p-3 rounded-xl shadow">
        Moulding
      </div>
    </div>

  </div>

</div>

    </>
  );
}

export default ProductionOrders;