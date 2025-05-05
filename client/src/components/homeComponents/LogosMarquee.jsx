import { motion } from "framer-motion";

const LogosMarquee = () => {
  const logos = [
    "/logo/amazon.png",
    "/logo/congnizant.png",
    "/logo/del.png",
    "/logo/tcs.png",
    "/logo/wip.png",
    "/logo/acce.png",
  ];

  return (
    <div className="bg-gray-100 py-4 overflow-x-hidden w-full">
      <motion.div
        className="flex gap-4 items-center whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="min-w-[80px] w-20 h-16 sm:w-24 sm:h-20 bg-white border rounded-xl flex items-center justify-center p-2 shadow-sm"
          >
            <img
              src={logo}
              alt={`logo-${index}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogosMarquee;
