"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';
import useVapi from "../../hooks/use-vapi";
import './orb.css'; // Import the CSS file for styling

const Orb = () => {
  const { volumeLevel, isSessionActive, toggleCall } = useVapi();
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const groupRef = useRef(null);
  const cameraRef = useRef(null);
  const ballRef = useRef(null);
  const originalPositionsRef = useRef(null);
  const noise = createNoise3D();

  useEffect(() => {
    console.log("Initializing visualization...");
    initViz();
    window.addEventListener('resize', onWindowResize);
    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  useEffect(() => {
    if (isSessionActive && ballRef.current) {
      console.log("Session is active, morphing the ball");
      updateBallMorph(ballRef.current, volumeLevel);
    } else if (!isSessionActive && ballRef.current && originalPositionsRef.current) {
      console.log("Session ended, resetting the ball");
      resetBallMorph(ballRef.current, originalPositionsRef.current);
    }
  }, [volumeLevel, isSessionActive]);

  const initViz = () => {
    console.log("Initializing Three.js visualization...");
    const scene = new THREE.Scene();
    const group = new THREE.Group();

    const outElement = document.getElementById('out');
    const aspectRatio = outElement ? outElement.clientWidth / outElement.clientHeight : window.innerWidth / window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, aspectRatio, 0.5, 100);
    camera.position.set(0, 0, 100);
    camera.lookAt(scene.position);

    scene.add(camera);
    sceneRef.current = scene;
    groupRef.current = group;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;

    const icosahedronGeometry = new THREE.IcosahedronGeometry(20, 3);
    const lambertMaterial = new THREE.MeshLambertMaterial({
      color: 0xFFFFFF,
      wireframe: true,
    });

    const ball = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
    ball.position.set(0, 0, 0);
    ballRef.current = ball;

    originalPositionsRef.current = ball.geometry.attributes.position.array.slice();
    group.add(ball);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.intensity = 0.9;
    spotLight.position.set(-10, 40, 20);
    spotLight.lookAt(ball.position);
    spotLight.castShadow = true;
    scene.add(spotLight);

    scene.add(group);

    if (outElement) {
      outElement.innerHTML = '';
      outElement.appendChild(renderer.domElement);
      renderer.setSize(outElement.clientWidth, outElement.clientHeight);
    }

    render();
  };

  const render = () => {
    if (!groupRef.current || !ballRef.current || !cameraRef.current || !rendererRef.current || !sceneRef.current) {
      return;
    }
    groupRef.current.rotation.y += 0.005;
    rendererRef.current.render(sceneRef.current, cameraRef.current);
    requestAnimationFrame(render);
  };

  const onWindowResize = () => {
    if (!cameraRef.current || !rendererRef.current) return;

    const outElement = document.getElementById('out');
    if (outElement) {
      cameraRef.current.aspect = outElement.clientWidth / outElement.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(outElement.clientWidth, outElement.clientHeight);
    }
  };

  const updateBallMorph = (mesh, volume) => {
    console.log("Morphing the ball with volume:", volume);
    const geometry = mesh.geometry;
    const positionAttribute = geometry.getAttribute('position');

    for (let i = 0; i < positionAttribute.count; i++) {
      const vertex = new THREE.Vector3(
        positionAttribute.getX(i),
        positionAttribute.getY(i),
        positionAttribute.getZ(i)
      );

      const offset = 10;
      const amp = 2.5;
      const time = window.performance.now();
      vertex.normalize();
      const rf = 0.00001;
      const noiseFactor = noise(vertex.x, vertex.y, vertex.z);
      const distance = offset + volume * 4 + (noiseFactor * amp * volume);
      vertex.multiplyScalar(distance);

      positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }

    positionAttribute.needsUpdate = true;
    geometry.computeVertexNormals();
  };

  const resetBallMorph = (mesh, originalPositions) => {
    console.log("Resetting the ball to its original shape");
    const geometry = mesh.geometry;
    const positionAttribute = geometry.getAttribute('position');

    for (let i = 0; i < positionAttribute.count; i++) {
      positionAttribute.setXYZ(
        i,
        originalPositions[i * 3],
        originalPositions[i * 3 + 1],
        originalPositions[i * 3 + 2]
      );
    }

    positionAttribute.needsUpdate = true;
    geometry.computeVertexNormals();
  };

  return (
    <div className="orb-container">
      <div id="out" onClick={toggleCall}></div>
    </div>
  );
};

export default Orb;