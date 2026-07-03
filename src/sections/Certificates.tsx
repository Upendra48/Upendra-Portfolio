import React from "react";
import { motion } from "motion/react";
import { Award, Code2, ExternalLink } from "lucide-react";

interface CertificateItem {
  title: string;
  issuer: string;
  year: string;
  link?: string;
}

const certificates: CertificateItem[] = [
  {
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    year: "2024",
    link: "https://www.linkedin.com/in/upendra48/overlay/Certifications/1502283306/treasury/?profileId=ACoAADvYNR0B51zVR41rEEPw_029yUAnO5jrIkc",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    year: "2024",
    link: "https://www.linkedin.com/in/upendra48/overlay/Certifications/607784059/treasury/?profileId=ACoAADvYNR0B51zVR41rEEPw_029yUAnO5jrIkc",
  },
];

const Certificates: React.FC = () => {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="certificates"
      className="py-12 sm:py-16 lg:py-24 max-w-6xl mx-auto px-0 lg:px-6 min-w-0"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="mb-10 sm:mb-12 lg:mb-16 border-b border-white/10 pb-4"
      >
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase">
          CERTIFICATES & PROBLEM SOLVING
        </h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-white/70">
          A snapshot of my achievements, learning milestones and consistent
          coding practice.
        </p>
      </motion.div>

      <div className="flex flex-col gap-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="glass-card rounded-2xl sm:rounded-[2rem] p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-moonstone" size={22} />
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              Certifications
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {certificates.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-white/70">{item.issuer}</p>
                  </div>
                  <span className="rounded-full border border-moonstone/20 bg-moonstone-dim px-3 py-1 text-xs uppercase tracking-[0.2em] text-moonstone">
                    {item.year}
                  </span>
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-moonstone hover:text-white transition-colors"
                  >
                    View certificate
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="glass-card rounded-2xl sm:rounded-[2rem] p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="text-moonstone" size={22} />
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              Problem Solving & Practice
            </h3>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-white/75">
            I enjoy solving algorithmic and system design problems regularly to
            strengthen my fundamentals and prepare for real-world engineering
            challenges.
          </p>

          <div className="mt-6 mx-auto rounded-[1.25rem] border border-moonstone/20 bg-[radial-gradient(circle_at_top_left,_rgba(224,231,255,0.14),_transparent_35%),linear-gradient(135deg,_rgba(224,231,255,0.06),_rgba(255,255,255,0.02))] p-3 shadow-[0_15px_45px_rgba(0,0,0,0.18)] max-w-2xl w-full">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                  LeetCode
                </p>
                <h4 className="mt-1 text-lg font-semibold text-white">
                  Problem Solving Profile
                </h4>
              </div>
              <div className="rounded-full border border-moonstone/20 bg-moonstone-dim/70 p-2.5 text-moonstone">
                <Code2 size={16} />
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <div className="rounded-full border border-moonstone/20 bg-moonstone-dim/70 px-2.5 py-1.5 text-xs text-moonstone">
                Rating:{" "}
                <span className="ml-1 font-semibold text-white">1744</span>
              </div>
            </div>

            <div className="mt-3 overflow-hidden rounded-[0.9rem] border border-white/10 bg-black/25 p-1.5">
              <img
                src="https://leetcard.jacoblin.cool/upendra10?theme=dark&font=JetBrains%20Mono&ext=heatmap"
                alt="LeetCode profile card"
                className="w-full h-auto rounded-[0.75rem]"
              />
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs sm:text-sm text-white/70">
                Consistent practice across problem solving and core DSA
                fundamentals.
              </p>
              <a
                href="https://leetcode.com/u/upendra10/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-moonstone/20 bg-moonstone-dim px-3 py-1.5 text-xs font-semibold text-moonstone transition-colors hover:text-white"
              >
                Open profile
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
