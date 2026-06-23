import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
function Reports() {
    const exportToExcel = () => {
  const data = [
    {
      ReportID: "RPT001",
      Type: "Production Report",
      GeneratedBy: "Admin",
      Date: "24-06-2026",
      Status: "Completed",
    },
    {
      ReportID: "RPT002",
      Type: "Inventory Report",
      GeneratedBy: "Admin",
      Date: "24-06-2026",
      Status: "Completed",
    },
    {
      ReportID: "RPT003",
      Type: "Employee Report",
      GeneratedBy: "Manager",
      Date: "24-06-2026",
      Status: "Pending",
    },
  ];

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Reports"
  );

  const excelBuffer = XLSX.write(
    workbook,
    {
      bookType: "xlsx",
      type: "array",
    }
  );

  const file = new Blob(
    [excelBuffer],
    {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    }
  );

  saveAs(file, "BusinessReports.xlsx");
};
  return (
    <div className="p-8">

      <h1 className="text-5xl font-bold text-[#0F172A] mb-6">
        Reports & Analytics
      </h1>

      <div className="grid grid-cols-4 gap-6 mb-10">

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Production Reports</p>
          <h2 className="text-4xl font-bold">45</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Inventory Reports</p>
          <h2 className="text-4xl font-bold">28</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Employee Reports</p>
          <h2 className="text-4xl font-bold">12</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Invoices Generated</p>
          <h2 className="text-4xl font-bold">156</h2>
        </div>

      </div>
      <div className="grid grid-cols-4 gap-6 mb-8">

  <div className="bg-green-50 p-6 rounded-2xl shadow">
    <p className="text-gray-500">Revenue</p>
    <h2 className="text-3xl font-bold text-green-600">
      ₹12.5L
    </h2>
  </div>

  <div className="bg-blue-50 p-6 rounded-2xl shadow">
    <p className="text-gray-500">Production Efficiency</p>
    <h2 className="text-3xl font-bold text-blue-600">
      92%
    </h2>
  </div>

  <div className="bg-yellow-50 p-6 rounded-2xl shadow">
    <p className="text-gray-500">Inventory Accuracy</p>
    <h2 className="text-3xl font-bold text-yellow-600">
      98%
    </h2>
  </div>

  <div className="bg-purple-50 p-6 rounded-2xl shadow">
    <p className="text-gray-500">Employee Productivity</p>
    <h2 className="text-3xl font-bold text-purple-600">
      89%
    </h2>
  </div>

</div>
<div className="bg-white rounded-3xl shadow-lg p-8 mb-8">

  <h2 className="text-2xl font-bold mb-6">
    Monthly Business Analytics
  </h2>

  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={[
        { month: "Jan", reports: 20 },
        { month: "Feb", reports: 35 },
        { month: "Mar", reports: 28 },
      ]}
    >
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="reports" fill="#C8A96B" />
    </BarChart>
  </ResponsiveContainer>

</div>
<div className="bg-blue-50 rounded-3xl p-6 mb-8">

  <h2 className="text-2xl font-bold mb-4">
    AI Business Insights
  </h2>

  <ul className="space-y-3">

    <li>📈 Production efficiency increased by 12%</li>

    <li>⚠ Industrial Paint stock may run out within 7 days</li>

    <li>🏆 Tata Metals is the best performing supplier</li>

    <li>👨‍🏭 Employee attendance remains above 90%</li>

  </ul>

</div>
<div className="bg-white rounded-3xl shadow-lg p-8 mt-8 mb-8">
<div className="bg-gray-50 rounded-2xl p-6 mt-6">

  <h3 className="text-xl font-bold mb-4">
    Invoice Preview
  </h3>

  <p><strong>Invoice No:</strong> INV-001</p>
  <p><strong>Customer:</strong> ABC Industries</p>
  <p><strong>Product:</strong> Paint Drum</p>
  <p><strong>Quantity:</strong> 500</p>
  <p><strong>Unit Price:</strong> ₹250</p>

  <hr className="my-3" />

  <h3 className="text-2xl font-bold text-green-600">
    Total: ₹125000
  </h3>


<div className="flex gap-4 mt-6">

  <button
  onClick={() => window.print()}
  className="bg-red-600 text-white px-5 py-3 rounded-xl hover:bg-red-700"
>
  Export PDF
</button>

<button
  onClick={exportToExcel}
  className="bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700"
>
  Export Excel
</button>

</div>
</div>
</div>

    </div>
  );
}

export default Reports;