import React from "react";

export default function App() {
  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col items-center p-6 shadow-2xl">
        <img
          src="/profile.jpg"
          alt="Kushal Kumar K"
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-white shadow-lg"
        />
        <h1 className="text-2xl font-bold">Kushal Kumar K</h1>
        <p className="text-sm text-gray-300">IT Infrastructure Engineer</p>

        <nav className="mt-8 space-y-4 text-center">
          <a href="#about" className="block hover:text-yellow-400">About</a>
          <a href="#skills" className="block hover:text-yellow-400">Skills</a>
          <a href="#projects" className="block hover:text-yellow-400">Projects</a>
          <a href="#contact" className="block hover:text-yellow-400">Contact</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {/* About */}
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="max-w-2xl">
            I'm an IT infrastructure engineer with 4+ years of experience in developing,
            configuring, maintaining, and troubleshooting server and network infrastructure.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["System Administration", "Network Configuration", "PowerShell", "Python", "Azure", "Cloud Solutions"].map(skill => (
              <div key={skill} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Server Automation Script</h3>
              <p>Developed PowerShell scripts to automate server patching and service restarts across 50+ nodes.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Cloud Infra Setup</h3>
              <p>Built scalable infrastructure on Azure including VMs, storage accounts, and network routing for internal apps.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p>Email: <a href="mailto:kushalkumark6569@gmail.com" className="text-blue-600">kushalkumark6569@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/Kush-kk07" className="text-blue-600">github.com/Kush-kk07</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/yourlinkedin" className="text-blue-600">linkedin.com/in/yourlinkedin</a></p>
        </section>
      </main>
    </div>
  );
}
