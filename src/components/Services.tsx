import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import webImage from '../assets/codetags.png';
import automation from '../assets/automation.png';
import digitalMarketing from '../assets/bullhorn.png';
import businessConsulting from '../assets/conversation.png';
import analysis from '../assets/analysis.png';
import creativeDesign from '../assets/design-thinking.png';

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const services = [
    {
      title: "Digital Marketing",
      description:
        "Data-driven campaigns designed to increase visibility, engagement, and revenue.",
      image: digitalMarketing,
    },
    {
      title: "Analytics & Intelligence",
      description:
        "Transform business data into actionable insights with real-time reporting.",
      image: analysis,
    },
    {
      title: "Website Development",
      description:
        "High-performance websites engineered for growth, speed, and conversion.",
      image: webImage,
    },
    {
      title: "Creative Design",
      description:
        "Luxury branding, visual identity, and user experiences that leave an impact.",
      image: creativeDesign,
    },
    {
      title: "Workflow Automation",
      description:
        "Eliminate repetitive tasks and streamline operations through automation.",
      image: automation,
    },
    {
      title: "Business Consulting",
      description:
        "Strategic guidance to accelerate growth and improve operational efficiency.",
      image: businessConsulting,
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="services"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative site-container py-20 lg:py-28"
    >

      {/* Heading */}
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
          Services
        </p>

        <h2 className="mt-4 text-[38px] font-black leading-tight md:text-[52px]">
          Premium Solutions
          <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#FFF8DC] bg-clip-text text-transparent">
            {" "}
            Built For Scale
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-sm leading-8 text-white/60">
          We partner with ambitious brands to create digital ecosystems that
          combine strategy, technology, design, and automation for sustainable
          growth.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group relative overflow-hidden rounded-[28px] border border-[#D4AF37]/10 bg-[#111111] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/30"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center">
              <img src={service.image} />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-xl font-bold text-white">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mt-4 text-sm leading-7 text-white/60">
              {service.description}
            </p>

            {/* Bottom Line */}
            <div className="mt-8 h-px w-full bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
          </div>
        ))}
      </div>
    </motion.section>
  );
};