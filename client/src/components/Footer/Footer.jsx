import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#B04040] text-white py-8 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center md:items-start gap-8 md:gap-12">
        
        {/* Left: Logo and Social Icons */}
        <div className="flex flex-col items-center md:items-center text-center md:text-left">
          <img
            src="/Images/GVR&S Logo.jpg"
            alt="College Logo"
            className="w-36 mb-2"
          />
          <div className="flex space-x-4 text-2xl mt-2 md:mt-3 text-White">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="text-center md:text-left text-sm md:text-base text-White">
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p>
            Near Budampadu Etukuru, Ponnuru Road, <br />
            beside National Highway 16, opposite to NSL Textiles, <br />
            Guntur, Andhra Pradesh 522013, India
          </p>
          <p className="mt-2">📧 gvrs_cet@yahoo.com</p>
          <p>📞 9440263993</p>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs mt-8 border-t border-White/30 pt-3">
        © 2025 GVR&S College of Engineering & Technology. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
