import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// Particles Container Component
const ParticlesContainer = () => {
  // Initialize the particles engine
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles engine initialized");
    await loadFull(engine); // Load the full particles library
  }, []);

  // Callback when particles are loaded
  const particlesLoaded = useCallback(() => {
    console.log("Particles loaded");
  }, []);

  return (
    <div id="particles-container" className="w-full h-full relative">
      <Particles
        className="absolute w-full h-full"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            // Disable full screen
          },
          background: {
            color: {
              value: "#0000", // Gray 900 background for visibility
            },
          },
          fpsLimit: 120, // Frame rate limit for better performance
          interactivity: {
            events: {
              onClick: {
                enable: false, // Disable particle push on click
                mode: "push",
              },
              onHover: {
                enable: true, // Enable hover effect
                mode: "repulse",
              },
              // Resize particles on window resize
            },
            mode: {
              push: {
                quantity: 90,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#014d4e", // Dark teal particles color
            },
            links: {
              color: "#014d4e",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true, // Enable particle collision
            },
            move: {
              direction: "none",
              enable: true,
              outMode: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800, // Control the density of particles
              },
              value: 80, // Number of particles
            },
            opacity: {
              value: 0.5, // Opacity of particles
            },
            shape: {
              type: "circle", // Particle shape
            },
            size: {
              value: 5, // Size of particles
            },
          },
          detectRetina: true, // Ensure retina display support
        }}
      />
    </div>
  );
};

export default ParticlesContainer;
