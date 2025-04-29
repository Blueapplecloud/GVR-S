import React from "react";

function FeeStructure() {
  const ugbranches = [
    {
      id: 1,
      name: "Electrical & Electronics Engineering (EEE)",
      fee: "43,000",
    },
    {
      id: 2,
      name: "Electronics & Communication Engineering (ECE)",
      fee: "43,000",
    },
    { id: 3, name: "Computer Science & Engineering (CSE)", fee: "43,000" },
    { id: 4, name: "Mechanical Engineering (ME)", fee: "43,000" },
  ];

  const pgbranches = [
    {
      id: 1,
      name: "M.Tech-CSE ( Computer Science Engineering)",
      fee: "43,000",
    },
    {
      id: 2,
      name: "M.Tech-ECE ( VLSI and Embedded System )",
      fee: "43,000",
    },
    { id: 3, name: "M.Tech-ECE ( DECS )", fee: "43,000" },
    { id: 4, name: "M.Tech-ME ( CAD/CAM )", fee: "43,000" },
    { id: 5, name: "Masters in Business Administration(MBA)", fee: "43,000" },
  ];

  return (
    <div className=" px-4 py-4">
      <h3 className="!text-red-500">Fee Structure</h3>
      <div className="overflow-x-auto">
        <h4 className="!text-red-500 text-center">UG Graduate Programs</h4>
        <table className="w-full border-collapse border border-gray-300 text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 font-semibold text-purple-800">
                S.No
              </th>
              <th className="border border-gray-300 px-4 py-2 font-semibold text-purple-800">
                Branch
              </th>
              <th className="border border-gray-300 px-4 py-2 font-semibold text-purple-800">
                Tuition Fee
              </th>
            </tr>
          </thead>
          <tbody>
            {ugbranches.map((branch) => (
              <tr key={branch.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {branch.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {branch.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {branch.fee}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto">
        <h4 className="!text-red-500 text-center">PG Graduate Programs</h4>
        <table className="w-full border-collapse border border-gray-300 text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 font-semibold text-purple-800">
                S.No
              </th>
              <th className="border border-gray-300 px-4 py-2 font-semibold text-purple-800">
                Branch
              </th>
              <th className="border border-gray-300 px-4 py-2 font-semibold text-purple-800">
                Tuition Fee
              </th>
            </tr>
          </thead>
          <tbody>
            {pgbranches.map((branch) => (
              <tr key={branch.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {branch.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {branch.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {branch.fee}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeeStructure;
