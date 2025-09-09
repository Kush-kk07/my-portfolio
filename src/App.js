import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold">Kushal Kumar K</h1>
        <p className="text-xl mt-4 text-gray-300 max-w-2xl">
          IT Infrastructure Engineer | Cloud & Automation Enthusiast
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="mt-6 px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          Download Resume
        </a>
      </section>

      {/* Professional Summary */}
      <section id="summary" className="py-16 px-8 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-6">Professional Summary</h2>
        <p className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
          IT Infrastructure Engineer with 5 years of experience in managing and supporting
          enterprise systems across Windows, Linux, and cloud environments. Proficient in
          server administration, networking, virtualization, and automation, with hands-on
          expertise in Active Directory, DNS, DHCP, Hyper-V, and Microsoft Azure. Skilled in
          shell scripting and process optimization to enhance system reliability, security,
          and operational efficiency.
        </p>
      </section>

      {/* Technical Skills */}
      <section id="technical-skills" className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Server & Systems Administration */}
          <div className="bg-white text-black p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Server & Systems Administration</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><b>Active Directory (AD):</b> Administered user accounts, groups, OUs, and access control policies.</li>
              <li><b>Windows Administration:</b> Installed, configured, patched, and optimized Windows servers for high availability.</li>
              <li><b>Linux Administration:</b> Managed user accounts, performed package installations, server configurations, and monitoring.</li>
              <li><b>Hyper-V:</b> Deployed, configured, and maintained virtual machines and hosts for optimal resource utilization.</li>
            </ul>
          </div>

          {/* Networking */}
          <div className="bg-white text-black p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Networking</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><b>DHCP:</b> Configured and managed dynamic IP allocation to ensure seamless connectivity.</li>
              <li><b>DNS:</b> Implemented and maintained zones and records for reliable name resolution.</li>
              <li><b>LAN/WAN:</b> Monitored, diagnosed, and resolved connectivity issues; supported switch and firewall configurations.</li>
            </ul>
          </div>

          {/* Cloud Technologies */}
          <div className="bg-white text-black p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Cloud Technologies</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><b>Microsoft Azure:</b> Supported deployment and administration of virtual machines, storage, and networking services.</li>
            </ul>
          </div>

          {/* Automation & Scripting */}
          <div className="bg-white text-black p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Automation & Scripting</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><b>Shell Scripting:</b> Developed automation scripts to streamline administrative tasks and improve efficiency.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-8 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold">Server Automation Script</h3>
            <p className="mt-2">
              Automated server patching & restarts across 50+ nodes using PowerShell.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold">Cloud Infra Setup</h3>
            <p className="mt-2">
              Built scalable infra on Azure including VMs, storage, and routing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-12 bg-black text-center border-t border-gray-800">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p>
          Email:{" "}
          <a
            href="mailto:kushalkumark6569@gmail.com"
            className="text-blue-400"
          >
            kushalkumark6569@gmail.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/Kush-kk07"
            className="text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Kush-kk07
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/yourlinkedin"
            className="text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/yourlinkedin
          </a>
        </p>
      </footer>
    </div>
  );
}
