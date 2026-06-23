import { useState } from "react";
function RawMaterials() {
    const [showForm, setShowForm] = useState(false);
  return (
    <div className="p-8">

      <h1 className="text-5xl font-bold text-[#0F172A] mb-6">
        Raw Materials
      </h1>

      <div className="grid grid-cols-4 gap-6 mb-10">

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Total Materials</p>
          <h2 className="text-4xl font-bold">245</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Low Stock</p>
          <h2 className="text-4xl font-bold text-red-500">8</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Suppliers</p>
          <h2 className="text-4xl font-bold">15</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Reorder Alerts</p>
          <h2 className="text-4xl font-bold text-yellow-500">4</h2>
        </div>

      </div>
<div className="flex justify-between items-center mb-8">

  <input
    type="text"
    placeholder="Search Material..."
    className="border border-gray-400 rounded-xl px-4 py-3 w-72"
  />

  <button
  onClick={() => setShowForm(true)}
  className="bg-[#C8A96B] text-white px-6 py-3 rounded-xl hover:bg-[#A67C3D] transition-all duration-300"
>
  + Add Material
</button>

</div>
{showForm && (
  <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

    <h2 className="text-2xl font-bold mb-4">
      Add New Raw Material
    </h2>

    <input
      type="text"
      placeholder="Material Name"
      className="border p-3 rounded-lg w-full mb-3"
    />

    <input
      type="text"
      placeholder="Category"
      className="border p-3 rounded-lg w-full mb-3"
    />

    <input
      type="text"
      placeholder="Supplier Name"
      className="border p-3 rounded-lg w-full mb-3"
    />

    <input
      type="number"
      placeholder="Current Stock"
      className="border p-3 rounded-lg w-full mb-3"
    />

    <div className="flex gap-3">

      <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
        Save Material
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
<div className="bg-white rounded-3xl shadow-lg p-8 mb-8">

  <h2 className="text-2xl font-bold mb-6">
    Material Consumption
  </h2>

  <div className="grid grid-cols-3 gap-6">

    <div className="bg-blue-50 p-5 rounded-2xl">
      <h3 className="font-bold">Steel Rod</h3>
      <p>Available: 1000 kg</p>
      <p>Consumed: 250 kg</p>
      <p className="text-green-600 font-semibold">
        Remaining: 750 kg
      </p>
    </div>

    <div className="bg-yellow-50 p-5 rounded-2xl">
      <h3 className="font-bold">Industrial Paint</h3>
      <p>Available: 500 L</p>
      <p>Consumed: 120 L</p>
      <p className="text-green-600 font-semibold">
        Remaining: 380 L
      </p>
    </div>

    <div className="bg-green-50 p-5 rounded-2xl">
      <h3 className="font-bold">Chemical Mix</h3>
      <p>Available: 300 L</p>
      <p>Consumed: 90 L</p>
      <p className="text-green-600 font-semibold">
        Remaining: 210 L
      </p>
    </div>

  </div>

</div>
<div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-xl mb-8">

  <h3 className="font-bold text-red-600 mb-2">
    Low Stock Alerts
  </h3>

  <p>Industrial Paint - Only 25 Units Remaining</p>

  <p>Chemical Mix - Only 15 Units Remaining</p>

</div>
<div className="bg-white rounded-3xl shadow-lg p-8">

  <h2 className="text-2xl font-bold mb-6">
    Raw Materials Inventory
  </h2>

  <table className="w-full">

    <thead>
      <tr className="border-b">
    <th className="text-left py-4">Material ID</th>
<th className="text-left py-4">Material Name</th>
<th className="text-left py-4">Category</th>
<th className="text-left py-4">Supplier</th>
<th className="text-left py-4">Current Stock</th>
<th className="text-left py-4">Min Stock</th>
<th className="text-left py-4">Unit Cost</th>
<th className="text-left py-4">Status</th>
<th className="text-left py-4">Actions</th>
      </tr>
    </thead>

    <tbody>

     <tr className="border-b">
  <td>RM001</td>
  <td>Steel Rod</td>
  <td>Metal</td>
  <td>Tata Metals</td>
  <td>450</td>
  <td>100</td>
  <td>₹120</td>
  <td className="text-green-600">Available</td>

  <td>
    <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg">
      View
    </button>
  </td>
</tr>
<tr className="border-b bg-red-50">
  <td>RM002</td>
  <td>Industrial Paint</td>
  <td>Chemical</td>
  <td>Asian Paints</td>
  <td>25</td>
  <td>50</td>
  <td>₹250</td>
  <td className="text-red-600">Low Stock</td>

  <td>
    <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg">
      View
    </button>
  </td>
</tr>

     <tr>
  <td>RM003</td>
  <td>Chemical Mix</td>
  <td>Chemical</td>
  <td>ChemCorp</td>
  <td>15</td>
  <td>40</td>
  <td>₹180</td>
  <td className="text-red-600">Low Stock</td>

  <td>
    <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg">
      View
    </button>
  </td>
</tr>

    </tbody>

  </table>

</div>
<div className="bg-yellow-50 p-5 rounded-2xl mt-8">

  <h3 className="font-bold text-yellow-700 mb-3">
    Reorder Recommendations
  </h3>

  <ul className="space-y-2">
    <li>Industrial Paint → Reorder 200 Units</li>
    <li>Chemical Mix → Reorder 150 Units</li>
  </ul>

</div>
    </div>
  );
}

export default RawMaterials;