import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three"; // Ensure Three.js is imported
import HALO from "vanta/dist/vanta.halo.min"; // Choose a Vanta effect

const HaloBackground = ({xOffset=0.25, size=1, yOffset=0, position='fixed', login}) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE, // Pass Three.js
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          xOffset: xOffset,
          yOffset: yOffset,
          amplitudeFactor: 1,
          backgroundColor: 0x0,
          size: size
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Cleanup on unmount
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className={`${position} ${login ? '-top-[80px] h-screen w-full' : 'inset-0'}`} />;
};

export default HaloBackground;
