import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { AiOutlineClose } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";
const BrochureModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const contentRef = useRef();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const downloadPDF = async () => {
    setLoading(true);
    const input = contentRef.current;
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("brochures.pdf");
    setLoading(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="mt-3 py-2 bg-primaryColor text-white  hover:bg-Amber hover:!text-black rounded"
      >
        Open Brochures
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 overflow-hidden">
          <div className="bg-white w-full h-full p-6 overflow-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-6 text-gray-600 hover:text-red-600 text-3xl"
              aria-label="Close modal"
            >
              <AiOutlineClose />
            </button>

            <div
              ref={contentRef}
              className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-10"
            >
              <img
                src="/Images/frontpage.jpg"
                alt="Brochure 1"
                className="w-full h-auto rounded shadow"
              />
              <img
                src="/Images/backpage.jpg"
                alt="Brochure 2"
                className="w-full h-auto rounded shadow"
              />
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={downloadPDF}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 flex items-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Download as PDF"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BrochureModal;
