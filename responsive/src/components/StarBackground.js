//"use client";
//
//import { useRef } from "react";
//import { Canvas, useFrame } from "@react-three/fiber";
//import { Points, PointMaterial } from "@react-three/drei";
//import * as random from "maath/random";
//
//function StarField() {
//  const ref = useRef(null);
//  const positions = random.inSphere(new Float32Array(5000), { radius: 1.5 });
//
//  useFrame((state, delta) => {
//    if (ref.current) {
//      ref.current.rotation.x -= delta / 10;
//      ref.current.rotation.y -= delta / 15;
//    }
//  });
//
//  return (
//    <group rotation={[0, 0, Math.PI / 4]}>
//      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
//        <PointMaterial
//          transparent
//          color="#ffffff"
//          size={0.002}
//          sizeAttenuation={true}
//          depthWrite={false}
//          blending={2}
//        />
//      </Points>
//    </group>
//  );
//}
//
//export default function StarBackground() {
//  return (
//    <div className="fixed inset-0 bg-black -z-10">
//      <Canvas camera={{ position: [0, 0, 1] }}>
//        <StarField />
//      </Canvas>
//    </div>
//  );
//}
"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import * as THREE from "three";

function StarField() {
  const ref = useRef(null);
  const positions = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          blending={2}
        />
      </Points>
    </group>
  );
}

export default function StarBackground({ width = "100%", height = "100%", position='fixed' }) {
  return (
    <div
      className={`${position} inset-0 bg-black -z-10`}
      style={{ width: width, height: height }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
    </div>
  );
}