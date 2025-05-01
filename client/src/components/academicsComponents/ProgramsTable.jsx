import React from "react";

function ProgramsTable({ heading, programs }) {
  const totalSeats = programs.reduce((sum, prog) => sum + prog.seats, 0);

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th
              colSpan="3"
              className="text-center text-red-600 font-bold py-3 text-lg border-b"
            >
              {heading}
            </th>
          </tr>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 font-semibold text-indigo-900 border-b">S.No</th>
            <th className="p-3 font-semibold text-indigo-900 border-b">
              Branch
            </th>
            <th className="p-3 font-semibold text-indigo-900 border-b text-center">
              No. of seats
            </th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program, index) => (
            <tr
              key={program.id}
              className="border-b hover:bg-gray-50 hover:text-primaryColor"
            >
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{program.branch}</td>
              <td className="p-3 text-center">{program.seats}</td>
            </tr>
          ))}
          <tr className="bg-gray-100 font-semibold text-center">
            <td colSpan="2" className="p-3 text-right">
              Total Seats
            </td>
            <td className="p-3">{totalSeats}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProgramsTable;
