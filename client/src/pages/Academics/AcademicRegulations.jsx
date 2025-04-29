import React from "react";

function AcademicRegulations() {
  const pdfs = [
    { name: "R16-REGULATION", url: "/pdf/R16-REGULATIONS.pdf" },
    { name: "R19-REGULATION", url: "/pdf/R19-REGULATIONS.pdf" },
    { name: "R20-REGULATION", url: "/pdf/R20-REGULATIONS.pdf" },
    { name: "R23-REGULATION", url: "/pdf/R23-REGULATIONS.pdf" },
  ];
  const openPdf = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="px-5 py-4">
      <h1 className="shadow-lg p-5">AcademicRegulations</h1>

      <div className="p-4">
        <h1 className="!text-4xl font-bold mb-4">Open Pdf's</h1>
        <div className="space-y-4">
          {pdfs.map((pdf, index) => (
            <button
              key={index}
              onClick={() => openPdf(pdf.url)}
              className="px-4 py-2 m-3 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {pdf.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AcademicRegulations;
