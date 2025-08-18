function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Kushal Kumar K</h1>
        <a
          href="https://example.com/resume.pdf"
          className="px-4 py-2 bg-white text-black rounded-2xl shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </header>

      {/* About */}
      <section className="text-center mt-10">
        <img
           src="/profile.jpg"
           alt="Kushal Kumar K"
           className="w-40 h-40 rounded-full mx-auto shadow-lg border-4 border-white"
        />
        <h2 className="text-xl uppercase tracking-widest">
          IT Infrastructure Engineer
        </h2>
        <p className="mt-4 max-w-xl mx-auto">
          I'm an IT infrastructure engineer with 4+ years of experience in
          developing, configuring, maintaining and troubleshooting server and
          network infrastructure.
        </p>
      </section>

      {/* Skills */}
      <section className="mt-16 px-4">
        <h3 className="text-2xl font-semibold text-center mb-8">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white text-black p-4 rounded-2xl shadow">
            System Administration
          </div>
          <div className="bg-white text-black p-4 rounded-2xl shadow">
            Network Configuration
          </div>
          <div className="bg-white text-black p-4 rounded-2xl shadow">
            PowerShell Scripting
          </div>
          <div className="bg-white text-black p-4 rounded-2xl shadow">Python</div>
          <div className="bg-white text-black p-4 rounded-2xl shadow">Azure</div>
          <div className="bg-white text-black p-4 rounded-2xl shadow">
            Cloud Solutions
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mt-16 px-4">
        <h3 className="text-2xl font-semibold text-center mb-8">Projects</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-800 rounded-2xl shadow">
            <h4 className="text-xl font-semibold">Server Automation Script</h4>
            <p>
              Developed PowerShell scripts to automate server patching and
              service restarts across 50+ nodes.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-2xl shadow">
            <h4 className="text-xl font-semibold">Cloud Infra Setup</h4>
            <p>
              Built scalable infrastructure on Azure including VMs, storage
              accounts, and network routing for internal apps.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-16 px-4 pb-16">
        <h3 className="text-2xl font-semibold text-center mb-8">Contact</h3>
        <div className="text-center space-y-2">
          <p>Email: <a href="mailto:kushalkumark6569@gmail.com" className="text-blue-400 underline">kushalkumark6569@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/Kush-kk07" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">github.com/Kush-kk07</a></p>
        </div>
      </section>
    </div>
  );
}

export default App;
