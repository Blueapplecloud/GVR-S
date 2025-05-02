import { FaRegFileAlt } from "react-icons/fa";

const newsItems = [
  "Notice Issue of Hall Tickets II-MBA II-Sem students",
  "Notice Issue of Hall Tickets I-MBA,I-MCA II-Sem and I-BBA II-Sem students",
  "Notice college remains closed on 02-05-2025",
  "Circular Academic Calendar 2025-26 I Year B.Tech.",
  "Circular Academic Calendar 2025-26 II Year B.Tech.",
  "Circular Academic Calendar 2025-26 III Year B.Tech.",
  "Circular Academic Calendar 2025-26 IV Year B.Tech.",
  "Notice B.Tech.,Sem-VIII Fee payment for PC,OD,CMM",
  "Notice Supply. Exam.Fee B.Tech.,Sem-VIII R20",
  "Notice Supply.Exam.Fee I-MBA I -MCA II-Sem R21",
  "Notice Issue of Hall Tickets B.Tech semester-IV (2nd year) students",
  "Notice External Exams Bus timings",
  "Notice Bus timings students 28.04.25 to 13.06.25",
  "All outgoing IVth B.Tech (Y21 Batch) students are hereby informed that the library books dues list is enclosed",
];

const CampusNews = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 max-w-6xl mx-auto mt-6 border-2 mb-3">
      <h2 className="text-2xl font-semibold mb-6 border-b-2  !mx-auto border-primaryColor flex items-center justify-center pb-2">
        Campus News
      </h2>
      <ul className="divide-y divide-gray-200">
        {newsItems.map((item, index) => (
          <li key={index} className="flex items-start space-x-2 py-3">
            <FaRegFileAlt className="text-gray-600 mt-1" />
            <a
              href="#"
              className="text-blue-600 no-underline text-sm font-medium"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampusNews;
