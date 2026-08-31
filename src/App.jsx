import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import ProjectJourney from './components/ProjectJourney.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { structuredData } from './seo/structuredData.js'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-base-bg text-base-ink">
      {/* JSON-LD structured data for SEO / GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Background ambience — cafe / K-pop vibe: blue, yellow, pink blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Top-left blue blob */}
        <div className="absolute -top-48 -left-40 h-[30rem] w-[30rem] rounded-full bg-accent-blue/20 blur-3xl" />
        {/* Top-right yellow blob */}
        <div className="absolute -top-24 right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-accent-yellow/30 blur-3xl" />
        {/* Mid pink blob */}
        <div className="absolute top-1/2 left-1/3 h-[24rem] w-[24rem] rounded-full bg-accent-pink/25 blur-3xl" />
        {/* Bottom-right blue */}
        <div className="absolute bottom-[-8rem] right-[-6rem] h-[26rem] w-[26rem] rounded-full bg-accent-blue/15 blur-3xl" />
        {/* Soft mint pop */}
        <div className="absolute bottom-1/3 left-[-6rem] h-[20rem] w-[20rem] rounded-full bg-accent-mint/20 blur-3xl" />

        {/* Dotted grid — like a cafe menu paper */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(rgba(47,107,255,0.18) 1.2px, transparent 1.2px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Subtle paper grain */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'radial-gradient(rgba(26,34,56,0.04) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-accent-blue focus:text-white focus:px-4 focus:py-2 focus:rounded-xl focus:font-bold"
      >
        Skip to content
      </a>

      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <ProjectJourney />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
