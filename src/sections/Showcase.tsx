import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  name: string;
  description: string;
  stack: string[];
  image: string | null;
  video: string | null;
  github: string | null;
  live: string | null;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Sankalan",
    description:
      "An efficient full-stack system waste management system designed to help municipalities efficiently monitor waste bins, optimize collection routes, and enable citizens to report waste-related issues in real time.",
    stack: [
      "Django",
      "Flutter",
      "PostreSQL",
      "Docker",
      "REST API",
      "Github Actions",
    ],
    image: null,
    video: null,
    github: "https://github.com/Upendra48/Sankalan",
    live: null,
  },

  {
    id: 2,
    name: "Anugaman",
    description:
      "A job application tracking backend system where users can manage and track their job applications using a modern Kanban-style workflow.",
    stack: [
      "Django",
      "MongoDB",
      "Redis",
      "Docker",
      "REST API",
      "Github Actions",
    ],
    image: null,
    video: null,
    github: "https://github.com/Upendra48/Anugaman",
    live: null,
  },

  {
    id: 3,
    name: "Paila",
    description:
      "A location-powered community fitness platform (Mobile App) that turns walking and running into a shared game. Users are automatically placed into live, district-based rooms using real-time coordinates, where they can track activity together, compete locally, and build territory through valid walking or running routes.",
    stack: [
      "Flutter",
      "Nodejs",
      "Express",
      "MongoDB",
      "Redis",
      "Socket.io",
      "Team Project",
    ],
    image: null,
    video: null,
    github: "https://github.com/saugat1070/Team-USA",
    live: null,
  },
  {
    id: 4,
    name: "Sign Language Glove",
    description:
      "A wearable sign-language recognition system  that translates Nepali Sign Language (NSL) gestures into spoken audio in real time using ESP32, Flex sensors, MPU-6050(gyroscope/accelerometer) to capture the hand gestures and Random Forest and LSTM to predict the gestures.",
    stack: [
      "Python",
      "Jupyter Notebook",
      "Arduino",
      "Scikit-learn",
      "Pandas",
      "Team Project",
    ],
    image: null,
    video: null,
    github: "https://github.com/Upendra48/SignLanguage_Glove",
    live: null,
  },

  {
    id: 5,
    name: "Emergency Response System for Women's Safety",
    description:
      "Built an IoT-powered wearable emergency response device that instantly sends GPS-based SOS alerts via SMS using ESP32, GPS, and GSM modules. The system features a web-based configuration portal, LCD feedback, and continuous live location updates for enhanced personal safety.",
    stack: [
      "C++",
      "TinyGPS++",
      "ESP32",
      "NEO-6M GPS",
      "SIM800L GSM",
      "Wifi Library",
      "Team Project",
    ],
    image: null,
    video: null,
    github: "https://github.com/Sanjog34/Emergency_Response_System",
    live: null,
  },
  {
    id: 6,
    name: "NEC Voter Data Scraper",
    description:
      "A scraper that collects publicly available voter records from the Election Commission of Nepal using ETL pipeline to exports them as clean CSV files.",
    stack: ["Python", "BeautifulSoup", "Pandas", "PyMuPDF", "ETL Pipeline"],
    image: null,
    video: null,
    github:
      "https://github.com/Upendra48/Nepal-Election-Commission-Voter-Data-Scraper",
    live: null,
  },
];

const Showcase: React.FC = () => {
  const [activeProject, setActiveProject] = React.useState(0);
  const project = projects[activeProject];

  return (
    <section
      id="works"
      className="max-w-6xl mx-auto px-0 lg:px-6 py-12 sm:py-16 lg:py-0 min-w-0"
      style={{ overflow: "clip" }}
    >
      {/*DESKTOP*/}
      <div className="hidden lg:flex" style={{ alignItems: "flex-start" }}>
        {/* LEFT — Sticky Info Panel */}
        <div
          className="w-[45%] flex flex-col"
          style={{ position: "sticky", top: 0, height: "100vh" }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                },
              },
            }}
            className="flex-shrink-0 pt-16 pb-4 border-b border-white/10"
          >
            <div className="flex items-center justify-between pr-8">
              <h2 className="text-xl md:text-2xl font-bold tracking-[0.3em] text-[#aaa] uppercase font-poppins">
                KEY PROJECTS
              </h2>
              <span className="text-xs text-white/30 tracking-widest uppercase font-mono">
                / PORTFOLIO
              </span>
            </div>
          </motion.div>

          <div className="flex-1 flex flex-col justify-start pt-16 pr-12">
            <div className="flex flex-col">
              {/* Ticker Counter */}
              <div className="flex items-center text-sm tracking-[0.3em] text-white/40 font-mono mb-3">
                <span>[</span>
                <div
                  className="overflow-hidden flex items-center justify-center px-3"
                  style={{ height: "1.4em" }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject}
                      initial={{ y: 24 }}
                      animate={{
                        y: 0,
                        transition: {
                          duration: 0.3,
                          ease: [0.16, 1, 0.3, 1] as [
                            number,
                            number,
                            number,
                            number,
                          ],
                        },
                      }}
                      exit={{
                        y: -24,
                        transition: { duration: 0.15, ease: "easeIn" },
                      }}
                      className="whitespace-nowrap"
                    >
                      0{activeProject + 1}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <span>/</span>
                <span className="px-3">
                  {String(projects.length).padStart(2, "0")}
                </span>
                <span>]</span>
              </div>

              {/* Title */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`title-${activeProject}`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.2, ease: "easeIn" },
                  }}
                >
                  <h3 className="mb-4 text-2xl xl:text-3xl font-bold text-white tracking-tight uppercase leading-tight max-w-[90%] break-words">
                    {project.name}
                  </h3>
                </motion.div>
              </AnimatePresence>

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`desc-${activeProject}`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.6, ease: "easeOut" },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.25, ease: "easeIn" },
                  }}
                >
                  <p className="mb-6 text-sm text-white/60 leading-relaxed max-w-[380px]">
                    {project.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Stack Tags */}
              <div className="pt-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`tags-${activeProject}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1] as [
                          number,
                          number,
                          number,
                          number,
                        ],
                      },
                    }}
                    exit={{ opacity: 0, y: -6, transition: { duration: 0.2 } }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] tracking-widest text-white/50 border border-white/20 px-3 py-1 uppercase rounded-full font-medium hover:-translate-y-0.5 hover:shadow-md hover:shadow-white/5 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Image Column */}
        <div className="w-[55%]">
          {projects.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex items-center justify-end px-8"
              style={{ minHeight: "100vh" }}
              onViewportEnter={() => setActiveProject(index)}
              viewport={{ amount: 0.5 }}
            >
              <div className="relative w-full max-w-[500px]">
                <div className="absolute -inset-3 border border-moonstone/20 rounded-2xl" />
                <div className="relative z-10 w-full rounded-xl overflow-hidden shadow-2xl bg-zinc-900/20 backdrop-blur-3xl border border-white/5">
                  <div className="flex items-center justify-center">
                    {item.video ? (
                      <video
                        controls
                        playsInline
                        poster={item.image ?? undefined}
                        className="w-full h-auto block object-cover bg-zinc-900"
                      >
                        <source src={item.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-auto block"
                      />
                    ) : (
                      <div className="w-full h-64 bg-neutral-900/50 flex items-center justify-center">
                        <span className="text-white/5 text-[10px] tracking-widest uppercase">
                          No Preview Available
                        </span>
                      </div>
                    )}
                  </div>

                  {(item.github !== null || item.live !== null) && (
                    <div className="flex flex-wrap justify-center gap-2 border-t border-white/10 bg-black/20 px-4 py-3">
                      {item.github !== null && (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-white/80 hover:text-white hover:bg-white/15 transition-colors duration-300"
                        >
                          <Github size={16} aria-hidden="true" />
                          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                            GitHub
                          </span>
                        </a>
                      )}
                      {item.live !== null && (
                        <a
                          href={item.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-white/80 hover:text-white hover:bg-white/15 transition-colors duration-300"
                        >
                          <ExternalLink size={16} aria-hidden="true" />
                          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                            Live
                          </span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex lg:hidden flex-col items-center w-full min-w-0 text-center">
        {/* Heading */}
        <div className="w-full pb-4 border-b border-white/10">
          <div className="flex items-center justify-between gap-3 min-w-0">
            <h2 className="text-lg sm:text-xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase font-poppins truncate">
              PET PROJECTS
            </h2>
            <span className="text-[10px] sm:text-xs text-white/30 tracking-widest uppercase font-mono flex-shrink-0">
              / PORTFOLIO
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-center gap-12 sm:gap-16 pt-10 sm:pt-12 w-full">
          {projects.map((item, index) => (
            <article
              key={item.id}
              className="flex flex-col items-center gap-5 sm:gap-6 min-w-0 w-full max-w-lg mx-auto"
            >
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <div className="text-xs tracking-[0.2em] sm:tracking-[0.3em] text-white/40 font-mono">
                  [ 0{index + 1} / {String(projects.length).padStart(2, "0")} ]
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase leading-snug break-words">
                  {item.name}
                </h3>
              </div>

              {(item.image !== null || item.video !== null) && (
                <div className="relative w-full min-w-0 max-w-full mx-auto">
                  <div className="absolute -inset-1.5 sm:-inset-2 border border-moonstone/10 rounded-xl pointer-events-none" />
                  <div className="relative z-10 w-full rounded-lg overflow-hidden shadow-xl bg-zinc-900/20 backdrop-blur-3xl border border-white/5">
                    {item.video ? (
                      <video
                        controls
                        playsInline
                        poster={item.image ?? undefined}
                        className="w-full h-auto max-w-full block object-contain bg-zinc-900"
                      >
                        <source src={item.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={item.image ?? undefined}
                        alt={item.name}
                        className="w-full h-auto max-w-full block object-contain"
                      />
                    )}
                  </div>
                </div>
              )}

              <p className="text-sm sm:text-base text-white/60 leading-relaxed break-words">
                {item.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] tracking-widest text-white/50 border border-white/20 px-3 py-1.5 uppercase rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(item.github !== null || item.live !== null) && (
                <div className="flex flex-wrap justify-center gap-3 pt-1">
                  {item.github !== null && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 min-h-11 px-5 rounded-full bg-white/10 border border-white/20 text-white/80 hover:text-white hover:bg-white/15 transition-colors duration-300"
                    >
                      <Github size={18} aria-hidden="true" />
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                        GitHub
                      </span>
                    </a>
                  )}
                  {item.live !== null && (
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 min-h-11 px-5 rounded-full bg-white/10 border border-white/20 text-white/80 hover:text-white hover:bg-white/15 transition-colors duration-300"
                    >
                      <ExternalLink size={18} aria-hidden="true" />
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                        Live
                      </span>
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
