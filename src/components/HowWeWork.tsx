import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import optimization from "../assets/speed-radar.png";
import execution from "../assets/execution.png";
import strategy from "../assets/strategy.png";
import discovery from "../assets/research.png";

export const HowWeWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Discovery",
      desc: "We analyse your business, audience, competitors, and digital ecosystem to uncover opportunities and define priorities.",
      image: discovery,
    },
    {
      number: "02",
      title: "Strategy",
      desc: "A tailored roadmap is created by combining technology, marketing, automation, and business intelligence into one scalable growth system.",
      image: strategy,
    },
    {
      number: "03",
      title: "Execution",
      desc: "Our team builds, launches, and optimises digital systems with precision, ensuring quality, consistency, and measurable outcomes.",
      image: execution,
    },
    {
      number: "04",
      title: "Optimisation",
      desc: "Continuous analysis and refinement ensure sustainable growth, improved performance, and long-term business success.",
      image: optimization,
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="process"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7 }}
      className="relative site-container py-24"
    >

      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
          How We Work
        </p>

        <h2 className="mt-5 text-5xl font-black leading-tight md:text-5xl">
          A Refined Process.
          <br />
          Exceptional Results.
        </h2>

        <p className="mt-6 text-sm leading-8 text-white/60">
          Every engagement follows a structured methodology designed to
          transform vision into measurable business outcomes.
        </p>
      </div>

      {/* Process Cards */}
      <div className="mt-20 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-[#D4AF37]/10 bg-[#111111] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/25 hover:shadow-[0_0_30px_rgba(212,175,55,0.08)]"
          >
            {/* Large Background Number */}
            <div className="absolute right-5 top-4 text-7xl font-black text-[#D4AF37]/10">
              {step.number}
            </div>

            {/* Small Badge */}
            <div className="inline-flex h-12 w-12 items-center justify-center text-sm font-semibold text-[#D4AF37]">
              <img src={step.image} alt={step.title} className="h-12 w-12" />
            </div>

            {/* Content */}
            <div className="mt-6 flex flex-1 flex-col">
              <h3 className="text-2xl font-black">{step.title}</h3>

              <p className="mt-5 text-sm leading-8 text-white/60">
                {step.desc}
              </p>
            </div>

            {/* Bottom Divider */}
            <div className="mt-auto pt-8">
              <div className="h-px w-full bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};