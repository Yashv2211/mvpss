import { motion } from "framer-motion";
// import video from "../public/wave-loop.mp4"

export const BackgroundWave = () => {
  return (
    <motion.video
//       src={}
      autoPlay
      muted
      loop
      controls={false}
      className="fixed grayscale object-cover bottom-0 z-[-1] hidden md:block pointer-events-none opacity-75 "
    />
  );
};
