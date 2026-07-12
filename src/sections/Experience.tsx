import React from "react";
import { motion } from "motion/react";

type JourneyEntry = {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  story: string;
  category: string;
  highlights: string[];
};

const journeyData: JourneyEntry[] = [
  {
    id: "schooling",
    year: "2019 - 2021",
    title: "+2 Science",
    subtitle: "From Aishwarya Vidya Niketan, Dhangadhi (GPA: 3.25)",
    story:
      "During my +2 Science years, I developed a strong foundation in physics, chemistry, and mathematics. I also explored my interest in robotics and electronics through team projects, which sparked my passion for technology and innovation.",
    category: "Education",
    highlights: [
      "Completed +2 Science with a focus on Physics, Chemistry, and Mathematics",
      "Worked on team to create robotics and electronics projects.",
    ],
  },
  {
    id: "bachelor",
    year: "May 2022 - May 2026",
    title: "Bachelor of Electronics, Communication and Information Engineering",
    subtitle: "From Institute of Engineering, Pashchimanchal Campus (71.37% Approx.)",
    story:
      "I started shaping my path around technology, communication systems, and engineering problem solving. The focus shifted from just learning concepts to applying them in real-world contexts.",
    category: "Education",
    highlights: [
      "Joined and led the technical club i-CES, organizing workshops and events for students",
      "Participated in national-level hackathons and coding competitions, winning awards for innovative solutions",
      "Created Minor and Major projects that addressed real-world problems, showcasing my ability to apply theoretical knowledge in practical scenarios",
    ],
  },
  {
    id: "achievement",
    year: "Feb 2024 - Dec 2024",
    title: "Won Code with Coffee Junior and OSM Hackfest",
    subtitle: "Recognized for innovation and technical contribution",
    story:
      "Applied my data structures and algorithms knowledge in competition and developed a  full stack project(Sankalan) for OSM Hackfest, creating an efficient waste collection system.",
    category: "Projects",
    highlights: [
      "Won Code with Coffee Junior(coding competition) at TechParva 2.0 (2024)",
      "Won OSM Hackfest organized by the Geomatics Association of Nepal",
    ],
  },
  {
    id: "leadership",
    year: "Jan 2025 - Feb 2026",
    title: "Mentorship, leadership, and national recognition",
    subtitle: "Mentored Flutter training, led ICES, and won Hackathon Nova",
    story:
      "Mentored students in a month-long Flutter training program, completed a 6-month AI bootcamp, led ICES as President, and won Hackathon Nova at Pokhara Engineering College.",
    category: "Leadership",
    highlights: [
      "Mentored 20+ students in a month-long Flutter training program",
      "Completed a 6-month AI bootcamp and presented Potato Leaf disease detection system using CNN",
      "Led the Innovative Computer Engineering Students’ Society (i-CES) as President, managing a team of 18 members and organizing 14+ technical events impacting 2500+ students.",
      "Won Hackathon Nova at Pokhara Engineering College, where our team created: Paila, a location-powered community fitness platform that turns walking and running into a shared game.",
    ],
  },
];

const categoryStyles: Record<string, string> = {
  Education: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
  Projects: "border-sky-400/30 bg-sky-500/10 text-sky-300",
  Leadership: "border-fuchsia-400/30 bg-fuchsia-500/10 text-fuchsia-300",
  Growth: "border-amber-400/30 bg-amber-500/10 text-amber-300",
};

const Experience: React.FC = () => {
  const revealVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="journey"
      className="py-12 sm:py-16 lg:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-6 min-w-0"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="mb-10 sm:mb-12 lg:mb-16 border-b border-white/10 pb-4"
      >
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase">
          MY JOURNEY
        </h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-white/70">
          A story of curiosity, building, leadership, and growth.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-white/10 sm:left-1/2 sm:-translate-x-1/2 sm:block" />

        <div className="space-y-6 sm:space-y-10">
          {journeyData.map((entry, index) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="relative pl-10 sm:pl-0"
            >
              <div className="absolute left-0 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-moonstone/20 bg-arctic-void text-sm text-moonstone shadow-[0_0_20px_rgba(224,231,255,0.12)] sm:left-1/2 sm:-translate-x-1/2">
                {index + 1}
              </div>

              <div
                className={`sm:w-[calc(50%-1.5rem)] ${
                  index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                }`}
              >
                <div className="journey-card rounded-3xl border border-white/10 bg-moonstone-dim/80 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-moonstone/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                      {entry.year}
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${
                        categoryStyles[entry.category] ??
                        "border-white/10 bg-white/5 text-white/70"
                      }`}
                    >
                      {entry.category}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-white sm:text-2xl">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-moonstone/90">
                    {entry.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/75 sm:text-[15px]">
                    {entry.story}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {entry.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={`${entry.id}-${highlightIndex}`}
                        className="flex items-start gap-2 text-sm leading-6 text-white/80"
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-moonstone" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
