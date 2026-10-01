import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const portfolio = [
    {
      title: "Luxury Real Estate Platform",
      category: "Web Development",
      result: "+240% Lead Growth",
      description:
        "A premium real estate platform engineered to generate qualified leads and deliver exceptional customer experiences.",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Executive AI Dashboard",
      category: "Analytics & Intelligence",
      result: "4.8x ROI",
      description:
        "Real-time executive dashboard delivering actionable business intelligence.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Premium Brand Campaign",
      category: "Digital Marketing",
      result: "+180% Engagement",
      description:
        "Strategic campaigns focused on visibility, engagement, and growth.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="portfolio"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7 }}
      className="relative site-container py-24"
    >

      {/* Header */}
      <div className="mb-14">
        <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
          Portfolio
        </p>

        <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
          Selected Work &
          <br />
          Success Stories
        </h2>

        <p className="mt-6 max-w-2xl text-sm leading-8 text-white/60">
          Premium digital solutions designed to create measurable business
          growth and long-term value.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Featured Project */}
        <div className="group relative overflow-hidden rounded-[32px] border border-[#D4AF37]/10 bg-[#111111] lg:col-span-7">
          <img
            src={portfolio[0].image}
            alt={portfolio[0].title}
            className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="absolute bottom-0 left-0 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              {portfolio[0].category}
            </p>

            <h3 className="mt-3 text-3xl font-black">
              {portfolio[0].title}
            </h3>

            <div className="mt-3 text-4xl font-black text-[#D4AF37]">
              {portfolio[0].result}
            </div>

            <p className="mt-4 max-w-lg text-sm leading-7 text-white/75">
              {portfolio[0].description}
            </p>
          </div>
        </div>

        {/* Secondary Projects */}
        <div className="space-y-6 lg:col-span-5">
          {portfolio.slice(1).map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[28px] border border-[#D4AF37]/10 bg-[#111111] transition hover:border-[#D4AF37]/30"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[180px] w-full object-cover"
              />

              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                  {item.category}
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  {item.title}
                </h3>

                <div className="mt-3 text-2xl font-black text-[#D4AF37]">
                  {item.result}
                </div>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};