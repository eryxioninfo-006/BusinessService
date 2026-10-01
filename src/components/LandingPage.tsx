import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const LandingPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 50 }
      }
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[160px]" />
        <div className="absolute right-[5%] top-[10%] h-[600px] w-[600px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />
      </div>

      <div className="relative grid min-h-[calc(100svh-4rem)] w-full items-center gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 lg:px-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] xl:gap-16 2xl:gap-20">
        {/* LEFT */}

        <div className="relative z-10 min-w-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#D4AF37]">
              Premium Digital Transformation Agency
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-[44px] font-extrabold leading-[1.02] tracking-[-0.05em] sm:text-[58px] md:text-[68px] lg:text-[clamp(48px,4.5vw,86px)]">
            <span className="block">Building Elite</span>
            <span className="block bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#FFF8DC] bg-clip-text text-transparent">
              Digital Experiences
            </span>
            <span className="block">
              For Visionary <br className="xl:hidden" />Brands
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-[15px] leading-8 text-white/65 lg:text-[16px]">
            Eryxion crafts high-performance digital ecosystems that blend
            strategy, technology, automation, design, and analytics into
            scalable solutions that accelerate business growth and create
            lasting competitive advantage.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-[#D4AF37]/10 pt-8 sm:grid-cols-3">
            {[
              {
                value: "120+",
                label: "Projects Delivered",
              },
              {
                value: "10x",
                label: "Growth Potential",
              },
              {
                value: "24/7",
                label: "Strategic Support",
              },
            ].map((item) => (
              <div key={item.label}>
                <h3 className="text-[30px] font-black tracking-tight text-[#D4AF37]">
                  {item.value}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/40">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================== */}
        {/* RIGHT */}
        {/* ===================================================== */}

        <div className="relative hidden min-w-0 items-center justify-end lg:flex">
          {/* Main Glow */}
          <div className="absolute right-[10%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[150px]" />

          {/* Secondary Glow */}
          <div className="absolute bottom-[10%] left-[15%] h-[300px] w-[300px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />

          {/* Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }
                : {
                    opacity: 0,
                    scale: 0.92,
                    x: 40,
                  }
            }
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative w-full overflow-hidden rounded-[38px] border border-[#D4AF37]/15 bg-[#0D0D0D] shadow-[0_30px_120px_rgba(0,0,0,0.8)]"
          >
            {/* Dashboard Header */}
            <div className="flex items-center justify-between border-b border-[#D4AF37]/10 px-7 py-5">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>

              <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/70">
                Growth Intelligence
              </p>
            </div>

            {/* Dashboard Content */}
            <div className="space-y-5 p-6">
              {/* Revenue Card */}
              <div className="rounded-[30px] border border-[#D4AF37]/15 bg-gradient-to-br from-[#D4AF37]/15 to-[#D4AF37]/5 p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                      Revenue Growth
                    </p>

                    <h2 className="mt-5 text-6xl font-black tracking-tight xl:text-7xl">
                      240%
                    </h2>
                  </div>

                  <div className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-xs font-medium text-[#D4AF37]">
                    +18.2%
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-7 h-2 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "84%" } : { width: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.5,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]"
                  />
                </div>
              </div>

              {/* Two Cards */}
              <div className="grid grid-cols-2 gap-5">
                <div className="rounded-[26px] border border-[#D4AF37]/10 bg-[#151515] p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Automation
                  </p>

                  <h3 className="mt-4 text-2xl font-bold text-[#D4AF37]">
                    AI Powered
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    Intelligent workflows built for scale.
                  </p>
                </div>

                <div className="rounded-[26px] border border-[#D4AF37]/10 bg-[#151515] p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Analytics
                  </p>

                  <h3 className="mt-4 text-2xl font-bold text-[#D4AF37]">
                    Real-Time
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    Data-driven business intelligence.
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="rounded-[26px] border border-[#D4AF37]/10 bg-[#151515] p-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                    Digital Ecosystem
                  </p>

                  <div className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
                </div>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                  Enterprise-grade digital systems designed for ambitious
                  businesses seeking sustainable growth, operational
                  excellence, and market leadership.
                </p>
              </div>

              {/* Bottom Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                  <p className="text-[10px] uppercase tracking-wider text-white/30">
                    Efficiency
                  </p>
                  <p className="mt-2 text-xl font-bold text-white">
                    +72%
                  </p>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                  <p className="text-[10px] uppercase tracking-wider text-white/30">
                    Performance
                  </p>
                  <p className="mt-2 text-xl font-bold text-white">
                    +91%
                  </p>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                  <p className="text-[10px] uppercase tracking-wider text-white/30">
                    Scale
                  </p>
                  <p className="mt-2 text-xl font-bold text-white">
                    4.8x
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
