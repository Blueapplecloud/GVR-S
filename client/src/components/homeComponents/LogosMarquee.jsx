import { motion } from "framer-motion";

const LogosMarquee = () => {
  const logos = [
    "/logo/amazon.png",
    "/logo/congnizant.png",
    "/logo/del.png",
    "/logo/tcs.png",
    "/logo/wip.png",
    "/logo/acce.png",
    // "/logo/bajaj.png",
    // "/logo/blaize.png",
    // "/logo/brillio.png",
    // "/logo/byjus.png",
    // "/logo/capgemini.png",
    // "/logo/darwinbox.png",
  ];
  return (
    <div className="bg-gray-100 py-6 overflow-hidden relative">
      <motion.div
        className="flex gap-6 items-center whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="w-32 h-20 bg-white border rounded-lg flex items-center justify-center p-2 shadow-sm"
          >
            <img
              src={logo}
              alt={`logo-${index}`}
              className="max-h-full max-w-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogosMarquee;
