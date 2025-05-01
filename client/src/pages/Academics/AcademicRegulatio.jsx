import React from "react";

function AcademicRegulations() {
  const pdfs = [
    { name: "R16-REGULATION", url: "/pdfs/R16-REGULATIONS.pdf" },
    { name: "R19-REGULATION", url: "/pdfs/R19-REGULATIONS.pdf" },
    { name: "R20-REGULATION", url: "/pdfs/R20-REGULATIONS.pdf" },
    { name: "R23-REGULATION", url: "/pdfs/R23-REGULATIONS.pdf" },
  ];
  const openPdf = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="px-5 py-4">
      <h1 className="shadow-lg p-5">Academic Regulations</h1>

      <div className="p-4">
        <div className="space-y-4">
          {pdfs.map((pdf, index) => (
            <button
              key={index}
              onClick={() => openPdf(pdf.url)}
              className="px-4 py-2 m-3 bg-primaryColor text-white rounded hover:text-Amber "
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
