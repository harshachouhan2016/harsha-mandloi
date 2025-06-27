import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Unisoft solutions, Hamilton",
    role: "UI Designer / Developer",
    duration: "Nov 2024 - Present",
    project: "",
    summary:
      "Developed adaptive, mobile-friendly layouts using Bootstrap and CSS media queries for seamless experiences across all devices.",
  },
  {
    company: "LTIMindtree, Pune, Maharashtra",
    role: "UI Designer / Developer",
    duration: "June 2021 - June 2023",
    project: "",
    summary:
      "Developed and maintained SK-II's eCommerce site using BigCommerce. Improved performance, accessibility, and implemented GraphQL for efficient data fetching.",
  },
  {
    company: "Bestway Tours and Safaris Pvt. Ltd, Gurugram, Haryana",
    role: "UI Designer / Developer",
    duration: "June 2017 - May 2021",
    project: "",
    summary:
      "Designed mobile-first layouts using Bootstrap. Created responsive email templates and applied SEO and accessibility best practices.",
  },
  {
    company: "V Group INC., Bhopal, M.P.",
    role: "UI Designer / Developer",
    duration: "August 2012 - October 2016",
    summary:
      "Worked with Shopify, BigCommerce, and Magento. Built responsive UI components and ensured SEO and cross-browser compatibility.",
  },
  {
    company: "Sakshi Tech Solutions, Bhopal, M.P",
    role: "Junior UI Designer / Developer",
    duration: "December 2011 - June 2012",
    summary:
      "Converted wireframes to responsive HTML/CSS. Collaborated with designers and backend developers to deliver clean UI.",
  },
];

const ExperienceData = () => {
  return (
    <section id="experience" className="max-w-5xl mx-auto py-10 sm:mt-10">
      <h3 className="text-4xl mb-10 text-slate-900 font-normal">
        Professional Experience
      </h3>
      <div className="relative md:px-0 px-2">
        {/* Vertical timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-orange-400 to-slate-300 rounded -translate-x-1/2"></div>
        <div>
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={` xs:mb-2 relative flex flex-col md:flex-row items-start group ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div
                  className={`hidden md:flex absolute top-8 w-8 flex-col items-center z-10 ${
                    isLeft ? "left-1/2 -translate-x-1/2" : "right-1/2 translate-x-1/2"
                  }`}
                >
                  <span className="block w-4 h-4 rounded-full border-4 border-orange-500 bg-white shadow-lg group-hover:bg-orange-500 transition"></span>
                  {index !== experiences.length - 1 && (
                    <span className="flex-1 w-1 bg-gradient-to-b from-orange-400 to-slate-300"></span>
                  )}
                </div>
                {/* Card with notch */}
                <div
                  className={`
                    relative bg-slate-800 p-6 rounded-lg shadow-md border border-slate-800 hover:border-orange-400 transition w-full md:w-[48%]
                    ${isLeft ? "md:ml-0 md:mr-auto" : "md:mr-0 md:ml-auto"}
                  `}
                  style={{ marginLeft: isLeft ? 0 : "auto", marginRight: isLeft ? "auto" : 0 }}
                >
                  {/* Notch */}
                  <span
                   className={`
                    hidden md:block absolute top-7 w-6 h-6 bg-slate-800 border-l border-b border-slate-800 rotate-45 z-0
                    ${isLeft ? "-right-3" : "-left-3"}
                  `}
                  ></span>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 relative z-10">
                    <h3 className="text-xl font-semibold text-slate-200">
                      {exp.role}
                    </h3>
                  </div>
                    <span className="text-sm text-slate-400 italic">
                      {exp.duration}
                    </span>
                  <p className="text-sm text-slate-300 mb-1">{exp.company}</p>
                  {exp.project && (
                    <p className="text-xs text-orange-400 mb-2 break-all">
                      {exp.project.split("|").map((url, i) => (
                        <span key={i}>
                          <a
                            href={url.trim()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-orange-600"
                          >
                            {url.trim()}
                          </a>
                          {i < exp.project.split("|").length - 1 && " | "}
                        </span>
                      ))}
                    </p>
                  )}
                  {exp.summary && (
                    <p className="text-sm text-slate-300 mt-2">{exp.summary}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceData;
