import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const email = import.meta.env.VITE_CONFIG_EMAIL;
  const mobileNumber = import.meta.env.VITE_CONFIG_MOBILE_NUMBER;
  const formUrl = import.meta.env.VITE_CONFIG_FORM_URL;

  const scheduleMeeting = () => {
    window.open(formUrl, '_blank')
  }

  const navigateToGmail = () => {
    window.location.href = `mailto:${email}?subject=Consultation Request`;
  }

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7 }}
      className="relative site-container py-24"
    >

      <div className="overflow-hidden rounded-[36px] border border-[#D4AF37]/10 bg-[#111111] p-10 lg:p-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
            Get In Touch
          </p>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
            Let's Build Something
            <br />
            Exceptional Together.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-white/60">
            Whether you're launching a new venture, scaling an existing
            business, or transforming your digital presence, Eryxion is ready
            to help you achieve measurable growth.
          </p>

          {/* Contact Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-[24px] border border-[#D4AF37]/10 bg-black/30 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                Email
              </p>

              <p className="mt-4 text-white/80">
                {email}
              </p>
            </div>

            <div className="rounded-[24px] border border-[#D4AF37]/10 bg-black/30 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                Phone
              </p>

              <p className="mt-4 text-white/80">
                +91 {mobileNumber}
              </p>
            </div>

            <div className="rounded-[24px] border border-[#D4AF37]/10 bg-black/30 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                Location
              </p>

              <p className="mt-4 text-white/80">
                Tamil Nadu, India
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 cursor-pointer" onClick={scheduleMeeting}>
              Schedule Consultation
            </button>

            <button className="rounded-full border border-[#D4AF37]/20 bg-transparent px-8 py-4 text-sm font-medium text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37]/50 cursor-pointer" onClick={navigateToGmail}>
              {email}
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};