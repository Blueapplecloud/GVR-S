import React from 'react';

const ContactUS = () => {
  return (
    <div className="p-20 bg-white rounded-lg">
      <h1 className="text-left font-bold text-4xl">Contact Us</h1>
      <div className="flex items-center justify-between mt-2">
        <div className="max-w-[60%]">
          <h3 className="text-red-600 font-bold text-xl">@ G.V.R.&S EDUCATIONAL INSTITUTIONS</h3>
          <p className="font-semibold">Ganginenipuram, Near Budampadu</p>
          <p className="font-semibold">Etukuru Post, Guntur-522013, Andhra Pradesh</p>
          <p className="font-semibold">
            <strong>Land Mark:</strong> Beside National Highway – 5, Opposite to NSL Textiles, Ponnuru Road (Just 3 KMS from Guntur Bus Stand & 6-KMS from Railway Station)
          </p>
          <p className="font-semibold">
            <strong>Email:</strong> <a href="mailto:gvrs_cet@yahoo.com" className="text-blue-600 underline">gvrs_cet@yahoo.com</a>
          </p>
          <p className="font-semibold"><strong>Contact:</strong> 9440263993 | 9440081856</p>
        </div>
        <div>
          <img src="https://gvrs.ac.in/wp-content/uploads/2023/08/clg1-2048x1125.jpg" alt="G.V.R.&S Educational Institutions" className="w-[500px] h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
