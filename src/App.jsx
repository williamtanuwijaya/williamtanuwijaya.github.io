import React, { useState } from 'react';
import { Github, Linkedin, FileText, Mail, Code, Layout, Database, Terminal } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // PERSONAL DATA (Source: CV_William Tanuwijaya (1).pdf)
  const personalInfo = {
    name: 'William Tanuwijaya', // Berdasarkan 
    role: 'Full-Stack Developer | Software Engineer', // Berdasarkan 
    about:
      'Full-Stack Developer with hands-on experience building scalable web applications using JavaScript (React.js, Next.js, Node.js), PHP (Laravel), and Go (Gin). Strong foundation in RESTful API development, relational databases (MySQL, PostgreSQL), Docker-based deployment, and clean, maintainable code and designing robust architectures aligned with SOLID principles and OOP best practices.', // Berdasarkan 
    email: 'will.tw0807@gmail.com', // Berdasarkan 
    linkedin: 'https://linkedin.com/in/william-tanuwijaya', // Berdasarkan 
    github: 'https://williamtanuwijaya.github.io', // Berdasarkan 
    cvLink: '/CV_William-Tanuwijaya_new.pdf', 
    foto: '/assets/foto_formal-fotor-bg-remover.png', 
  };

  // TECHNICAL SKILLS (Source: CV_William Tanuwijaya.pdf)
  const skills = [
    { name: 'React.js & Next.js', level: 'Advanced', icon: <Code size={20} /> },
    { name: 'Go (Gin) & Laravel', level: 'Expert', icon: <Terminal size={20} /> },
    { name: 'Node.js & PHP', level: 'Advanced', icon: <Code size={20} /> },
    { name: 'MySQL & PostgreSQL', level: 'Expert', icon: <Database size={20} /> },
    { name: 'Tailwind & Bootstrap', level: 'Expert', icon: <Layout size={20} /> },
    { name: 'SOLID & OOP', level: 'Advanced', icon: <Terminal size={20} /> },
  ];

  // EXPERIENCE JOURNEY (Source: CV_William Tanuwijaya (1).pdf)
 const experiences = [
    {
      year: 'Aug 2023 - Present', // Berdasarkan 
      role: 'Web Developer (Remote | Freelance)', // Berdasarkan 
      company: 'CV. Namu Kreativa', // Berdasarkan 
      desc: 'Developed a gift-set web application using Laravel 12 and MySQL. Engineered backend functionalities for article management and user access control (RBAC).', // Berdasarkan 
    },
    {
      year: 'Sep 2025 - Jan 2026', // Berdasarkan 
      role: 'Lecturer Assistant (SOLID Paradigm)', // Berdasarkan 
      company: 'Universitas Multi Data Palembang', // Berdasarkan 
      desc: 'Mentored students in software engineering principles, focusing on SOLID, OOP, and clean architecture while guiding practical implementation of design patterns.', // Berdasarkan 
    },
    {
      year: 'Feb 2025 - Jun 2026', // Berdasarkan 
      role: 'Web Developer (Internship)', // Berdasarkan 
      company: 'PT Sinar Mandiri Cemerlang Electric', // Berdasarkan 
      desc: 'Built "StokBar," a web-based inventory management system using React.js and Express.js. Engineered the system for real-time tracking and registered it as Intellectual Property (HKI).', // Berdasarkan 
    },
    {
      year: '2022 - 2026', // Berdasarkan 
      role: 'Bachelor of Computer Science', // Berdasarkan 
      company: 'Universitas Multi Data Palembang', // Berdasarkan 
      desc: 'Conducted thesis research on "Residual-Gated Attention U-Net for Polyp Segmentation," published in a SINTA 3 indexed journal.', // Berdasarkan 
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-teal-500 selection:text-white">
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-xl text-teal-400 tracking-wider">
              Web<span className="text-slate-100">.Dev</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-teal-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#about" className="hover:text-teal-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#skills" className="hover:text-teal-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Skills</a>
                <a href="#experience" className="hover:text-teal-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Experience</a>
                <a href="#contact" className="hover:text-teal-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center min-h-screen">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm font-semibold mb-2">Available for Projects</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">William Tanuwijaya</span>
          </h1>
          <p className="text-xl text-slate-400 font-light">
            {personalInfo.role}
          </p>
          <p className="text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">Building immersive and functional digital experiences with modern web technologies.</p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <a href={personalInfo.cvLink} download className="group bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 shadow-lg shadow-teal-500/20">
              <FileText size={20} />
              Download CV
            </a>
            <div className="flex gap-3">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all border border-slate-700 hover:border-teal-500/50">
                <Linkedin size={20} />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all border border-slate-700 hover:border-teal-500/50">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-[96px] opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[96px] opacity-20 animate-blob animation-delay-2000"></div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-64 h-80 md:w-72 md:h-96 bg-slate-900 ring-1 ring-slate-900/5 rounded-2xl leading-none flex items-end justify-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 via-slate-900/20 to-slate-900"></div>
              <img src={personalInfo.foto} alt="William Tanuwijaya" className="relative z-10 w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-slate-900 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-teal-400 font-bold text-center">{personalInfo.name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT & SKILLS */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
                About Me
              </h2>
              <p className="text-slate-400 leading-loose mb-6">{personalInfo.about}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <h3 className="text-2xl font-bold text-teal-400">2+</h3>
                  <p className="text-sm text-slate-400">Years Experience</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <h3 className="text-2xl font-bold text-blue-400">3+</h3>
                  <p className="text-sm text-slate-400">Projects Completed</p>
                </div>
              </div>
            </div>

            <div id="skills">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-teal-500 transition-colors group">
                    <div className="text-teal-500 group-hover:text-white transition-colors">{skill.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white">{skill.name}</h4>
                      <p className="text-xs text-slate-500">{skill.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience Journey</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-800"></div>
                <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="hidden md:block w-5/12"></div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-slate-900 z-10 mt-1.5 md:mt-0"></div>
                  <div className="md:w-5/12 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-all shadow-lg hover:shadow-teal-900/20">
                    <span className="text-teal-400 text-sm font-mono mb-2 block">{exp.year}</span>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-slate-400 text-sm mb-4">{exp.company}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-8 bg-slate-950 text-center border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-6">Let's Work Together</h2>
          <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors text-lg mb-8">
            <Mail size={20} />
            {personalInfo.email}
          </a>
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} William Tanuwijaya. Built with React & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;