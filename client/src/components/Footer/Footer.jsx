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
        <div className="text-center md:text-left text-sm md:text-base text-White overflow-hidden">
          <h2 className="text-lg font-semibold mb-2 text-center">Location</h2>
          <div className="w-90 max-w-full md:max-w-[600px] h-54 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15320.133102115356!2d80.478349!3d16.270065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a0b1f8733f467%3A0x1e885051d4a2dfb5!2sG%20V%20R%20%26%20S%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1746622881731!5m2!1sen!2sin"
              className="w-full h-58 border-Amber-100 border-2 rounded-lg"
              allowFullScreen="true"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
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
