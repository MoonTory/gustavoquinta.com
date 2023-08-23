import { useState } from "react";

export function Links({ section }: { section: string }) {
  return (
    <div className="flex flex-wrap items-center justify-start mt-6">
      <Link text="WORK" label="01" inView={section === "work"} />
      <Link text="PROJECTS" label="02" inView={section === "projects"} />
      <Link text="EDUCATION" label="03" inView={section === "education"} />
      <Link text="MISC" label="04" inView={section === "misc"} />
    </div>
  );
}

export const Link = ({
  text,
  label,
  inView,
}: {
  text: string;
  label: string;
  inView: boolean;
}) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      onClick={() => {
        const el = document.getElementById(text.toLowerCase());
        el?.scrollIntoView({ behavior: "smooth" });
      }}
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
      className="flex items-center justify-center text-xs font-bold mr-4 mb-2 cursor-pointer"
    >
      <span
        className={`transition-colors ${
          selected || inView ? "text-brand" : "text-white"
        }`}
      >
        {label}
      </span>
      <div
        className={`w-[12px] lg:w-[20px] h-[1px] mx-1 transition-colors ${
          selected || inView ? "bg-brand" : "bg-white"
        }`}
      />
      <span
        className={`transition-colors ${
          selected || inView ? "text-brand" : "text-white"
        }`}
      >
        {text.toUpperCase()}
      </span>
    </div>
  );
};
