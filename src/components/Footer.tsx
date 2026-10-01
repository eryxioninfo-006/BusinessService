import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";
import xIcon from "../assets/twitter.png";
import portfolioIcon from "../assets/portfolio.png";
import howWeWorkIcon from "../assets/work.png";
import servicesIcon from "../assets/customer-service.png";
import ourStoryIcon from "../assets/reading-book.png";
import locationIcon from "../assets/map.png";
import phoneIcon from "../assets/contact-information.png";
import emailIcon from "../assets/communication.png";

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const mobileNumber = import.meta.env.VITE_CONFIG_MOBILE_NUMBER;
  const email = import.meta.env.VITE_CONFIG_EMAIL;
  const instagram = `https://www.instagram.com/${import.meta.env.VITE_CONFIG_INSTAGRAM_ID}/`;
  const linkedInUrl = import.meta.env.VITE_CONFIG_LINKEDIN_URL

  const socialLinks = [
    {
      icon: linkedinIcon,
      href: linkedInUrl,
    },
    {
      icon: instagramIcon,
      href: instagram,
    },
    {
      icon: xIcon,
      href: "#",
    },
  ];

  const navbarOptions = [
    {
      name: "Services",
      icon: servicesIcon,
      link: '#services',
    },
    {
      name: "About",
      icon: ourStoryIcon,
      link: '#about',
    },
    {
      name: "Process",
      icon: howWeWorkIcon,
      link: '#process',
    },
    {
      name: "Portfolio",
      icon: portfolioIcon,
      link: '#portfolio',
    }, 
  ]

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7 }}
      className="relative mt-24 border-t border-[#D4AF37]/10"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="site-container">
        {/* CTA Section */}

        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-black tracking-[0.3em] uppercase">
              Eryxion
            </h2>

            <p className="mt-5 text-sm leading-8 text-white/60">
              A premium digital transformation agency helping ambitious brands
              scale through technology, automation, strategy, and design.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Services
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>Website Development</li>
              <li>Digital Marketing</li>
              <li>Analytics & Intelligence</li>
              <li>Workflow Automation</li>
              <li>Business Consulting</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {navbarOptions.map((option) => {
                return (
                  <li key={option.link}>
                    <div className="flex items-center gap-2">
                      <img src={option.icon} alt={option.name} className="w-5 h-5" />
                      <a href={option.link}>{option.name}</a>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <img src={emailIcon} alt="Email" className="w-5 h-5" />
                <p>{email}</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={phoneIcon} alt="Phone" className="w-5 h-5" />
                <p>+91 {mobileNumber}</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={locationIcon} alt="Location" className="w-5 h-5" />
                <p>Tamil Nadu, India</p>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              {socialLinks.map((links)=> {
                return (
                  <a
                    key={links.href}
                    href={links.href}
                    className="transition hover:text-[#D4AF37]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={links.icon} alt={links.href} className="w-6 h-6" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#D4AF37]/10 py-6 text-sm text-white/40 md:flex-row">
          <p>
            © {new Date().getFullYear()} Eryxion. All rights reserved.
          </p>

          <p>
            Designed & Developed by Eryxion
          </p>
        </div>
      </div>
    </motion.footer>
  );
};