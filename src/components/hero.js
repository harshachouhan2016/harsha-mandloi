import React from "react";

const HeroData = () => {
  return (
    <section id="hero" className="max-w-5xl mx-auto xs:pt-0 sm:py-10 ">
      <h1 className="text-4xl mb-6 font-normal">Hi, I'm <span className="text-5xl text-orange-600">UI Designer and Developer</span></h1>
      {/* <h3 className="text-3xl mb-6 text-white font-light">About me</h3> */}
      <p className="mb-3 text-slate-900 xs:text-justify">
        I have over 10 years of experience designing and developing responsive,
        user-friendly websites, primarily focused on eCommerce platforms like
        Amazon Seller Central, Shopify, BigCommerce, Magento, and eBay. I
        specialize in creating dynamic UI components using{" "}
        <span className="text-slate-950 font-bold">
          HTML, CSS and JavaScript
        </span>{" "}
        to enhance performance and user experience. I also create visually
        engaging elements like banners, icons, and email templates using tools
        like{" "}
        <span className="text-slate-950 font-bold">
          Adobe Photoshop, Figma and InDesign
        </span>
        .
      </p>
      <p className="mb-3 text-slate-900 xs:text-justify">
        {" "}
        My work has significantly improved the speed, accessibility, and
        responsiveness of high-traffic websites. Worked extensively with
        SonarQube to analyze and improve code quality, ensuring clean,
        maintainable, and secure code across all projects.
      </p>
      <p className="mb-3 text-slate-900 xs:text-justify">
        {" "}
        In Agile environments, I've collaborated closely with cross-functional
        teams, led client meetings, and managed production releases. I've worked
        alongside back-end developers and marketing teams to build features,
        resolve issues, and integrate APIs.I focus on continuous improvement
        through user feedback and analytics and have led custom development
        projects including GraphQL integration and site framework upgrades. I
        also provide client training and post-launch support to ensure smooth
        handoffs.
      </p>
    </section>
  );
};

export default HeroData;
