import React from "react";

const Skills = () => {
  const skills = {
    "Languages & Libraries : ": [
      "HTML5,",
      "CSS3,",
      "SCSS,",
      "JavaScript,",
      "React.js,",
      "jQuery,",
      "GraphQL"
    ],
    "Frameworks :": [
      "Bootstrap,", 
      "Tailwind,",
      "Foundation,",
      "Material Design"
    ],
    "CMS Platforms :": [
      "BigCommerce (Stencil),",
      "Shopify,",
      "Magento (1.x/2.x),",
      "WordPress"
    ],
    "Design & Tools :": [
      "Adobe Photoshop CC,",
      "Figma,",
      "Adobe InDesign CC,",
      "VS Code"
    ],
    "Version Control :": [
      "Git,",
      "SVN"
    ],
    "Testing & Standards :": [
      "Cross-browser testing,",
      "W3C compliance,",
      "SEO optimization,",
      "WCAG Accessibility"
    ],
  };

  const SkillsSection = () => {
    return (
      <section id="skills" className="max-w-5xl mx-auto  py-10">
        <h3 className="text-4xl mb-6 font-normal text-slate-900">
          My Expertise
        </h3>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-4 sm:flex ">
            <h4 className="text-1xl font-semibold mb-4 flex-col gap-2 text-orange-600 ">
              {category}
            </h4>
            <div className="flex flex-wrap ">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="sm:ml-2 sm:mr-0 xs:mr-2 pt-1 font-semibold text-slate-900 text-sm"
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

  return <SkillsSection />;
};

export default Skills;
