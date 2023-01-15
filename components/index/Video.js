import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Video = ({ id }) => {
  const [imageClicked, setImageClicked] = useState(false);

  return (
    <div className="relative h-full w-full cursor-pointer" onClick={() => setImageClicked(true)}>
      <AnimatePresence>
        {!imageClicked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={`https://img.youtube.com/vi/${id}/sddefault.jpg`}
              fill
              alt="yt thumbnail"
              className="object-cover"
              priority
            />
            <Image
              width={50}
              height={50}
              src="http://addplaybuttontoimage.way4info.net/Images/Icons/7.png"
              alt="play button"
              className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {imageClicked && (
          <motion.iframe
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            src={imageClicked ? `https://www.youtube.com/embed/${id}?rel=0&showinfo=0&autoplay=1` : ""}
            title="youtube video"
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </AnimatePresence>
    </div>
  );
};
export default Video;
