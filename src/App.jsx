import React, { useState } from 'react';
import { Github, Linkedin, FileText, Mail, Code, Layout, Database, Terminal } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // DATA PRIBADI
  const personalInfo = {
    name: 'William Tanuwijaya, S.Kom., CWDev.',
    role: 'Full Stack Web Developer',
    about:
      'Seorang pengembang web berdedikasi dengan latar belakang akademis yang kuat dan pengalaman praktis dalam membangun aplikasi web modern. Saya memiliki passion untuk mengubah kode yang kompleks menjadi antarmuka pengguna yang indah dan fungsional. Fokus saya adalah pada performa, skalabilitas, dan pengalaman pengguna (UX).',
    email: 'will.tw0807@gmail.com',
    linkedin: 'https://www.linkedin.com/in/william-tanuwijaya/',
    github: 'https://github.com/williamtanuwijaya',
    cvLink: '/CV-William-Tanuwijaya.pdf', // Pastikan file ini ada di folder public
    foto: '/assets/foto_formal-fotor-bg-remover.png', // Pastikan path file gambar benar
  };

  const skills = [
    { name: 'React JS & Node JS', level: 'Advanced', icon: <Code size={20} /> },
    { name: 'Laravel & PHP', level: 'Expert', icon: <Database size={20} /> },
    { name: 'MySQL & Database', level: 'Advanced', icon: <Database size={20} /> },
    { name: 'Tailwind CSS', level: 'Expert', icon: <Layout size={20} /> },
    { name: 'Docker', level: 'Intermediate', icon: <Layout size={20} /> },
    { name: 'Git & GitHub', level: 'Advanced', icon: <Terminal size={20} /> },
  ];

  const experiences = [
    {
      year: 'Sep 2025 - Saat ini',
      role: 'Assistant Lecturer SOLID Paradigm',
      company: 'Universitas Multi Data Palembang',
      desc: 'Menjadi asisten dosen untuk mata kuliah SOLID Paradigm, membimbing mahasiswa dalam pemahaman prinsip desain perangkat lunak.',
    },
    {
      year: 'Jul 2025 - Saat ini',
      role: 'Chairman Of Machine Learning',
      company: 'UKM Programming UMDP',
      desc: 'Memimpin divisi Machine Learning, menyusun kurikulum pembelajaran, dan mengelola kegiatan anggota.',
    },
    {
      year: 'Agu 2023 - Saat ini',
      role: 'Web Developer (Remote)',
      company: 'Namu Kreativa',
      desc: 'Mengembangkan solusi web full-stack. Tech Stack: Laravel, HTML, CSS, PHP, MySQL.',
    },
    {
      year: 'Feb 2025 - Jun 2025',
      role: 'Web Developer Intern',
      company: 'PT Sinar Mandiri Cemerlang Electric',
      desc: 'Magang pengembangan aplikasi web. Tech Stack: Express.js, MySQL, React.js, Node.js.',
    },
    {
      year: 'Jul 2024 - Jun 2025',
      role: 'Vice Chairman',
      company: 'Himpunan Mahasiswa Informatika (HIMIF)',
      desc: 'Wakil ketua himpunan, mengkoordinasikan program kerja dan bersinergi dengan divisi internal.',
    },
    {
      year: 'Mei 2024 - Jun 2025',
      role: 'Vice Chairman Of Web Development',
      company: 'UKM Programming UMDP',
      desc: 'Mengelola divisi pengembangan web dan memfasilitasi workshop teknis untuk anggota.',
    },
    {
      year: 'Jul 2023 - Jul 2024',
      role: 'Staff Technology and Education',
      company: 'Himpunan Mahasiswa Informatika (HIMIF)',
      desc: 'Bertanggung jawab dalam divisi teknologi dan edukasi untuk pengembangan skill mahasiswa.',
    },
    {
      year: 'Mei 2023 - Okt 2023',
      role: 'Video Editor',
      company: 'Lucy English Centre',
      desc: 'Mengedit konten video edukasi dan promosi. Tools: Adobe Premiere Pro, After Effects, Photoshop.',
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
                <a href="#home" className="hover:text-teal-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
                <a href="#about" className="hover:text-teal-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                  About
                </a>
                <a href="#skills" className="hover:text-teal-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                  Skills
                </a>
                <a href="#experience" className="hover:text-teal-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                  Experience
                </a>
                <a href="#contact" className="hover:text-teal-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </a>
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
            {personalInfo.role} | {personalInfo.name}
          </p>
          <p className="text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">Membangun pengalaman digital yang imersif dan fungsional dengan teknologi web modern.</p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            {/* DOWNLOAD CV BUTTON */}
            <a href={personalInfo.cvLink} download className="group bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 shadow-lg shadow-teal-500/20">
              <FileText size={20} />
              Download CV
            </a>

            {/* SOCIAL BUTTONS */}
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

        {/* Abstract Visual / Image Section */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
          {/* Background Glow Effects */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-[96px] opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[96px] opacity-20 animate-blob animation-delay-2000"></div>

          {/* Main Photo Card */}
          <div className="relative group">
            {/* Animated Borders */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative w-64 h-80 md:w-72 md:h-96 bg-slate-900 ring-1 ring-slate-900/5 rounded-2xl leading-none flex items-end justify-center overflow-hidden shadow-2xl">
              {/* Background gradient di belakang orang */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 via-slate-900/20 to-slate-900"></div>

              {/* Foto Anda */}
              <img src={personalInfo.foto} alt="William Tanuwijaya" className="relative z-10 w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-105" />

              {/* Overlay Nama (Opsional - Muncul saat hover) */}
              <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-slate-900 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-teal-400 font-bold text-center">William Tanuwijaya, S.Kom., CWDev.</p>
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
                  <h3 className="text-2xl font-bold text-teal-400">3+</h3>
                  <p className="text-sm text-slate-400">Years Experience</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <h3 className="text-2xl font-bold text-blue-400">10+</h3>
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
                {/* Timeline Line */}
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
