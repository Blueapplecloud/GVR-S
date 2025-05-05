import React from "react";

function AcademicScholarShip() {
  const scholarships = [
    {
      category: "Students belonging to all BC categories",
      courseFee: "Full Course Fee",
      scholarship: "As admissible by the govt rule in vogue",
      incomeLimit: "1,00,000.00",
    },
    {
      category: "Students belonging to EBC Category",
      courseFee: "Full Course Fee",
      scholarship: "As admissible by the govt rule in vogue",
      incomeLimit: "1,00,000.00",
    },
    {
      category: "Students belonging to BC-E Category (Minority)",
      courseFee: "Full Course Fee",
      scholarship: "As admissible by the govt rule in vogue",
      incomeLimit: "1,00,000.00",
    },
    {
      category: "Students belonging to SC Category",
      courseFee: "Full Course Fee",
      scholarship: "As admissible by the govt rule in vogue",
      incomeLimit: "2,00,000.00",
    },
    {
      category: "Students belonging to ST Category",
      courseFee: "Full Course Fee",
      scholarship: "As admissible by the govt rule in vogue",
      incomeLimit: "2,00,000.00",
    },
  ];
  return (
    <div className="px-4 py-4">
      <h1 className="shadow-lg p-5 text-5xl font-bold text-primaryColor">
        Academic Scholarship
      </h1>
      <div className="p-4">
        {/* Heading */}
        <div className="mb-4 ">
          <p className="font-bold text-primaryColor ">
            Government Scholarships are available for A.P. students with
            specified upper limits of annual income of parents/guardians for the
            respective categories as stated below
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-left text-base ">
            <thead className="bg-gray-100">
              <tr className="hover:bg-gray-50">
                <th className="border border-gray-300 px-4 py-2 font-semibold text-orange-500">
                  Category
                </th>
                <th className="border border-gray-300 px-4 py-2 font-semibold text-orange-500">
                  Course Fee
                </th>
                <th className="border border-gray-300 px-4 py-2 font-semibold text-orange-500">
                  Scholarship
                </th>
                <th className="border border-gray-300 px-4 py-2 font-semibold text-orange-500">
                  Income limit
                </th>
              </tr>
            </thead>
            <tbody>
              {scholarships.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 !px-4 !py-4">
                    {item.category}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.courseFee}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.scholarship}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.incomeLimit}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-100 text-primary">
                <td
                  className="py-3 px-4 text-lg font-semibold text-blue-500  "
                  colSpan={4}
                >
                  Income Certificate is to be obtained from Mandal Revenue
                  Officer/Tahsildar
                </td>
              </tr>
              <tr className="bg-gray-100 text-primary">
                <td
                  className="py-3 px-4 text-lg font-semibold  text-blue-500 "
                  colSpan={4}
                >
                  Scholorship will be provided for Merit-cum-mean Students.
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AcademicScholarShip;
