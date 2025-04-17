import React, { useEffect } from "react";
import { Code, Layers, Monitor, Settings, CheckCircle, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";



function RedButton() {

  
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const skills = {
    "Languages & Libraries": [
      "HTML5",
      "CSS3",
      "SCSS",
      "JavaScript",
      "React.js",
      "jQuery",
      "GraphQL",
    ],
    Frameworks: [
      "Bootstrap",
      "Tailwind",
      "Foundation",
      "Material Design",
    ],
    "CMS Platforms": [
      "BigCommerce (Stencil)",
      "Shopify",
      "Magento (1.x/2.x)",
      "WordPress",
    ],
    "Design & Tools": [
      "Adobe Photoshop CC",
      "Adobe InDesign CC",
      "VS Code",
    ],
    "Version Control": ["Git", "SVN"],
    "Testing & Standards": [
      "Cross-browser testing",
      "W3C compliance",
      "SEO optimization",
      "WCAG Accessibility",
    ],
  };
  
  const SkillsSection = () => {
    return (
      <section id="skills" className="max-w-5xl mx-auto px-20 py-10">
          <h3 className="text-2xl mb-6 font-bold text-white">My Expertise
          </h3>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-4">
            {/* <h2 className="text-2xl font-semibold mb-4">{category}</h2> */}
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-slate-700 text-gray-300 rounded shadow-sm text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    );
  };


  const experiences = [
    {
      company: "Unisoft solutions, Hamilton",
      role: "UI Designer / Developer",
      duration: "Oct 2023 - Present",
      project: "https://www.sk-ii.com/",
      summary: "Developed adaptive, mobile-friendly layouts using Bootstrap and CSS media queries for seamless experiences across all devices."
    },
    {
      company: "LTIMindtree, Pune, Maharashtra",
      role: "UI Designer / Developer",
      duration: "June 2021 - June 2023",
      project: "https://www.sk-ii.com/",
      summary: "Developed and maintained SK-II's eCommerce site using BigCommerce. Improved performance, accessibility, and implemented GraphQL for efficient data fetching."
    },
    {
      company: "Bestway Tours and Safaris Pvt. Ltd, Gurugram, Haryana",
      role: "UI Designer / Developer",
      duration: "June 2017 - May 2021",
      project: "http://www.bestway.in | http://bestway2india.com/",
      summary: "Designed mobile-first layouts using Bootstrap. Created responsive email templates and applied SEO and accessibility best practices."
    },
    {
      company: "V Group INC., Bhopal, M.P.",
      role: "UI Designer / Developer",
      duration: "August 2012 - October 2016",
      summary: "Worked with Shopify, BigCommerce, and Magento. Built responsive UI components and ensured SEO and cross-browser compatibility."
    },
    {
      company: "Sakshi Tech Solutions, Bhopal, M.P",
      role: "Junior UI Designer / Developer",
      duration: "December 2011 - June 2012",
      summary: "Converted wireframes to responsive HTML/CSS. Collaborated with designers and backend developers to deliver clean UI."
    }
  ];
  
  
  

    return (

      <div className="bg-gradient-to-l from-slate-700 to-slate-950 text-slate-100 antialiased selection:text-fuchsia-800 flex font-sans">
        <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" ></div>
      {/* Sidebar Navigation */}
      <nav className="w-100 text-center h-screen fixed top-0 left-0 bg-slate p-8 border-r border-gray-800 hidden md:block">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-4xl font-bold text-slate-200">Harsha Mandloi</h1>
        </div>
          <div className="text-slate-400 text-8xm mb-3"> UI Designer and Developer</div> 
          <div className="py-3 mb-8 text-slate-400 border-t border-b border-gray-800 text-wrap" >
          <p>harshachouhan2016@gmail.com<br/>+1-732-558-8255 | Edison, NJ</p>
        </div>




        <a href="/Harsha-Mandloi-Resume.pdf"
          className=" my-10 inline-flex mt-6 md:mt-0 pl-3 pt-2 border text-white-400 text-sm rounded hover:bg-white hover:text-slate-900 transform-gpu styles={{border-image:'linear-gradient(45deg, red , yellow)'}}  "
          download>
          Download Resume <ArrowDown className="animate-bounce m-1 py-1"></ArrowDown>
        </a>
        <ul className="space-y-2 text-slate-400">
          <li className="transition delay-100 duration-300 ease-in-out hover:translate-x-2"><a href="#hero" className="hover:text-white">Home</a></li>
          <li className="transition delay-100 duration-300 ease-in-out hover:translate-x-2"><a href="#skills" className="hover:text-white">Expertise
          </a></li>
          <li className="transition delay-100 duration-300 ease-in-out hover:translate-x-2"><a href="#projects" className="hover:text-white">Projects</a></li>
          <li className="transition delay-100 duration-300 ease-in-out hover:translate-x-2"><a href="#experience" className="hover:text-white">Experience</a></li>
          <li className="transition delay-100 duration-300 ease-in-out hover:translate-x-2"><a href="#education" className="hover:text-white">Education</a></li>
          <li className="transition delay-100 duration-300 ease-in-out hover:translate-x-2"><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </nav>

      <main className="md:ml-80 ml-80 w-full">
        {/* Hero Section */}
        <section id="hero" className="md:p-10 mx-auto w-11/12">
        <h1 className="text-2xl mb-6 font-bold"> Get to know me!</h1>
          {/* <h3 className="text-3xl mb-6 text-white font-light">About me</h3> */}
          <p className="mb-3 text-slate-400">
          I have over 10 years of experience designing and developing responsive, user-friendly websites, primarily focused on eCommerce platforms like Amazon Seller Central, Shopify, BigCommerce, Magento, and eBay. I specialize in creating dynamic UI components using <span className="text-white font-bold">HTML, CSS and JavaScript</span> to enhance performance and user experience. I also create visually engaging elements like banners, icons, and email templates using tools like <span className="text-white font-bold">Adobe Photoshop and InDesign</span>.</p>
           <p className="mb-3 text-slate-400"> My work has significantly improved the speed, accessibility, and responsiveness of high-traffic websites. I've also implemented SEO best practices—optimizing meta tags, images, and content—to boost search rankings and organic traffic.</p> 
           <p className="mb-3 text-slate-400"> In Agile environments, I've collaborated closely with cross-functional teams, led client meetings, and managed production releases. I've worked alongside back-end developers and marketing teams to build features, resolve issues, and integrate APIs.I focus on continuous improvement through user feedback and analytics and have led custom development projects including GraphQL integration and site framework upgrades. I also provide client training and post-launch support to ensure smooth handoffs.
          </p>
        </section>

         {/* Skills */}

         <SkillsSection/>
          

        {/* Projects */}
        <section id="projects" className="p-8 md:p-16 max-w-5xl mx-auto">
          <h3 className="text-2xl mb-6 text-white font-bold">Projects</h3>
          <div className="grid gap-6 md:grid-cols-2 ">
          <div className="p-6 rounded-md shadow-lg border border-gray-800 hover:bg-slate-800 transition duration-200 hover:border-slate-600">
              <h4 className="text-xl font-bold">Qpharma</h4>
              <p className="text-gray-400 text-sm mb-2">HTML | CSS | JS | Bootstrap</p>
              <p className="text-gray-300 mb-2">Enhanced performance, implemented GraphQL integration, upgraded framework to Stencil, improved SEO and accessibility.</p>
            </div>
            <div className="p-6 rounded-md shadow-lg border border-gray-800 hover:bg-slate-800 transition duration-200 hover:border-slate-600">
              <h4 className="text-xl font-bold">SK-II</h4>
              <p className="text-gray-400 text-sm mb-2">HTML | CSS | JS | eCommerce Website | BigCommerce | Bootstrap</p>
              <p className="text-gray-300 mb-2">Enhanced performance, implemented GraphQL integration, upgraded framework to Stencil, improved SEO and accessibility.</p>
            </div>
            <div className="p-6 rounded-md shadow-lg border border-gray-800 hover:bg-slate-800 transition duration-200 hover:border-slate-600">
              <h4 className="text-xl font-bold">Bestway2India Website</h4>
              <p className="text-gray-400 text-sm mb-2">HTML | CSS | JS | eCommerce Website | Bootstrap</p>
              <p className="text-gray-300 mb-2">Designed mobile-first layouts, created email templates, ensured SEO and WCAG compliance.</p>
            </div>            
            <div className="p-6 rounded-md shadow-lg border border-gray-800 hover:bg-slate-800 transition duration-200 hover:border-slate-600">
              <h4 className="text-xl font-bold">Bestway Corporate</h4>
              <p className="text-gray-400 text-sm mb-2">HTML | CSS | JS | Corporate Website | Bootstrap</p>
              <p className="text-gray-300 mb-2">Designed mobile-first layouts, created email templates, ensured SEO and WCAG compliance.</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="p-8 md:p-16 max-w-5xl mx-auto">
          <h3 className="text-3xl mb-6 text-white font-light">Professional Experience</h3>
          {/* <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold">LTIMindtree, Pune</h4>
              <p className="text-gray-400">UI Designer / Developer | Jun 2021 – Jun 2023</p>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Developed SK-II’s eCommerce site on BigCommerce</li>
                <li>Enhanced site performance, SEO, and user engagement</li>
                <li>Integrated GraphQL for faster frontend-backend communication</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold">Bestway Tours & Safaris</h4>
              <p className="text-gray-400">UI Designer / Developer | Jun 2017 – May 2021</p>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Built responsive, mobile-first websites with Bootstrap</li>
                <li>Created SEO-optimized HTML email templates</li>
                <li>Enhanced WCAG accessibility and cross-browser compatibility</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold">V Group INC.</h4>
              <p className="text-gray-400">UI Designer / Developer | Aug 2012 – Oct 2016</p>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Worked on eCommerce platforms including Amazon and Magento</li>
                <li>Created responsive UIs and marketing templates</li>
                <li>Implemented SEO and modern web standards</li>
              </ul>
            </div>
          </div> */}
         <div className="bg-slate-900 min-h-screen p-6 ">
      <div className="relative border-l border-gray-300 ml-4 ">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-10 ml-6 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="absolute w-4 h-4 bg-white rounded-full -left-2 top-1.5"></div>
            <div className="bg-slate-800 p-6 rounded-lg shadow-md transition duration-300 delay-150 hover:shadow-[0px_0px_20px_10px_rgba(0,54,112,0.3)] border hover:border-slate-500 border-slate-800">
              <h3 className="text-xl font-semibold text-slate-200 mb-2">{exp.role}</h3>
              <p className="text-sm text-slate-300 mb-2">{exp.company}</p>
              <p className="text-sm text-slate-300 italic mb-2">{exp.duration}</p>
          
              {exp.summary && (
                <p className="text-sm text-slate-300 mt-2">{exp.summary}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
        </section>

        {/* Education */}
        <section id="education" className="max-w-5xl mx-auto p-8 md:p-16">
          <h3 className="text-3xl mb-6 text-white font-light">Education</h3>
          <ul className="text-slate-300">
            <li>Master of Computer Applications, Rajiv Gandhi Proudyogiki Vishwavidyalaya (R.G.P.V) (2011)</li>
            <li>Bachelor of Science (P.S.M), Sarojini Naidu Govt Girls' Post Graduate College, Bhopal (2008)</li>
          </ul>
        </section>

        {/* Footer */}
        <footer id="contact" className="p-6 text-center text-gray-500 border-t border-gray-800">
          <p>Contact: harshachouhan2016@gmail.com | +1-732-558-8255 | Edison, NJ</p>
        </footer>
      </main>
      
    </div>
 

    );
  }
  
  export default RedButton;