// const ParticlesConfig2 = {
//     background: {
//         color: {
//             value: "#000000",
//         },
//     },
//     fpsLimit: 120,
//     interactivity: {
//         events: {
//             onClick: {
//                 enable: true,
//                 mode: "repulse",
//             },
//             onHover: {
//                 enable: true,
//                 mode: 'grab',
//             },
//         },
//         modes: {
//             push: {
//                 distance: 200,
//                 duration: 15,
//             },
//             grab: {
//                 distance: 150,
//             },
//         },
//     },
//     particles: {
//         color: {
//             value: "#700B97",
//         },
//         links: {
//             // color: "#ffffff",
//             color: "#ffffff",
//             distance: 150,
//             enable: true,
//             opacity: 0.3,
//             width: 1,
//         },
//         move: {
//             direction: "none",
//             enable: true,
//             outModes: {
//                 default: "bounce",
//             },
//             random: true,
//             speed: 1,
//             straight: false,
//         },
//         number: {
//             density: {
//                 enable: true,
//             },
//             value: 150,
//         },
//         opacity: {
//             value: 1.0,
//         },
//         shape: {
//             type: "circle",
//             // type: "cube",
//         },
//         size: {
//             value: { min: 1, max: 3 },
//         },
//     },
//     detectRetina: true,
// }

const ParticlesConfig =
    {
        particles: {
          number: {
            value: 6,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            // value: "#1b1e34"
            value: "#3E065F"
          },
          shape: {
            type: "polygon",
            stroke: {
              width: 0,
              color: "#000"
            },
            polygon: {
              nb_sides: 6
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 160,
            random: false,
            anim: {
              enable: true,
              speed: 10,
              size_min: 40,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 200,
            color: "#ffffff",
            opacity: 1,
            width: 2
          },
          move: {
            enable: true,
            // speed: 8,
            speed: 4,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "grab"
            },
            onclick: {
              enable: false,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }


export default ParticlesConfig;

