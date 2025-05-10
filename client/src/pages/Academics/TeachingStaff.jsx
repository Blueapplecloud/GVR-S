import React from "react";

const facultyList = [
  {
    name: "Dr. TIRUMULARAJA",
    qualification: "M.Tech, Ph.D",
    designation: "PROF. & HOD",
    department: "CIVIL",
  },
  {
    name: "Dr. BALAMURGAN",
    qualification: "M.Tech, Ph.D",
    designation: "Asst. Prof.",
    department: "CIVIL",
  },
  {
    name: "Mr.VIGNESH",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "CIVIL",
  },
  {
    name: "Mr.SUNDARAJAN",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "CIVIL",
  },
  {
    name: "Dr. K KUSAL KUMAR",
    qualification: "M.Tech, Ph.D",
    designation: "Professor",
    department: "EEE",
  },
  {
    name: "Dr. M.MANOJ KUMAR",
    qualification: "M.Tech, Ph.D",
    designation: "Professor",
    department: "EEE",
  },
  {
    name: "Mr.LINGAIAH TUMMALA",
    qualification: "M.Tech",
    designation: "Assoc. Prof. & HOD",
    department: "EEE",
  },
  {
    name: "Mr.KONDABOINA SAI TEJA",
    qualification: "M.Tech",
    designation: "Assoc. Prof.",
    department: "EEE",
  },
  {
    name: "Mr.YOUNUS MOHAMAD",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "EEE",
  },
  {
    name: "Mr.SRINIVASA RAO PEDAPROLU",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "EEE",
  },
  {
    name: "Mrs.M RAJYA LAKSHMI",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "EEE",
  },
  {
    name: "Mr.K SRINIVASA RAO",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "EEE",
  },
  {
    name: "Mrs.M.BHAVYA SRI",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "EEE",
  },
  {
    name: "Mr.G RAMU",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "EEE",
  },
  {
    name: "Dr. T V S R KRISHNA PRASAD",
    qualification: "M.Tech, Ph.D",
    designation: "Professor",
    department: "MECH",
  },
  {
    name: "Dr. M. SELVAM",
    qualification: "M.Tech, Ph.D",
    designation: "Professor",
    department: "MECH",
  },
  {
    name: "Mr.ANIL KUMAR GADDE",
    qualification: "M.Tech",
    designation: "Assoc. Prof. & HOD",
    department: "MECH",
  },
  {
    name: "Mr.PALPARTHI RAVI KUMAR",
    qualification: "M.Tech",
    designation: "Assoc. Prof.",
    department: "MECH",
  },
  {
    name: "Mr.BANAVATH SUNIL KUMAR NAIK",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "MECH",
  },
  {
    name: "Mr.DEVARAYI ASHOK",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "MECH",
  },
  {
    name: "Mr.KOLIPAKA SRINIVASU",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "MECH",
  },
  {
    name: "Mr.NOONSAVATHU PRAVEEN KUMAR NAIK",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "MECH",
  },
  {
    name: "Mr.MYSA SURESH",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "MECH",
  },
  {
    name: "Mr.RAVI TEJA",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "MECH",
  },
  {
    name: "Mr.SHAKEER",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "MECH",
  },
  {
    name: "Mr.GOTTAM PRAVEEN",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "MECH",
  },
  {
    name: "Mr.CHINTALA NAVEEN KUMAR",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "MECH",
  },
  {
    name: "Dr. RAMAKRISHNA",
    qualification: "M.Tech, Ph.D",
    designation: "Professor",
    department: "ECE",
  },
  {
    name: "Dr. JAGGA RAO",
    qualification: "M.Tech, Ph.D",
    designation: "Assoc.Prof.",
    department: "ECE",
  },
  {
    name: "Dr. D.LENIN BABU",
    qualification: "M.Tech, Ph.D",
    designation: "Assoc.Prof. & I/C PRINCIPAL",
    department: "ECE",
  },
  {
    name: "Dr. KRISHNAMOORTHY",
    qualification: "M.Tech, Ph.D",
    designation: "Assoc.Prof.",
    department: "ECE",
  },
  {
    name: "Mrs. J.SOWJANYA",
    qualification: "M.Tech",
    designation: "Assoc. Prof. & HoD",
    department: "ECE",
  },
  {
    name: "Mrs. CH.DIVYA SUSMITHA",
    qualification: "M.Tech",
    designation: "Assoc. Prof.",
    department: "ECE",
  },
  {
    name: "Mrs. POTTI KEERTHANA",
    qualification: "M.Tech",
    designation: "Assoc. Prof.",
    department: "ECE",
  },
  {
    name: "Mr. RATHAIAH VASIMALLA",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "ECE",
  },
  {
    name: "Mr.RPS RAJU",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "ECE",
  },
  {
    name: "Ms.B.LAKSHMI",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "ECE",
  },
  {
    name: "Mrs.T.SAI MOUNIKA",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "ECE",
  },
  {
    name: "Mrs.KARNATI ANUSHA",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "ECE",
  },
  {
    name: "Ms.A.MOUNIKA",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "ECE",
  },
  {
    name: "Mrs.SHAIK DURGHABEE",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "ECE",
  },
  {
    name: "Mrs.S.BHUVANA NAGA SAI",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "ECE",
  },
  {
    name: "Mr.M.RAVI KUMAR",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "ECE",
  },
  {
    name: "Mrs.K.NAVYA SRI",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "ECE",
  },
  {
    name: "Mr.A.SIVA NARAYANA",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "ECE",
  },
  {
    name: "Mr.N.KUMAR BABU",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "ECE",
  },
  {
    name: "Mr.J.RAMOJI GUPTHA",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "ECE",
  },
  {
    name: "Mr.BHRAMIYA",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "ECE",
  },
  {
    name: "Mr.SIVA",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "ECE",
  },
  {
    name: "Mrs.A.SRI SAILAJA",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "ECE",
  },
  {
    name: "Mr.S.SRI KUMAR",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "ECE",
  },
  {
    name: "Dr. P.BHASKAR NAIDU",
    qualification: "M.Tech, Ph.D",
    designation: "Prof. & PRINCIPAL",
    department: "CSE",
  },
  {
    name: "Dr. SAJEEDA PARVEEN",
    qualification: "M.Tech, Ph.D",
    designation: "Assoc. Prof.",
    department: "CSE",
  },
  {
    name: "Dr.VIJAY BHASKAR",
    qualification: "M.Tech, Ph.D",
    designation: "Assoc. Prof.",
    department: "CSE",
  },
  {
    name: "Dr.VENKATESHAN",
    qualification: "M.Tech, Ph.D",
    designation: "Assoc. Prof.",
    department: "CSE",
  },
  {
    name: "Dr.JAGADISH",
    qualification: "M.Tech, Ph.D",
    designation: "Assoc. Prof.",
    department: "CSE",
  },
  {
    name: "Dr.SRAVAN",
    qualification: "M.Tech, Ph.D",
    designation: "Assoc. Prof.",
    department: "CSE",
  },
  {
    name: "Mr.CH. PAPA RAO",
    qualification: "M.Tech, Ph.D",
    designation: "Assoc. Professor & HOD",
    department: "CSE",
  },
  {
    name: "Mr.B.BABU",
    qualification: "M.Tech, Ph.D",
    designation: "Assoc. Professor",
    department: "CSE",
  },
  {
    name: "VIJJIANAND JELLI",
    qualification: "M.Tech",
    designation: "Assoc. Prof.",
    department: "CSE",
  },
  {
    name: "Mr.K. HARSHAVARDHAN",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "CSE",
  },
  {
    name: "Mr.A.S.R PRASANTH",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "CSE",
  },
  {
    name: "Mr.J.SUDHAKAR BABU",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "CSE",
  },
  {
    name: "Mr.JAMPANI GOPI",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "CSE",
  },
  {
    name: "Mrs.P.DIVYA",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "CSE",
  },
  {
    name: "Mrs.K.KANAKA DURGA",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "CSE",
  },
  {
    name: "Mrs.M.RATNA KUMARI",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "CSE",
  },
  {
    name: "Mr.KARASALA MAHESH BABU",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "CSE",
  },
  {
    name: "Mr.MEHAR SWARAJ DEVATHI",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "CSE",
  },
  {
    name: "Mr.KURAGANTI SALMON RAJU",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "CSE",
  },
  {
    name: "Mr.SIVA",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "CSE",
  },
  {
    name: "Mr.SRINIVASA RAO YARLAGADDA",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "CSE",
  },
  {
    name: "Mr.A.RAM PRASAD MATHI",
    qualification: "M.Tech",
    designation: "Asst. Prof.",
    department: "CSE",
  },
  {
    name: "Mr.D.PARAMDAMAIAH",
    qualification: "MCA",
    designation: "Asst. Prof.",
    department: "CSE",
  },
  {
    name: "Mr.K.CHAITANYA KUMAR",
    qualification: "MCA",
    designation: "Asst. Prof.",
    department: "CSE",
  },
  {
    name: "Mr.S.V.ANIL KUMAR",
    qualification: "MCA",
    designation: "Asst. Prof.",
    department: "CSE",
  },
  {
    name: "Mr.J.VARUN KUMAR",
    qualification: "MCA",
    designation: "Assoc. Prof.",
    department: "CSE",
  },
  {
    name: "Dr B RAMANUJA SRINIVAS",
    qualification:
      "M.Sc (Maths), M.Sc (Statistics), M.Phill.(Maths), M.Tech.(CSE),MBA,Ph.D",
    designation: "Professor & HOD",
    department: "BS&H",
  },
  {
    name: "Dr. B.VARA PRASAD",
    qualification: "MA,MSC,PGDGS,MPhil, Ph.D.",
    designation: "PROF. & DEAN",
    department: "BS&H",
  },
  {
    name: "Dr BONDADA RAMESH",
    qualification: "M.Sc (Physics), Ph.D",
    designation: "Professor",
    department: "SBS&H",
  },
  {
    name: "Dr. VINOD KUMAR BUSSA",
    qualification: "M.Sc.(Chemistry), Ph.D",
    designation: "Professor",
    department: "BS&H",
  },
  {
    name: "Dr. MEKALA AVINASH",
    qualification: "M.Sc (Physics), Ph.D",
    designation: "Professor",
    department: "BS&H",
  },
  {
    name: "Dr.J.SANTHAN KUMAR",
    qualification: "M.Sc (Physics), Ph.D",
    designation: "Professor",
    department: "BS&H",
  },
  {
    name: "Mrs.S AMMAJI",
    qualification: "M.Sc (Maths)",
    designation: "Assoc. Prof.",
    department: "BS&H",
  },
  {
    name: "Mr.KAMMA SANKARA RAO",
    qualification: "MA (English)",
    designation: "Assoc. Prof.",
    department: "BS&H",
  },
  {
    name: "Mrs.SALMA SAYED",
    qualification: "MA (English)",
    designation: "Asst. Prof.",
    department: "BS&H",
  },
  {
    name: "Mrs. P.ANUSHA",
    qualification: "M.Sc (Chemistry)",
    designation: "Asst. Prof.",
    department: "BS&H",
  },
  {
    name: "Mrs. SIRIVELLA SUBHASHINI",
    qualification: "M.Sc (Chemistry)",
    designation: "Asst. Prof.",
    department: "BS&H",
  },
  {
    name: "Mrs.A.JYOTHI",
    qualification: "M.Sc (Maths)",
    designation: "Asst. Prof.",
    department: "BS&H",
  },
  {
    name: "Mr.CH V NAGESWARA RAO",
    qualification: "M.Sc (Physics),MBA",
    designation: "Asst. Prof.",
    department: "BS&H",
  },
  {
    name: "Mrs.PANCHANGAM KALYANI",
    qualification: "M.Sc (Physics)",
    designation: "Asst. Prof.",
    department: "BS&H",
  },
  {
    name: "Mrs.KARUMURU MADHAVI",
    qualification: "MBA",
    designation: "Asst. Prof.",
    department: "BS&H",
  },
  {
    name: "Mr.G MAHENDRA KUMAR",
    qualification: "MBA (MHRM)",
    designation: "Asst. Prof.",
    department: "BS&H",
  },
  {
    name: "Mr.N V V SATYANARAYANA",
    qualification: "B.Tech.,MBA",
    designation: "Asst. Prof.",
    department: "BS&H",
  },
  {
    name: "Mrs.BATHINA NAGAVEENA",
    qualification: "M.SC (Chemistry)",
    designation: "Asst. Prof.",
    department: "BS&H",
  },
  {
    name: "Mrs.JHANSI RANI KANDULA",
    qualification: "M.Sc (Maths)",
    designation: "Asst. Prof.",
    department: "BS&H",
  },
  {
    name: "Mr.A SRINIVASA RAO",
    qualification: "M.Sc (Maths)",
    designation: "Asst. Prof.",
    department: "BS&H",
  },
  {
    name: "Mr.B RAJU (Maths)",
    qualification: "M.Sc (Physics)",
    designation: "Asst. Prof.",
    department: "BS&H",
  },
  {
    name: "Mr.N.PRABHAKAR",
    qualification: "M.Sc (Physics)",
    designation: "Asst. Prof.",
    department: "BS&H",
  },
  {
    name: "Mrs.B.SAI MASTANAMMA",
    qualification: "MBA",
    designation: "Asst. Prof.",
    department: "BS&H",
  },
  {
    name: "Ms.T.SANDHYA RANI",
    qualification: "M.Sc (Maths)",
    designation: "Asst. Prof.",
    department: "BS&H",
  },
  {
    name: "Mr.AREMANDA PRABHAKAR RAO",
    qualification: "MA,M.PED.",
    designation: "Physical Director",
    department: "BS&H",
  },
];

const TeachingStaff = () => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead>
          <tr className="bg-green-600 text-white text-left">
            <th className="py-3 px-4 border-r">S.No</th>
            <th className="py-3 px-4 border-r">Name</th>
            <th className="py-3 px-4 border-r">Qualification</th>
            <th className="py-3 px-4 border-r">Designation</th>
            <th className="py-3 px-4">Department</th>
          </tr>
        </thead>
        <tbody>
          {facultyList.map((faculty, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="py-2 px-4 border-r">{index + 1}</td>
              <td className="py-2 px-4 border-r">{faculty.name}</td>
              <td className="py-2 px-4 border-r">{faculty.qualification}</td>
              <td className="py-2 px-4 border-r">{faculty.designation}</td>
              <td className="py-2 px-4">{faculty.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeachingStaff;
