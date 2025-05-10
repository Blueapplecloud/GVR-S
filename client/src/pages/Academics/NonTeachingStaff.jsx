import React from "react";

const nonTeachingStaffList = [
  {
    name: "Mr.T.SUSILA RAO",
    qualification: "B.Tech",
    designation: "Technician",
    department: "EEE",
  },
  {
    name: "Ms.SANGEETHA",
    qualification: "B.Tech",
    designation: "Technician",
    department: "EEE",
  },
  {
    name: "Mr.B.PURNA DURGA PRASAD",
    qualification: "B.Tech",
    designation: "Lab Technician",
    department: "MECH",
  },
  {
    name: "T.DANIEL",
    qualification: "ITI",
    designation: "Lab Attendent",
    department: "MECH",
  },
  {
    name: "Mr.K.VENKANNA BABU",
    qualification: "B.Tech",
    designation: "Lab Technician",
    department: "ECE",
  },
  {
    name: "Mr.VEERENDRA",
    qualification: "B.Tech",
    designation: "Lab Technician",
    department: "ECE",
  },
  {
    name: "Mrs.M.KRANTHI",
    qualification: "M.Sc.(Computers)",
    designation: "Programmer",
    department: "CSE",
  },
  {
    name: "Mrs.NAGA SIREESHA",
    qualification: "M.Sc.(Computers)",
    designation: "Programmer",
    department: "CSE",
  },
  {
    name: "Mr.B.KARTHIK VISHNU",
    qualification: "B.Tech",
    designation: "Programmer",
    department: "CSE",
  },
  {
    name: "Mr.SRI RAMAIAH",
    qualification: "B.Tech",
    designation: "Programmer",
    department: "CSE",
  },
  {
    name: "Ms.PADMA PULLAGURA",
    qualification: "B.Tech",
    designation: "Programmer",
    department: "CSE",
  },
  {
    name: "Mr.AV.SURESH BABU",
    qualification: "MBA",
    designation: "Network Administration",
    department: "CSE",
  },
  {
    name: "Mrs.M.BIKSHALAMMA",
    qualification: "M.Lisc",
    designation: "Asst. Prof. / Librarian",
    department: "BS&H",
  },
  {
    name: "Mr.P. SUVARNA RAJU",
    qualification: "M.Lisc",
    designation: "Asst. Prof. / Librarian",
    department: "BS&H",
  },
  {
    name: "Mr.G CHINA KOTAIAH",
    qualification: "B.Lisc",
    designation: "Assistant Librarian",
    department: "BS&H",
  },
  {
    name: "Mr. PERIKALA. AJITH",
    qualification: "B.SC (Chemistry)",
    designation: "Lab Technician",
    department: "BS&H",
  },
];

const NonTeachingStaffTable = () => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead>
          <tr className="bg-blue-600 text-white text-left">
            <th className="py-3 px-4 border-r">S.No</th>
            <th className="py-3 px-4 border-r">Name</th>
            <th className="py-3 px-4 border-r">Qualification</th>
            <th className="py-3 px-4 border-r">Designation</th>
            <th className="py-3 px-4">Department</th>
          </tr>
        </thead>
        <tbody>
          {nonTeachingStaffList.map((staff, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="py-2 px-4 border-r">{index + 1}</td>
              <td className="py-2 px-4 border-r">{staff.name}</td>
              <td className="py-2 px-4 border-r">{staff.qualification}</td>
              <td className="py-2 px-4 border-r">{staff.designation}</td>
              <td className="py-2 px-4">{staff.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NonTeachingStaffTable;
