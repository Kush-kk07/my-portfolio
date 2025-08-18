import React from "react";
import profilePic from "./profile.JPG"; // make sure this is in src folder

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative">
      {/* Profile Photo */}
      <div className="absolute top-4 right-4">
        <img
          src={profilePic}
          alt="Profile"
          className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg"
        />
      </div>

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

      <section className="text-center mt-10">
        <h2 className="text-xl uppercase tracking-widest">IT Infrastructure Engineer</h2>
        <p className="mt-4 max-w-xl mx-auto">
          I'm an IT infrastructure engineer with 4+ years of experience in developing,
          configuring, maintaining and troubleshooting server and network infrastructure.
        </p>
      </section>

      {/* ...rest of your sections remain the same... */}
    </div>
  );
}
