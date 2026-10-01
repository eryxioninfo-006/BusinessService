import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import strategicPartnerships from "../assets/strategic-partnerships.png";
import execution from "../assets/strategic.png";
import designThinking from "../assets/design-thinking.png";

export const OurStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative site-container py-24"
    >

      <div className="grid items-start gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT */}
        <div className="lg:sticky lg:top-28">
          <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
            Our Story
          </p>

          <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight md:text-5xl">
            Where Strategy
            <br />
            Meets Excellence.
          </h2>

          <div className="mt-8 h-px w-24 bg-gradient-to-r from-[#D4AF37] to-transparent" />
        </div>

        {/* RIGHT */}
        <div>
          {/* Main Story Card */}
          <div className="rounded-[34px] border border-[#D4AF37]/10 bg-[#111111] p-8 lg:p-10">
            <p className="text-[16px] leading-8 text-white/75">
              Eryxion was founded with a simple belief: exceptional businesses
              deserve exceptional digital systems. We exist to bridge the gap
              between ambition and execution by combining strategic insight,
              cutting-edge technology, and measurable business outcomes.
            </p>

            <p className="mt-7 text-[16px] leading-8 text-white/60">
              Rather than delivering isolated services, we architect complete
              growth ecosystems. Every website, automation workflow, marketing
              strategy, and analytics framework is designed to work together,
              creating sustainable momentum that compounds over time.
            </p>

            <div className="mt-8 border-t border-[#D4AF37]/10 pt-8">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <h3 className="text-3xl font-black text-[#D4AF37]">120+</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/40">
                    Projects
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-[#D4AF37]">98%</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/40">
                    Retention
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-[#D4AF37]">24/7</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/40">
                    Support
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="group rounded-[28px] border border-[#D4AF37]/10 bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.08)]">
              <div className="flex h-12 w-12 items-center justify-center">
                <img src={designThinking} alt="Strategic Thinking" className="h-12 w-12" />
              </div>

              <h3 className="mt-6 text-lg font-bold">
                Strategic Thinking
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                Every decision is guided by long-term business objectives rather
                than short-term trends.
              </p>
            </div>

            <div className="group rounded-[28px] border border-[#D4AF37]/10 bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.08)]">
              <div className="flex h-12 w-12 items-center justify-center">
                <img src={execution} alt="Precision Execution" className="h-12 w-12" />
              </div>

              <h3 className="mt-6 text-lg font-bold">
                Precision Execution
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                From design to deployment, every detail is crafted with
                excellence and consistency.
              </p>
            </div>

            <div className="group rounded-[28px] border border-[#D4AF37]/10 bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.08)]">
              <div className="flex h-12 w-12 items-center justify-center">
                <img src={strategicPartnerships} alt="Enduring Partnerships" className="h-12 w-12" />
              </div>

              <h3 className="mt-6 text-lg font-bold">
                Enduring Partnerships
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                We operate as a trusted extension of your team, invested in your
                long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};