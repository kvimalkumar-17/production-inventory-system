import { useState } from "react";
function Inventory() {
    const [search, setSearch] = useState("");
  return (
    <div className="p-8">
    <div className="flex justify-between items-center mb-10">

  <div>
    <h1 className="text-5xl font-bold text-[#0F172A]">
      Inventory Management
    </h1>
  </div>

  <div className="flex items-center gap-4">

    <input
      type="text"
      placeholder="Search Item..."
      className="border border-gray-400 rounded-xl px-4 py-3 w-72"
    />

    <button className="bg-[#C8A96B] text-white px-6 py-3 rounded-xl">
      + Add Item
    </button>

  </div>

</div>

<div className="grid grid-cols-4 gap-6 mb-10">

  <div className="bg-white p-6 rounded-2xl shadow">
    <p className="text-gray-500">Total Items</p>
    <h2 className="text-4xl font-bold">655</h2>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow">
    <p className="text-gray-500">Low Stock</p>
    <h2 className="text-4xl font-bold text-red-500">12</h2>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow">
    <p className="text-gray-500">Raw Materials</p>
    <h2 className="text-4xl font-bold">245</h2>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow">
    <p className="text-gray-500">Finished Goods</p>
    <h2 className="text-4xl font-bold">180</h2>
  </div>

</div>

        

      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">
        <h2 className="text-2xl font-bold text-[#0F172A] mb-6">
          Raw Materials Inventory
        </h2>

        <table className="w-full">
          <thead>
        <tr className="border-b">
  <th className="text-left py-4">Item Name</th>
  <th className="text-left py-4">Category</th>
  <th className="text-left py-4">Stock</th>
  <th className="text-left py-4">Status</th>
<th className="text-left py-4 w-40">Actions</th>
</tr>
          </thead>

          <tbody>
           <tr className="border-b">
  <td className="py-4">Steel Rod</td>
  <td>Raw Material</td>
  <td>450</td>
  <td className="text-green-600">Available</td>

  <td className="w-40">
    <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg mr-2">
      Edit
    </button>

    <button className="bg-red-100 text-red-600 px-3 py-1 rounded-lg">
      Delete
    </button>
  </td>
</tr>
              <tr className="border-b bg-red-50">
  <td className="py-4">Industrial Paint</td>
  <td>Chemical</td>
  <td>25</td>
  <td className="text-red-600">Low Stock</td>

  <td className="w-40">
    <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg mr-2">
      Edit
    </button>

    <button className="bg-red-100 text-red-600 px-3 py-1 rounded-lg">
      Delete
    </button>
  </td>
</tr>
           <tr>
  <td className="py-4">Paint Drum</td>
  <td>Finished Goods</td>
  <td>180</td>
  <td className="text-green-600">Available</td>

  <td className="w-40">
    <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg mr-2">
      Edit
    </button>

    <button className="bg-red-100 text-red-600 px-3 py-1 rounded-lg">
      Delete
    </button>
  </td>
</tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Inventory;