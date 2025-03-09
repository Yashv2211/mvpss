import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three"; // Ensure Three.js is imported
import CLOUDS from "vanta/dist/vanta.clouds.min"; // Choose a Vanta effect

const CloudBackground = ({xOffset=0.2, size=1, yOffset=0, subBackground=false}) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE, // Pass Three.js
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          skyColor: 0x0,
          cloudColor: 0x0,
          cloudShadowColor: 0x0,
          sunColor: 0x581892
        
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Cleanup on unmount
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className={subBackground ? "absolute inset-0" : "fixed inset-0 z-2"} />;
};

export default CloudBackground;
