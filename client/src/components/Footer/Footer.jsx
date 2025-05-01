import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#B04040] text-white py-10 px-4 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center gap-20">
        {/* Left: Logo and Icons */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/Images/GVR&S Logo.jpg"
            alt="College Logo"
            className="w-50"
          />
          <div className="w-full flex !space-x-4 text-white !text-2xl pl-12 mt-3">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* Center: Contact Info */}
        <div className="text-center md:text-left pt-3 !mr-20">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p>
            Near Budampadu Etukuru, Ponnuru Road, <br />
            beside National Highway 16, opposite to NSL Textiles, <br />
            Guntur, Andhra Pradesh 522013, India
          </p>
          <p className="mt-2">📧 gvrs_cet@yahoo.com</p>
          <p>📞 9440263993</p>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-white/30 pt-2 pb-2">
        © 2024 GVR&S College of Engineering & Technology. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
