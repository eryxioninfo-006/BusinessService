import "./App.css";
import EryxionWebsite from "./components/ErixiyonWebsite";
import { useState, useEffect } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import logo from "./assets/EryxionLogo.jpeg";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <LayoutGroup>
        <AnimatePresence>
          {loading ? (
            <motion.div
              key="splash"
              className="fixed inset-0 flex items-center justify-center bg-black"
              exit={{ opacity: 0 }}
            >
              <motion.img
                layoutId="eryxion-logo"
                src={logo}
                className="h-80 w-80"
                initial={{
                  scale: 4,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="website"
              className="min-h-screen bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <EryxionWebsite />
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
}

export default App;
