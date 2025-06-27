import React, { useState, useEffect } from "react"; 

const projectsData = [
  {
    title: "SK-II",
    tech: "HTML | CSS | JS | eCommerce Website | BigCommerce | Bootstrap | Stensil | Accessibility | SEO",
    description: "Spearheaded the end-to-end development of high-performance eCommerce sites on the BigCommerce platform, ensuring scalable architecture and modern design standards. ",
    link: "https://www.sk-ii.com",
    image:"/assets/images/sk-ii.jpg"
  },
  {
    title: "Bestway2India Website",
    tech: "HTML | CSS | JS | eCommerce Website | Bootstrap | Accessibility | SEO | Responsive Design ",
    description: "Led UI/UX design for multiple travel websites, including bestway.in and bestway2india.com, focusing on mobile-first approaches and responsive design. Developed custom components using HTML, CSS, and JavaScript to enhance user experience.",
    link: "https://www.bestway2india.com/",
    image:"/assets/images/besway2india.jpg"
  },
  {
    title: "Huntley Equestrian",
    tech: "Photoshop | HTML | CSS | JS | eCommerce | SEO ",
    description: "Designed website layout in Adobe photoshop, implementation using HTML and css",
    link: "http://www.huntleyequestrian.com",
    image:"/assets/images/huntley.jpg"
  },
  {
    title: "Union bay",
    tech: "Photoshop | HTML | CSS | JS",
    description: "Implementation using HTML and css. Maintained and updated the website, ensuring it remained responsive and user-friendly.",
    link: "http://unionbay.com/ ",
    image:"/assets/images/union.jpg"
  },
  {
    title: "Class8truck Parts",
    tech: "Photoshop | HTML | CSS | JS | eCommerce | SEO",
    description: "Implementation using HTML and css. Maintained and updated the website, ensuring it remained responsive and user-friendly.",
    link: "https://class8truckparts.com/",
    image:"/assets/images/class8truckparts.jpg"
  },
  {
    title: "Linensnow",
    tech: "Photoshop | HTML | CSS | JS | eCommerce | SEO",
    description: "Designed website layout, Maintained and updated the website, ensuring it remained responsive and user-friendly. Created inventory with product images and descriptions with variation, ensuring accurate representation of products.",
    link: "https://linensnow.com/",
    image:"/assets/images/linensnow.jpg"
  },
  {
    title: "Restorsea",
    tech: "Photoshop | HTML | CSS | JS",
    description: "Implementation using HTML and css. Maintained and updated the website, ensuring it remained responsive and user-friendly.",
    link: "https://www.restorsea.com/",
    image:"/assets/images/restorsea.jpg"
  },
  {
    title: "Shop crackerbarrel",
    tech: "Photoshop | HTML | CSS | JS | eCommerce | SEO",
    description: "Implementation using HTML and css. Maintained and updated the website, ensuring it remained responsive and user-friendly.",
    link: "http://shop.crackerbarrel.com/ ",
    image:"/assets/images/crackerbarrel.jpg"
  },
  {
    title: "Review Caddy",
    tech: "Photoshop | HTML | CSS | JS | Accessibility ",
    description: "Designed website layout, implementation using HTML and css",
    link: "http://www.reviewcaddy.com/ ",
    image:"/assets/images/reviewcaddy.jpg"
  },
  {
    title: "Westcott Brand",
    tech: "Photoshop | HTML | CSS | JS",
    description: "Implementation using HTML and css. Maintained and updated the website, ensuring it remained responsive and user-friendly.",
    link: "http://www.reviewcaddy.com/ ",
    image:"/assets/images/westcott.jpg"
  }, 
  {
    title: "Qpharma",
    tech: "HTML | CSS | JS | Bootstrap",
    description: "Developed adaptive, mobile-friendly layouts using Bootstrap and CSS media queries for seamless experiences across all devices",
    link: "",
  },
  {
    title: "OZ naturals",
    tech: "Photoshop | HTML | CSS | JS | eCommerce",
    description: "Implementation using HTML and css. Maintained and updated the website, ensuring it remained responsive and user-friendly.",
    link: "https://www.oznaturals.com/"
  },
  {
    title: "Bestway Corporate",
    tech: "HTML | CSS | JS | Corporate Website | Bootstrap",
    description: "Designed mobile-first layouts, created email templates, ensured SEO and WCAG compliance.",
    link: "https://www.bestway.in"
  }
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [tilesPerPage, setTilesPerPage] = useState(2);

  const total = projectsData.length;

  // Responsive: 1 tile for mobile, 2 for desktop
  useEffect(() => {
    const handleResize = () => {
      setTilesPerPage(window.innerWidth < 640 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate the indices for the tiles to show, with wrap-around
  const getVisibleProjects = () => {
    if (total <= tilesPerPage) return projectsData;
    let indices = [];
    for (let i = 0; i < tilesPerPage; i++) {
      indices.push((current + i) % total);
    }
    return indices.map(i => projectsData[i]);
  };

  const prevProject = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const visibleProjects = getVisibleProjects();

  return (
    <section id="projects" className="py-10 sm:max-w-5xl xs:max-w-2xl mx-auto position-relative">
      <h3 className="text-4xl mb-6 text-slate-900 font-normal text-left">Projects</h3>
      <div className="relative flex gap-6">
        {visibleProjects.map((project, idx) => (
          <div
            key={project.title + idx}
            className="flex-1 p-6 rounded-md bg-slate-100 border-orange-200 transition duration-500 hover:border-orange-400 animate-fadein shadow-md"
          >
            <h4 className="text-slate-900 text-xl font-semibold mb-2">{project.title}</h4>
            <p className="text-slate-800 text-sm mb-2">{project.tech}</p>
            {project.image && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener"
                title={project.title}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover rounded mb-4 border-gray-500 max-h-64"
                />
              </a>
            )}
            <p className="text-slate-800 mb-2">{project.description}</p>
            {project.link && (
              <p className="text-slate-800 mb-2 underline">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                  title={project.title}
                >
                  {project.link}
                </a>
              </p>
            )}
          </div>
        ))}
        {/* Carousel Controls */}
        <button
          className="absolute sm:-left-11 left-0 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-2 rounded-full shadow hover:bg-orange-600 transition"
          onClick={prevProject}
          aria-label="Previous Projects"
          
        >
          &#8592;
        </button>
        <button
          className="absolute sm:-right-11 right-0 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-2 rounded-full shadow hover:bg-orange-600 transition"
          onClick={nextProject}
          aria-label="Next Projects"
         
        >
          &#8594;
        </button>
      </div>
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
