import React from "react";
import { motion, Variants, useAnimation } from "framer-motion";

export const SideLink: React.FC<{
  text: string;
  inView: boolean;
}> = ({ text, inView }) => {
  const controls = useAnimation();
  const [selected, setSelected] = React.useState(false);

  const animation: Variants = {
    selected: {
      backgroundColor: "bg-brand",
      height: "24px",
      transition: {
        damping: 40,
        duration: 0.25,
      },
    },
    idle: {
      backgroundColor: "bg-white",
      height: "16px",
    },
  };

  const onMouseEnter = () => {
    setSelected(true);
    controls.start("selected");
  };

  const onMouseLeave = () => {
    setSelected(false);
    controls.start("idle");
  };

  const navigate = () => {
    setSelected(true);
    controls.start("selected");
    const el = document.getElementById(text.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    if (inView) controls.start("selected");
    else controls.start("idle");
  }, [selected, inView]);

  return (
    <div
      onClick={navigate}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ writingMode: "vertical-rl" }}
      className="pt-4 pb-4 ml-2 mr-2 cursor-pointer"
    >
      <motion.div
        initial="idle"
        animate={controls}
        variants={animation}
        className={`w-[1px] h-[16px] transition-colors ${
          selected || inView ? "bg-brand" : "bg-white"
        }`}
      />
      <div
        className={`transition-colors ${
          selected || inView ? "text-brand" : "text-white"
        }`}
      >
        {text.toUpperCase()}
      </div>
    </div>
  );
};

export const Sidebar: React.FC<{ section: string }> = ({ section }) => {
  const links = ["work", "projects", "education", "misc"];
  const animations: Variants = {
    hidden: {
      width: "0rem",
    },
    visible: {
      width: "2.5rem",
      transition: {
        damping: 40,
      },
    },
  };

  return (
    <motion.aside
      animate="visible"
      initial="hidden"
      variants={animations}
      className="bg-dusty text-white shadow-xl min-h-screen overflow-hidden w-10 fixed top-[56px] left-0 z-10"
    >
      <nav>
        {links.map((link, idx) => (
          <SideLink key={idx} text={link} inView={section === link} />
        ))}
      </nav>
    </motion.aside>
  );
};
