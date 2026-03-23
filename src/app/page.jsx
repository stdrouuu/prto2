"use client";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-4 left-4 right-4 md:top-6 md:left-0 md:right-0 md:w-full z-50 flex justify-between items-center px-5 md:px-6 py-3 max-w-4xl mx-auto rounded-full bg-white/70 backdrop-blur-md shadow-[0_20px_40px_rgba(42,52,57,0.06)]">
        <div className="text-lg font-bold text-slate-900 tracking-tighter">
          UKRIDA Portfolio
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            className="text-blue-600 font-bold font-['Plus_Jakarta_Sans'] text-sm tracking-tight hover:text-blue-600 transition-all duration-300"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="text-slate-500 font-['Plus_Jakarta_Sans'] text-sm font-medium tracking-tight hover:bg-slate-100 hover:text-blue-600 px-3 py-1 rounded-full transition-all duration-300"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="text-slate-500 font-['Plus_Jakarta_Sans'] text-sm font-medium tracking-tight hover:bg-slate-100 hover:text-blue-600 px-3 py-1 rounded-full transition-all duration-300"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center gap-2">
          <button className="hidden md:block bg-primary text-on-primary px-5 py-2 rounded-full font-bold text-sm scale-95 active:scale-90 transition-transform">
            Resume
          </button>
          <button
            className="md:hidden p-2 flex items-center justify-center text-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          <a
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold text-slate-900"
            href="#projects"
          >
            Projects
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold text-slate-900"
            href="#experience"
          >
            Experience
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold text-slate-900"
            href="#contact"
          >
            Contact
          </a>
          <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg mt-4 shadow-lg shadow-primary/20">
            Resume
          </button>
        </div>
      )}

      <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-24">
          <div className="lg:col-span-8 bg-surface-container-lowest p-6 md:p-16 rounded-3xl flex flex-col justify-center">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-6 mt-4 md:mt-0">
              Computer Science @ UKRIDA
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold text-on-surface tracking-tighter leading-[1.1] mb-8">
              Hi, I&apos;m Brandon. <br />
              <span className="text-outline">
                I craft digital logic with editorial precision.
              </span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Student at Universitas Kristen Krida Wacana, specializing in
              high-performance software systems and human-centric UI/UX design.
              I bridge the gap between complex algorithms and aesthetic
              simplicity.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <a
                className="text-outline hover:text-primary transition-colors duration-300"
                href="https://www.linkedin.com/in/brandon-jeremiah-sutedja/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                className="text-outline hover:text-primary transition-colors duration-300"
                href="https://github.com/stdrouuu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                className="text-outline hover:text-primary transition-colors duration-300"
                href="https://instagram.com/brandon._js"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                className="text-outline hover:text-primary transition-colors duration-300"
                href="https://open.spotify.com/user/eeua467i5c6b9fivr3adqnz2k?si=fjSscfohTymAxnmTPK60BA&pi=hDzNWMoFSB6E7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spotify"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.45 17.336c-.22.361-.692.477-1.053.257-2.887-1.764-6.521-2.164-10.8-1.185-.411.094-.823-.163-.916-.574-.093-.41.163-.823.574-.915 4.673-1.069 8.683-.604 11.938 1.385.36.22.476.691.257 1.052zm1.458-3.242c-.276.448-.865.59-1.314.314-3.328-2.043-8.4-2.673-11.928-1.464-.52.178-1.085-.1-1.263-.619-.178-.52.1-1.085.62-1.263 4.102-1.405 9.7-1.157 13.568 1.218.448.276.59.865.317 1.314zm.14-3.41c-3.997-2.37-10.596-2.589-14.417-1.434-.633.191-1.313-.167-1.503-.799-.191-.632.167-1.313.799-1.503 4.41-1.328 11.678-1.088 16.3 1.655.568.337.755 1.063.418 1.632-.336.568-1.062.755-1.632.418z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 bg-surface-container-low rounded-xl overflow-hidden relative group">
            <img
              alt="Brandon Jeremiah Sutedja"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="/img/profile1.jpeg"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/60 backdrop-blur-xl rounded-lg">
              <p className="text-sm font-bold text-on-surface">
                Brandon Jeremiah Sutedja
              </p>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">
                Software Engineer · Jakarta
              </p>
            </div>
          </div>
        </section>

        {/* Academic & Stats Bento */}
        <section
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12"
          id="experience"
        >
          <div className="md:col-span-2 lg:col-span-2 bg-surface-container p-8 rounded-3xl flex flex-col h-full min-h-[240px]">
            <span
              className="material-symbols-outlined text-primary text-4xl mb-4"
              data-icon="school"
            >
              school
            </span>
            <div className="mt-auto">
              <h3 className="text-2xl font-bold mb-2">UKRIDA</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Bachelor of Computer Science
                <br />
                Expected Graduation 2026
              </p>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-2 bg-primary text-on-primary p-8 rounded-3xl flex flex-col h-full min-h-[240px]">
            <div>
              <h3 className="text-5xl font-extrabold mb-1">3.8</h3>
              <p className="text-on-primary/80 text-xs font-bold uppercase tracking-widest">
                Cumulative GPA
              </p>
            </div>
            <div className="mt-auto pt-6 border-t border-white/20">
              <p className="text-sm italic leading-relaxed text-on-primary/90">
                &quot;Dedicated to academic excellence and practical
                implementation of theoretical frameworks.&quot;
              </p>
            </div>
          </div>
          <div className="md:col-span-4 lg:col-span-2 bg-surface-container-high p-8 rounded-3xl flex flex-col h-full min-h-[240px] justify-center">
            <h3 className="text-xl font-bold mb-6">Core Stack</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-surface-container-lowest text-primary text-[11px] font-extrabold rounded-full shadow-sm">
                PYTHON
              </span>
              <span className="px-4 py-2 bg-surface-container-lowest text-primary text-[11px] font-extrabold rounded-full shadow-sm">
                REACT
              </span>
              <span className="px-4 py-2 bg-surface-container-lowest text-primary text-[11px] font-extrabold rounded-full shadow-sm">
                TYPESCRIPT
              </span>
              <span className="px-4 py-2 bg-surface-container-lowest text-primary text-[11px] font-extrabold rounded-full shadow-sm">
                POSTGRES
              </span>
              <span className="px-4 py-2 bg-surface-container-lowest text-primary text-[11px] font-extrabold rounded-full shadow-sm">
                DOCKER
              </span>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <div className="bg-surface-container-low p-6 rounded-[2rem] border border-outline-variant/10">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="material-symbols-outlined text-primary"
                data-icon="code"
              >
                code
              </span>
              <h4 className="font-bold text-sm uppercase tracking-wider text-on-surface">
                Languages
              </h4>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  alt="Python"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Python</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                  alt="C++"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">C++</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                  alt="Java"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Java</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">JS</span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-[2rem] border border-outline-variant/10">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="material-symbols-outlined text-primary"
                data-icon="layers"
              >
                layers
              </span>
              <h4 className="font-bold text-sm uppercase tracking-wider text-on-surface">
                Frameworks
              </h4>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt="React"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">React</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Node.js</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  alt="Tailwind CSS"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Tailwind</span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-[2rem] border border-outline-variant/10">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="material-symbols-outlined text-primary"
                data-icon="database"
              >
                database
              </span>
              <h4 className="font-bold text-sm uppercase tracking-wider text-on-surface">
                Databases
              </h4>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                  alt="PostgreSQL"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">PostgreSQL</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">MongoDB</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
                  alt="Redis"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Redis</span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-[2rem] border border-outline-variant/10">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="material-symbols-outlined text-primary"
                data-icon="construction"
              >
                construction
              </span>
              <h4 className="font-bold text-sm uppercase tracking-wider text-on-surface">
                Dev Tools
              </h4>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                  alt="Docker"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Docker</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                  alt="Git"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Git</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                  alt="VS Code"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">VS Code</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section (Bento Grid) */}
        <section className="mb-24" id="projects">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                Portfolio
              </span>
              <h2 className="text-4xl font-bold text-on-surface tracking-tighter mt-2">
                Curated Works
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-sm text-sm">
              A selection of technical projects developed during my tenure at
              UKRIDA Computer Science.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Neural Library Analytics */}
            <div className="md:col-span-2 bg-surface-container-lowest rounded-xl overflow-hidden group border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex gap-3 mb-8">
                      <span
                        className="material-symbols-outlined text-primary"
                        data-icon="database"
                      >
                        database
                      </span>
                      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest self-center">
                        Backend Engineering
                      </span>
                    </div>
                    <h3 className="text-3xl font-extrabold mb-6 tracking-tighter">
                      Neural Library Analytics
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed mb-8">
                      A distributed database system designed for the UKRIDA
                      digital archive, processing over 50k academic entries with
                      sub-second latency.
                    </p>
                  </div>
                  <a
                    className="inline-flex items-center gap-2 text-primary font-bold group w-fit"
                    href="#"
                  >
                    View Case Study
                    <span
                      className="material-symbols-outlined transition-transform group-hover:translate-x-1"
                      data-icon="arrow_forward"
                    >
                      arrow_forward
                    </span>
                  </a>
                </div>
                <div className="lg:w-1/2 bg-surface-container-high flex items-center justify-center p-8 lg:p-12 min-h-[350px]">
                  <div className="relative w-full h-full max-w-[280px] aspect-square flex items-center justify-center">
                    <img
                      alt="Backend project"
                      className="w-full h-full object-contain scale-90 group-hover:scale-100 transition-transform duration-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9dIJD8wiMFWn_1lGtn61IOnqNGiJD6ZZJjnUMtBzKkchXKcqWABW7LQgnb5RfofHgwOTIgDPUtb2FhaGxQqvQXHe9YCRdlUJbMxbnstOb8WSvOiHK7B-tExq900FAXoGFFkNwRCKYb4hcF3CWw7M1UZAVfHzyczrPtdZJWHixVrsKdB7eC5EF66Dpz4he_Xlsue7rXsoR2gFPZHM7R8V-LzvQY6bMKjHfo4ekgAs7iLgakIFMgpAc2M_mz-Tf_QVtID5mDkO3aVA"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Crypto-Track Terminal */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden group border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-500 p-8 flex flex-col">
              <div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mb-8">
                <span
                  className="material-symbols-outlined"
                  data-icon="monitoring"
                >
                  monitoring
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Crypto-Track Terminal</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-12">
                A real-time financial monitoring tool built with React and
                WebSockets for local investment groups.
              </p>
              <div className="mt-auto rounded-lg overflow-hidden h-48 bg-surface-container">
                <img
                  alt="Fintech project"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_sVQ7R3XqdNOe-F4F5eOkx47wUI6WQgEV0E0Cx_suIxKSt4FubwH7lGcEYNYw0iuA4LcHVzhd7h0cAZfUkwbHVSRC5nnCur9K2XmmtzglbxrKpmJ38kYk1eFAujQuP4HcksS6Pze2L7dyhe_mTVooLSwr8ftG_lIbWouh_qB8JhoIO4hZJteC50ZQygWUmtQgOBct_Ucxx6_qXSbgLx0jtB3jyIppsJIvqgs0UVAgANww64kD4TQbRHGP_WY7CpiIOtWu6hPNPSc"
                />
              </div>
            </div>

            {/* MiSchool Card */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden group border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
              <div className="h-48 bg-[#9333ea] relative flex items-center justify-center p-8 overflow-hidden">
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[12px] text-white"
                    data-icon="work"
                  >
                    work
                  </span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                    Internship
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white text-center tracking-tight">
                  MiSchool
                </h3>
                <div className="absolute -bottom-2 -right-2 opacity-10">
                  <span
                    className="material-symbols-outlined text-8xl text-white"
                    data-icon="school"
                  >
                    school
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-xl font-bold mb-2">MiSchool</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Comprehensive school management platform with attendance,
                  curriculum, and student/teacher portal.
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-surface-container text-[10px] font-bold rounded">
                    LARAVEL
                  </span>
                  <span className="px-2 py-1 bg-surface-container text-[10px] font-bold rounded">
                    VUE.JS
                  </span>
                  <span className="px-2 py-1 bg-surface-container text-[10px] font-bold rounded">
                    MYSQL
                  </span>
                </div>
              </div>
            </div>

            {/* SIPJAKI Card */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden group border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
              <div className="h-48 bg-[#0ea5e9] relative flex items-center justify-center p-8 overflow-hidden">
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[12px] text-white"
                    data-icon="badge"
                  >
                    badge
                  </span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                    Fulltime
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white text-center tracking-tight">
                  SIPJAKI
                </h3>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-xl font-bold mb-2">SIPJAKI</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Construction Services Information System for transparency and
                  business networking in the region.
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-surface-container text-[10px] font-bold rounded">
                    LARAVEL
                  </span>
                  <span className="px-2 py-1 bg-surface-container text-[10px] font-bold rounded">
                    JAVASCRIPT
                  </span>
                  <span className="px-2 py-1 bg-surface-container text-[10px] font-bold rounded">
                    MYSQL
                  </span>
                </div>
              </div>
            </div>

            {/* Tracer Study System Card */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden group border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
              <div className="h-48 bg-[#14b8a6] relative flex items-center justify-center p-8 overflow-hidden">
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[12px] text-white"
                    data-icon="badge"
                  >
                    badge
                  </span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                    Fulltime
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white text-center tracking-tight leading-none">
                  Tracer Study
                  <br />
                  System
                </h3>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-xl font-bold mb-2">Tracer Study System</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Alumni tracking and career monitoring system for educational
                  institutions.
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-surface-container text-[10px] font-bold rounded">
                    LARAVEL
                  </span>
                  <span className="px-2 py-1 bg-surface-container text-[10px] font-bold rounded">
                    MYSQL
                  </span>
                </div>
              </div>
            </div>

            {/* E-Rapor SMA Trensains Tebuireng Card */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden group border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
              <div className="h-48 bg-[#f97316] relative flex items-center justify-center p-8 overflow-hidden">
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[12px] text-white"
                    data-icon="handshake"
                  >
                    handshake
                  </span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                    Freelance
                  </span>
                </div>
                <h3 className="text-xl font-black text-white text-center tracking-tight leading-tight">
                  E-Rapor SDK 10 Penabur
                </h3>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-xl font-bold mb-2">
                  E-Rapor SDK 10 Penabur
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Digital report card system for elementary school.
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-surface-container text-[10px] font-bold rounded">
                    LARAVEL
                  </span>
                  <span className="px-2 py-1 bg-surface-container text-[10px] font-bold rounded">
                    INERTIA.JS
                  </span>
                  <span className="px-2 py-1 bg-surface-container text-[10px] font-bold rounded">
                    VUE.JS
                  </span>
                </div>
              </div>
            </div>

            {/* LMS & Tryout ASN Indonesia Card */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden group border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
              <div className="h-48 bg-[#ec4899] relative flex items-center justify-center p-8 overflow-hidden">
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[12px] text-white"
                    data-icon="handshake"
                  >
                    handshake
                  </span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                    Freelance
                  </span>
                </div>
                <h3 className="text-xl font-black text-white text-center tracking-tight leading-tight">
                  LMS &amp; Tryout ASN Indonesia
                </h3>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-xl font-bold mb-2">LMS &amp; Tryout ASN</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Learning management system and examination platform for civil
                  servant candidates.
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-surface-container text-[10px] font-bold rounded">
                    LARAVEL
                  </span>
                  <span className="px-2 py-1 bg-surface-container text-[10px] font-bold rounded">
                    MYSQL
                  </span>
                </div>
              </div>
            </div>

            {/* TOEFL Test ASN Card */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden group border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
              <div className="h-48 bg-[#4f46e5] relative flex items-center justify-center p-8 overflow-hidden">
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[12px] text-white"
                    data-icon="handshake"
                  >
                    handshake
                  </span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                    Freelance
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white text-center tracking-tight">
                  TOEFL Test ASN
                </h3>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-xl font-bold mb-2">TOEFL Test ASN</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Integrated English proficiency testing system for government
                  civil servant assessment.
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-surface-container text-[10px] font-bold rounded">
                    LARAVEL
                  </span>
                  <span className="px-2 py-1 bg-surface-container text-[10px] font-bold rounded">
                    JAVASCRIPT
                  </span>
                  <span className="px-2 py-1 bg-surface-container text-[10px] font-bold rounded">
                    MYSQL
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button className="px-8 py-3 bg-surface-container-high text-on-surface-variant font-bold text-sm rounded-full hover:bg-primary hover:text-on-primary transition-all duration-300 flex items-center gap-2 group shadow-sm">
              Show More Projects
              <span
                className="material-symbols-outlined text-sm transition-transform group-hover:translate-y-0.5"
                data-icon="expand_more"
              >
                expand_more
              </span>
            </button>
          </div>
        </section>

        {/* Academic Milestone Grid */}
        <section className="mb-12 py-16 px-10 bg-surface-container-low rounded-xl">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
              Academic Milestones
            </span>
            <h2 className="text-4xl font-bold text-on-surface tracking-tighter mb-12">
              The UKRIDA Journey
            </h2>
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20"></div>
                  <div className="w-px h-full bg-outline-variant/30 mt-2"></div>
                </div>
                <div>
                  <span className="text-xs font-bold text-outline uppercase tracking-widest">
                    2024 - Present
                  </span>
                  <h4 className="text-xl font-bold mt-1 group-hover:text-primary transition-colors">
                    Freelance
                  </h4>
                  <p className="text-on-surface-variant mt-2 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-outline-variant ring-4 ring-transparent"></div>
                  <div className="w-px h-full bg-outline-variant/30 mt-2"></div>
                </div>
                <div>
                  <span className="text-xs font-bold text-outline uppercase tracking-widest">
                    2024
                  </span>
                  <h4 className="text-xl font-bold mt-1 group-hover:text-primary transition-colors">
                    Matriculation
                  </h4>
                  <p className="text-on-surface-variant mt-2 text-sm leading-relaxed">
                    Started Computer Science degree with a academic scholarship
                    from UKRIDA University
                  </p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-outline-variant ring-4 ring-transparent"></div>
                </div>
                <div>
                  <span className="text-xs font-bold text-outline uppercase tracking-widest">
                    2023
                  </span>
                  <h4 className="text-xl font-bold mt-1 group-hover:text-primary transition-colors">
                    Top 10 School Hackathon &apos;23
                  </h4>
                  <p className="text-on-surface-variant mt-2 text-sm leading-relaxed">
                    Top 10 Finalist for developing an AI-driven school
                    accessibility app for students with special needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          <div className="bg-surface-container p-8 rounded-[2rem] flex flex-col justify-between border border-outline-variant/10">
            <div className="flex justify-between items-start mb-6">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                data-icon="military_tech"
              >
                military_tech
              </span>
              <span className="text-[10px] font-bold px-2 py-1 bg-primary/10 text-primary rounded-full uppercase tracking-widest">
                2023
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Verified Top 10 Hackathon &apos;23
              </h3>
              <p className="text-on-surface-variant text-sm">
                Computer Science · Top 10 Project Excellence Award
              </p>
            </div>
          </div>
          <div className="bg-surface-container p-8 rounded-[2rem] flex flex-col justify-between border border-outline-variant/10">
            <div className="flex justify-between items-start mb-6">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                data-icon="award_star"
              >
                award_star
              </span>
              <span className="text-[10px] font-bold px-2 py-1 bg-primary/10 text-primary rounded-full uppercase tracking-widest">
                Ongoing
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Dean&apos;s List (4 Semesters)
              </h3>
              <p className="text-on-surface-variant text-sm">
                Academic Excellence · Sustained GPA &gt; 3.85
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          id="contact"
        >
          <div>
            <h2 className="text-5xl font-extrabold tracking-tighter mb-6">
              Let&apos;s build the <br />
              future of logic.
            </h2>
            <p className="text-on-surface-variant mb-10 text-lg leading-relaxed">
              Currently seeking internship opportunities and collaborative
              technical ventures for Summer 2025.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:brandonjs.dev@gmail.com"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
                  <span
                    className="material-symbols-outlined text-xl"
                    data-icon="mail"
                  >
                    mail
                  </span>
                </div>
                <p className="font-bold text-on-surface">
                  brandonjs.dev@gmail.com
                </p>
              </a>
              <a
                href="https://github.com/stdrouuu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </div>
                <p className="font-bold text-on-surface">github.com/stdrouuu</p>
              </a>
              <a
                href="https://www.linkedin.com/in/brandon-jeremiah-sutedja/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </div>
                <p className="font-bold text-on-surface">
                  linkedin.com/in/brandon-jeremiah-sutedja
                </p>
              </a>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0_20px_40px_rgba(42,52,57,0.06)] border border-outline-variant/10">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-extrabold uppercase tracking-widest text-outline ml-2">
                    Name
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 p-4 text-sm transition-all"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-extrabold uppercase tracking-widest text-outline ml-2">
                    Email
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 p-4 text-sm transition-all"
                    placeholder="hello@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-outline ml-2">
                  Project Brief
                </label>
                <textarea
                  className="w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 p-4 text-sm transition-all"
                  placeholder="  Tell me about your idea..."
                  rows="4"
                ></textarea>
              </div>
              <button
                className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-slate-50 rounded-t-[3rem]">
        <div className="text-sm font-bold text-slate-900 uppercase tracking-tight">
          UKRIDA Computer Science
        </div>
        <p className="text-slate-400 font-['Plus_Jakarta_Sans'] text-xs font-semibold tracking-widest uppercase text-center md:text-left">
          © 2024 UKRIDA Computer Science. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a
            className="text-slate-400 text-xs font-semibold tracking-widest uppercase hover:text-blue-600 transition-colors opacity-80 hover:opacity-100 flex items-center gap-2"
            href="https://github.com/stdrouuu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
            GitHub
          </a>
          <a
            className="text-slate-400 text-xs font-semibold tracking-widest uppercase hover:text-blue-600 transition-colors opacity-80 hover:opacity-100 flex items-center gap-2"
            href="https://www.linkedin.com/in/brandon-jeremiah-sutedja/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
            LinkedIn
          </a>
          <a
            className="text-slate-400 text-xs font-semibold tracking-widest uppercase hover:text-blue-600 transition-colors opacity-80 hover:opacity-100 flex items-center gap-2"
            href="mailto:brandonjs.dev@gmail.com"
          >
            <span
              className="material-symbols-outlined text-[14px]"
              data-icon="mail"
            >
              mail
            </span>
            Email
          </a>
        </div>
      </footer>
    </>
  );
}
