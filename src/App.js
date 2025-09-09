import React, { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="bg-gray-900 p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <h1 className="text-2xl font-bold">Kushal Kumar K</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#summary" className="hover:text-blue-400">Summary</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
          <a
            href="/resume.pdf"
            className="px-3 py-1 bg-white text-black rounded-lg shadow hover:bg-gray-200 transition"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Resume
          </a>
        </div>
        <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="text-2xl">☰</span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-4 text-center">
          {["home","about","summary","projects","skills","contact"].map(id => (
            <a
              key={id}
              href={`#${id}`}
              className="block hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}

      {/* Home / Hero */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-xl text-gray-400">Welcome to my Portfolio</h2>
        <h1 className="text-5xl font-bold mt-4">Kushal Kumar K</h1>
        <p className="text-xl mt-4 text-gray-300 max-w-2xl">
          IT Infrastructure Engineer with 5+ years of experience in automation,
          virtualization, cloud and enterprise systems management.
        </p>
        <a
          href="/resume.pdf"
          className="mt-6 px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          download
        >
          Download Resume
        </a>
      </section>

      {/* Professional Summary */}
      <section id="summary" className="py-16 px-8 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-6">Professional Summary</h2>
        <p className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
          IT Infrastructure Engineer with 5 years of experience in managing enterprise systems across
          Windows, Linux, and cloud environments. Proficient in server administration, networking,
          virtualization, and automation, with expertise in Active Directory, DNS, DHCP, Hyper-V, Azure.
          Skilled in shell scripting and process optimization to enhance reliability, security, and efficiency.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold">Server Automation Script</h3>
            <p className="mt-2">Automated server patching & restarts across 50+ nodes using PowerShell.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold">Cloud Infra Setup</h3>
            <p className="mt-2">Built scalable infrastructure on Azure including VMs, storage, and networking.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 px-8 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Server & Systems", items: ["Active Directory", "Windows/Linux Admin", "Hyper-V"] },
            { title: "Networking", items: ["DHCP", "DNS", "LAN/WAN"] },
            { title: "Cloud", items: ["Microsoft Azure"] },
            { title: "Scripting", items: ["Shell Scripts", "Automation"] },
          ].map(group => (
            <div key={group.title} className="bg-white text-black p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{group.title}</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {group.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="py-12 bg-black text-center border-t border-gray-800">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p>Email: <a href="mailto:kushalkumark6569@gmail.com" className="text-blue-400">kushalkumark6569@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/Kush-kk07" className="text-blue-400">github.com/Kush-kk07</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourlinkedin" className="text-blue-400">linkedin.com/in/yourlinkedin</a></p>
      </footer>
    </div>
  );
}
