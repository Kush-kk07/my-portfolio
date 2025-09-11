import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

/* 🌐 Global Styles */
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #fff;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

/* 🔹 Background Grid with Glow */
const Background = styled.div`
  position: fixed;
  inset: 0;
  background: #0f172a;
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(transparent 95%, rgba(255,255,255,0.07) 95%),
                      linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.07) 95%);
    background-size: 40px 40px;
    box-shadow: inset 0 0 80px rgba(59, 130, 246, 0.2),
                inset 0 0 120px rgba(99, 102, 241, 0.15);
  }
`;

/* Animations */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
`;

const AnimatedSection = styled.section`
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-in-out;
  animation: ${(props) => props.animate && fadeIn} 0.8s forwards;
`;

const AnimatedHeroText = styled.div`
  opacity: 0;
  transform: translateX(-40px);
  animation: ${slideIn} 1s ease-out forwards;
`;

/* Navbar */
const Navbar = styled.nav`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(6px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 2px 6px rgba(0,0,0,0.6);
`;

const GradientTitle = styled.h1`
  background: linear-gradient(90deg, #3b82f6, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`;

/* Hero */
const Hero = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  position: relative;
`;

const HeroIntro = styled.p`
  font-size: 1.3rem;
  color: #9ca3af;
  margin-bottom: 0.5rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-top: 0.5rem;
  background: linear-gradient(90deg, #3b82f6, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Poppins", sans-serif;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

const HeroSubtitle = styled.h3`
  margin-top: 1rem;
  font-size: 1.4rem;
  color: #d1d5db;
`;

const HeroSummary = styled.p`
  margin-top: 1.2rem;
  font-size: 1.1rem;
  color: #9ca3af;
  max-width: 600px;
  line-height: 1.6;
`;

/* Profile Photo */
const ProfilePhoto = styled.img`
  position: absolute;
  top: 90px;
  right: 50px;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: 4px solid #3b82f6;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0,0,0,0.6);

  @media (max-width: 768px) {
    position: static;
    margin-top: 1.5rem;
    width: 140px;
    height: 140px;
  }
`;

/* Section */
const SectionTitle = styled.h2`
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
  background: linear-gradient(90deg, #3b82f6, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

/* Cards */
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  background: linear-gradient(145deg, #1e293b, #111827);
  color: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.5);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

/* Footer */
const Footer = styled.footer`
  padding: 3rem 1rem;
  background: black;
  text-align: center;
  border-top: 1px solid #1f2937;
  color: #9ca3af;
  font-size: 0.9rem;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: #374151;
  margin: 2rem auto;
  max-width: 800px;
`;

export default function App() {
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [eduRef, eduInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [expRef, expInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <GlobalStyle />
      <Background />

      {/* Navbar */}
      <Navbar>
        <GradientTitle>Kushal Kumar K</GradientTitle>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a
            href="/resume.pdf"
            download
            style={{
              background: "#3b82f6",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Resume
          </a>
        </div>
      </Navbar>

      {/* Hero */}
      <Hero id="home">
        <AnimatedHeroText>
          <HeroIntro>Hi, I'm</HeroIntro>
          <HeroTitle>Kushal Kumar K</HeroTitle>

          {/* 🔹 Typing Animation */}
          <HeroSubtitle>
            <Typewriter
              words={[
                "System Administrator",
                "Cloud & Infra Specialist",
                "Automation & Scripting",
                "IT Infrastructure Engineer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </HeroSubtitle>

          {/* 🔹 2-line summary */}
          <HeroSummary>
            Experienced IT Infrastructure Engineer with a strong background in
            server administration, cloud operations, and automation.  
            Passionate about building secure, scalable, and efficient IT systems.
          </HeroSummary>

          <a
            href="/resume.pdf"
            download
            style={{
              display: "inline-block",
              marginTop: "2rem",
              background: "#3b82f6",
              padding: "0.7rem 1.5rem",
              borderRadius: "10px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Download Resume
          </a>
        </AnimatedHeroText>

        {/* 🔹 Profile Photo */}
        <ProfilePhoto src="/profile.jpg" alt="Profile" />
      </Hero>

      {/* Sections (same as before, with GradientTitle in headers) */}
      <AnimatedSection id="about" ref={aboutRef} animate={aboutInView}>
        <SectionTitle>About Me</SectionTitle>
        <p style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.6", fontSize: "1.1rem", color: "#d1d5db" }}>
          IT Infrastructure Engineer with 5 years of experience in managing enterprise systems across Windows,
          Linux, and cloud environments. Proficient in server administration, networking, virtualization, and
          automation, with expertise in Active Directory, DNS, DHCP, Hyper-V, and Azure. Skilled in shell
          scripting and process optimization to enhance system reliability, security, and efficiency.
        </p>
      </AnimatedSection>

      {/* Education */}
      <AnimatedSection id="education" ref={eduRef} animate={eduInView}>
        <SectionTitle>Education</SectionTitle>
        <Grid>
          <Card>
            <CardTitle>B.E. in Electronics & Communication Engineering</CardTitle>
            <p>JSS Academy of Technical Education, Bangalore – CGPA: 7.6</p>
          </Card>
          <Card>
            <CardTitle>Diploma in Electronics & Communication Engineering</CardTitle>
            <p>Government Polytechnic College, Ramanagar – 76%</p>
          </Card>
          <Card>
            <CardTitle>SSLC (10th Standard)</CardTitle>
            <p>Balu Public School, Channapatna – 81%</p>
          </Card>
        </Grid>
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection id="experience" ref={expRef} animate={expInView}>
        <SectionTitle>Experience</SectionTitle>
        <Card>
          <CardTitle>L&T Technology Services (LTTS), Bangalore | Jan 2021 – Present</CardTitle>
          <ul>
            <li>Installed, configured, patched, and maintained Windows and Linux servers.</li>
            <li>Managed Active Directory, DNS, DHCP, and Group Policies.</li>
            <li>Deployed and optimized virtual machines in Hyper-V.</li>
            <li>Troubleshot LAN/WAN issues and supported firewall operations.</li>
            <li>Implemented backup & disaster recovery solutions.</li>
            <li>Strengthened security through hardening & patching.</li>
            <li>Supported Azure VM provisioning, storage, and networking.</li>
            <li>Automated tasks using shell scripting.</li>
          </ul>
        </Card>
      </AnimatedSection>

      {/* Projects */}
      <AnimatedSection id="projects" ref={projectsRef} animate={projectsInView}>
        <SectionTitle>Projects</SectionTitle>
        <Grid>
          <Card>
            <CardTitle>Server Automation Script</CardTitle>
            <p>Automated server patching & restarts across 50+ nodes using PowerShell.</p>
          </Card>
          <Card>
            <CardTitle>Cloud Infra Setup</CardTitle>
            <p>Built scalable infrastructure on Azure including VMs, storage, and networking.</p>
          </Card>
        </Grid>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection id="skills" ref={skillsRef} animate={skillsInView}>
        <SectionTitle>Technical Skills</SectionTitle>
        <Grid>
          <Card>
            <CardTitle>Server & Systems</CardTitle>
            <ul>
              <li>Active Directory</li>
              <li>Windows/Linux Admin</li>
              <li>Hyper-V</li>
            </ul>
          </Card>
          <Card>
            <CardTitle>Networking</CardTitle>
            <ul>
              <li>DHCP</li>
              <li>DNS</li>
              <li>LAN/WAN</li>
            </ul>
          </Card>
          <Card>
            <CardTitle>Cloud</CardTitle>
            <ul>
              <li>Microsoft Azure</li>
            </ul>
          </Card>
          <Card>
            <CardTitle>Scripting</CardTitle>
            <ul>
              <li>Shell Scripts</li>
              <li>Automation</li>
            </ul>
          </Card>
        </Grid>
      </AnimatedSection>

      {/* Contact & Footer */}
      <Footer id="contact">
        <h2>Get in Touch</h2>
        <p>📧 <a href="mailto:kushalkumark6569@gmail.com">kushalkumark6569@gmail.com</a></p>
        <p>💻 <a href="https://github.com/Kush-kk07">github.com/Kush-kk07</a></p>
        <p>🔗 <a href="https://linkedin.com/in/yourlinkedin">linkedin.com/in/yourlinkedin</a></p>
        
        <Divider />
        <p>© {new Date().getFullYear()} Kushal Kumar K. All rights reserved.</p>
      </Footer>
    </>
  );
}
