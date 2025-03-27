import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = React.memo(() => {
  // Memoize particle initialization to prevent unnecessary re-renders
  const particlesInit = useCallback(async (engine) => {
    try {
      await loadFull(engine);
    } catch (error) {
      console.error("Failed to load particles:", error);
    }
  }, []);

  // Memoize particle configuration to prevent unnecessary re-computations
  const particlesOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 60, // Reduced from 120 for better performance
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: { value: "#014d4e" },
        links: {
          color: "#014d4e",
          distance: 150,
          enable: true,
          opacity: 5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 60, // Slightly reduced number of particles
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: 3 }, // Slightly smaller particles
      },
      detectRetina: true,
    }),
    []
  ); // Empty dependency array ensures this is only computed once

  // Use a noop function for loaded callback to reduce unnecessary logging
  const particlesLoaded = useCallback(() => {}, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
        className="w-full h-full"
      />
    </div>
  );
});

ParticlesContainer.displayName = "ParticlesContainer";

export default ParticlesContainer;
