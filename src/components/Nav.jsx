export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="logo" href="#top">
          <span className="logo-mark">H</span>
          <span>Harsha Mandloi</span>
        </a>
        <div className="nav-links">
          <a href="#about">01 / About</a>
          <a href="#skills">02 / Skills</a>
          <a href="#work">03 / Work</a>
          <a href="#projects">04 / Projects</a>
          <a href="#contact">05 / Contact</a>
        </div>
        <a className="nav-cta" href="#contact">
          <span className="dot" />
          <span>Open to work</span>
        </a>
      </div>
    </nav>
  );
}
