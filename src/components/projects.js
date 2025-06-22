import React, { useState } from "react"; 

const projectsData = [
  {
    title: "Qpharma",
    tech: "HTML | CSS | JS | Bootstrap",
    description: "Enhanced performance, implemented GraphQL integration, upgraded framework to Stencil, improved SEO and accessibility.",
    link: ""
  },
  {
    title: "SK-II",
    tech: "HTML | CSS | JS | eCommerce Website | BigCommerce | Bootstrap",
    description: "Enhanced performance, implemented GraphQL integration, upgraded framework to Stencil, improved SEO and accessibility.",
    link: "https://www.sk-ii.com"
  },
  {
    title: "Bestway2India Website",
    tech: "HTML | CSS | JS | eCommerce Website | Bootstrap",
    description: "Designed mobile-first layouts, created email templates, ensured SEO and WCAG compliance.",
    link: "https://www.bestway2india.com/"
  },
  {
    title: "Bestway Corporate",
    tech: "HTML | CSS | JS | Corporate Website | Bootstrap",
    description: "Designed mobile-first layouts, created email templates, ensured SEO and WCAG compliance.",
    link: "https://www.bestway.in"
  },
  {
    title: "OZ naturals",
    tech: "Photoshop | HTML | CSS | JS | eCommerce",
    description: "Designed website layout, implementation using HTML and css",
    link: "https://www.oznaturals.com/"
  },
  {
    title: "Huntley Equestrian",
    tech: "Photoshop | HTML | CSS | JS",
    description: "Designed website layout, implementation using HTML and css",
    link: "http://www.huntleyequestrian.com"
  },
  {
    title: "Union bay",
    tech: "Photoshop | HTML | CSS | JS",
    description: "Designed website layout, implementation using HTML and css",
    link: "http://unionbay.com/ "
  },
  {
    title: "Class8truck Parts",
    tech: "Photoshop | HTML | CSS | JS",
    description: "Designed website layout, implementation using HTML and css",
    link: "https://class8truckparts.com/"
  },
  {
    title: "Linensnow",
    tech: "Photoshop | HTML | CSS | JS",
    description: "Designed website layout, implementation using HTML and css",
    link: "https://linensnow.com/"
  },
  {
    title: "Restorsea",
    tech: "Photoshop | HTML | CSS | JS",
    description: "Designed website layout, implementation using HTML and css",
    link: "https://www.restorsea.com/"
  },
  {
    title: "Shop crackerbarrel",
    tech: "Photoshop | HTML | CSS | JS",
    description: "Designed website layout, implementation using HTML and css",
    link: "http://shop.crackerbarrel.com/ "
  },
  {
    title: "Review Caddy",
    tech: "Photoshop | HTML | CSS | JS",
    description: "Designed website layout, implementation using HTML and css",
    link: "http://www.reviewcaddy.com/ "
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 6);

  return (
    <section id="projects" className="py-8 md:py-16 max-w-5xl mx-auto position-relative">
      <h3 className="text-4xl mb-6 text-white font-bold">Projects</h3>
      <div className="grid gap-6 md:grid-cols-3">
        {visibleProjects.map((project, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-md shadow-lg border bg-amber-950 border-amber-950 hover:bg-amber-950 transition duration-500 delay-100 hover:shadow-[0px_0px_20px_10px_rgba(68,26,3,0.8)] hover:border-amber-500
              ${showAll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              animate-fadein`}
            style={{
              transition: "opacity 0.5s, transform 0.5s",
              opacity: 1,
              transform: "translateY(0)",
              animation: "fadein 0.5s"
            }}
          >
            <h4 className="text-slate-200 text-l font-normal">{project.title}</h4>
            <p className="text-slate-400 text-sm mb-2">{project.tech}</p>
            {/* <p className="text-slate-400 mb-2">{project.description}</p> */}
            {project.link && (
              <p className="text-slate-400 mb-2">
                <a href={project.link} target="_blank" rel="noopener">{project.link}</a>
              </p>
            )}
          </div>
        ))}
      </div>
      {projectsData.length > 6 && (
        <div className="text-center mt-8">
          <button
            className="px-6 py-2 border text-white-400 text-sm rounded hover:bg-white hover:text-slate-900 transition"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
      {/* FadeIn/FadeOut keyframes */}
      <style>
        {`
          @keyframes fadein {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
