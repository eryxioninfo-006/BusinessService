import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Insights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const insights = [
    {
      title: "How Intelligent Automation Multiplies Operational Efficiency",
      category: "Automation",
    },
    {
      title: "Building a Premium Digital Presence That Commands Authority",
      category: "Digital Strategy",
    },
    {
      title: "The KPI Architecture Behind Scalable Business Growth",
      category: "Analytics",
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="insights"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7 }}
      className="relative site-container py-24"
    >
      {/* Gold Glow */}
      <div className="absolute left-0 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      {/* Header */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
            Insights
          </p>

          <h2 className="mt-5 text-5xl font-black leading-tight md:text-5xl">
            Intelligence &
            <br />
            Perspectives.
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-8 text-white/60">
            Strategic frameworks, digital intelligence, and actionable
            insights designed to help ambitious businesses scale with
            confidence.
          </p>
        </div>

        <button className="w-fit rounded-full border border-[#D4AF37]/15 bg-[#111111] px-6 py-3 text-sm font-medium text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#161616]">
          View All Articles
        </button>
      </div>

      {/* Articles */}
      <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
        {insights.map((item, index) => (
          <div
            key={item.title}
            className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-[#D4AF37]/10 bg-[#111111] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/25 hover:shadow-[0_0_30px_rgba(212,175,55,0.08)]"
          >
            {/* Large Background Number */}
            <div className="absolute right-5 top-4 text-7xl font-black text-[#D4AF37]/10">
              0{index + 1}
            </div>

            {/* Category */}
            <p className="relative z-10 text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
              {item.category}
            </p>

            {/* Content */}
            <div className="mt-6 flex flex-1 flex-col">
              <h3 className="text-2xl font-black leading-tight">
                {item.title}
              </h3>

              <p className="mt-5 text-sm leading-8 text-white/60">
                Discover practical strategies, proven frameworks, and
                data-driven approaches used by high-growth businesses.
              </p>
            </div>

            {/* Footer */}
            <div className="mt-auto pt-8">
              <div className="mb-5 h-px w-full bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />

              <div className="flex items-center justify-between">
                <span className="text-sm text-white/50">
                  Read Article
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/15 text-[#D4AF37] transition duration-300 group-hover:border-[#D4AF37]/40">
                  →
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};