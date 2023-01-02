import React from "react";

const ImagePlaceholder = ({ width, height }) => {
  return (
    <div
      className="animate-pulse rounded-md bg-slate-300"
      style={{
        width: `min(100%,${width}px)`,
        height: `${height}px`,
      }}
    />
  );
};

export default ImagePlaceholder;
