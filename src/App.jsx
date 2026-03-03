import { useState, useEffect, useCallback, useRef } from 'react';
import { useAmbientAudio } from './components/useAmbientAudio';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import CompanyOverview from './sections/CompanyOverview';
import OpportunityRecognition from './sections/OpportunityRecognition';
import BusinessModelInnovation from './sections/BusinessModelInnovation';
import CostLeadership from './sections/CostLeadership';
import ScalabilityExpansion from './sections/ScalabilityExpansion';
import DisruptiveInnovation from './sections/DisruptiveInnovation';
import DownfallCrisis from './sections/DownfallCrisis';
import StrategicTurnaround from './sections/StrategicTurnaround';
import ESGSustainability from './sections/ESGSustainability';
import SWOTPorter from './sections/SWOTPorter';
import LessonsEntrepreneurship from './sections/LessonsEntrepreneurship';
import ProfessorQA from './sections/ProfessorQA';
import Conclusion from './sections/Conclusion';
import RevenueChart from './components/RevenueChart';
import SectionWrapper, { SectionHeader } from './components/SectionWrapper';
import AnimatedElement from './components/AnimatedElement';
import { milestones } from './data/ikeaData';

const SLIDE_LABELS = [
  'Home', 'Company Overview', 'Opportunity Recognition', 'Business Model',
  'Cost Leadership', 'Revenue & Data', 'Global Expansion', 'Disruptive Innovation',
  'Crisis Phases', 'Strategic Turnaround', 'ESG & Sustainability',
  'SWOT & Porter\'s', 'Lessons', 'Conclusion', 'Q&A'
];

function DataVisualizations() {
  const laterMilestones = milestones.filter(m => m.year > 1985);
  const categoryColors = {
    expansion: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    innovation: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    digital: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    strategy: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    esg: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    founding: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  };

  return (
    <SectionWrapper id="data-viz">
      <SectionHeader
        tag="Data Dashboard"
        title="Revenue & Historical Data"
        subtitle="Key financial trends and strategic milestones visualized for analytical reference."
        align="center"
      />
      <RevenueChart />
      <div className="mt-16">
        <AnimatedElement variant="slideUp">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Strategic Milestones (1985–Present)</h3>
        </AnimatedElement>
        <div className="grid md:grid-cols-2 gap-4">
          {laterMilestones.map((m, i) => (
            <AnimatedElement key={i} variant="slideUp" delay={i * 0.05}>
              <div className="card card-hover">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-sm font-bold text-ikea-blue dark:text-ikea-yellow">{m.year}</span>
                  <span className={`tag text-xs ${categoryColors[m.category] || ''}`}>{m.category}</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{m.event}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-dark-card border-t border-gray-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-ikea-blue dark:bg-ikea-yellow rounded-lg flex items-center justify-center">
              <span className="text-white dark:text-ikea-blue font-bold text-sm">IK</span>
            </div>
            <span className="font-bold text-ikea-blue dark:text-ikea-yellow">IKEA Case Study</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-4">
            An interactive exploration of IKEA for Entrepreneurship Exploration coursework.
            This website is a student project and is not affiliated with Inter IKEA Systems B.V.
          </p>
          <div className="text-xs text-gray-400 dark:text-gray-600 space-y-2">
            <p>
              References:{' '}
              <a href="https://en.wikipedia.org/wiki/The_Innovator%27s_Dilemma" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-ikea-blue dark:hover:text-ikea-yellow transition-colors">Christensen (1997)</a>,{' '}
              <a href="https://en.wikipedia.org/wiki/Blue_Ocean_Strategy" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-ikea-blue dark:hover:text-ikea-yellow transition-colors">Kim & Mauborgne (2005)</a>,{' '}
              <a href="https://en.wikipedia.org/wiki/Michael_Porter" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-ikea-blue dark:hover:text-ikea-yellow transition-colors">Porter (1980, 1985)</a>,{' '}
              <a href="https://en.wikipedia.org/wiki/Effectuation" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-ikea-blue dark:hover:text-ikea-yellow transition-colors">Sarasvathy (2001)</a>,{' '}
              <a href="https://en.wikipedia.org/wiki/Dynamic_capabilities" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-ikea-blue dark:hover:text-ikea-yellow transition-colors">Teece (2007)</a>,{' '}
              <a href="https://en.wikipedia.org/wiki/Co-creation" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-ikea-blue dark:hover:text-ikea-yellow transition-colors">Prahalad & Ramaswamy (2004)</a>
            </p>
            <p>
              Data sources:{' '}
              <a href="https://www.ikea.com/global/en/our-business/how-we-work/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-ikea-blue dark:hover:text-ikea-yellow transition-colors">Inter IKEA Group Annual Reports</a>,{' '}
              <a href="https://www.ingka.com/reporting/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-ikea-blue dark:hover:text-ikea-yellow transition-colors">Ingka Group Financial Summaries</a>,{' '}
              <a href="https://hbsp.harvard.edu/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-ikea-blue dark:hover:text-ikea-yellow transition-colors">Harvard Business School Case Studies</a>
            </p>
            <p className="mt-3">B. Tech 2nd Semester — Entrepreneurship Exploration</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Slide wrapper for presentation mode — each section becomes a full-viewport slide */
function PresentationSlide({ children, active }) {
  const slideRef = useRef(null);

  useEffect(() => {
    if (active && slideRef.current) {
      slideRef.current.scrollTop = 0;
    }
  }, [active]);

  return (
    <div
      ref={slideRef}
      className={`pres-slide ${active ? 'pres-slide-active' : 'pres-slide-hidden'}`}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [audioMuted, setAudioMuted] = useState(true);
  const [presentationMode, setPresentationMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = SLIDE_LABELS.length;

  // Audio: "The Mountain" (calm ambient) in normal mode,
  // "Motivation Sport Rock" (energetic) in presentation mode
  useAmbientAudio(audioMuted, presentationMode);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Fullscreen API: enter/exit fullscreen with presentation mode
  const togglePresentation = useCallback((enable) => {
    setPresentationMode(enable);
    if (enable) {
      setCurrentSlide(0);
      document.documentElement.requestFullscreen?.().catch(() => { });
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen?.().catch(() => { });
      }
    }
  }, []);

  // Listen for fullscreen exit (e.g., user presses Escape)
  useEffect(() => {
    const onFsChange = () => {
      if (!document.fullscreenElement && presentationMode) {
        setPresentationMode(false);
      }
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, [presentationMode]);

  // Arrow key navigation in presentation mode
  useEffect(() => {
    if (!presentationMode) return;

    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setCurrentSlide(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        togglePresentation(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [presentationMode, totalSlides, togglePresentation]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-bg">
        <div className="text-center">
          <div className="w-16 h-16 bg-ikea-blue rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-white font-bold text-xl">IK</span>
          </div>
          <div className="w-48 h-1 bg-gray-200 dark:bg-dark-border rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-ikea-yellow rounded-full animate-[slideRight_1.5s_ease-in-out_infinite]" style={{ width: '60%' }} />
          </div>
          <p className="text-sm text-gray-400 mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  // ------ PRESENTATION MODE: full-viewport slides with arrow key nav ------
  if (presentationMode) {
    const slides = [
      <HeroSection />, <CompanyOverview />, <OpportunityRecognition />,
      <BusinessModelInnovation />, <CostLeadership />, <DataVisualizations />,
      <ScalabilityExpansion />, <DisruptiveInnovation />, <DownfallCrisis />,
      <StrategicTurnaround />, <ESGSustainability />, <SWOTPorter />,
      <LessonsEntrepreneurship />, <Conclusion />, <ProfessorQA />,
    ];

    return (
      <div className="presentation-mode">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          audioMuted={audioMuted}
          setAudioMuted={setAudioMuted}
          presentationMode={presentationMode}
          setPresentationMode={(val) => togglePresentation(val)}
          currentSlide={currentSlide}
          onSlideChange={setCurrentSlide}
        />

        {/* Slides container */}
        <div className="pres-container">
          {slides.map((slide, i) => (
            <PresentationSlide key={i} active={i === currentSlide}>
              {slide}
            </PresentationSlide>
          ))}
        </div>

        {/* Slide counter & navigation dots */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
          <span className="text-xs font-mono text-white/70 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
            {currentSlide + 1} / {totalSlides} — {SLIDE_LABELS[currentSlide]}
          </span>
        </div>

        {/* Navigation arrows */}
        {currentSlide > 0 && (
          <button
            onClick={() => setCurrentSlide(prev => prev - 1)}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center backdrop-blur-sm transition-all"
          >
            ‹
          </button>
        )}
        {currentSlide < totalSlides - 1 && (
          <button
            onClick={() => setCurrentSlide(prev => prev + 1)}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center backdrop-blur-sm transition-all"
          >
            ›
          </button>
        )}
      </div>
    );
  }

  // ------ NORMAL MODE: scrollable website ------
  return (
    <div>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        audioMuted={audioMuted}
        setAudioMuted={setAudioMuted}
        presentationMode={presentationMode}
        setPresentationMode={(val) => togglePresentation(val)}
      />

      <main>
        <HeroSection />
        <CompanyOverview />
        <OpportunityRecognition />
        <BusinessModelInnovation />
        <CostLeadership />
        <DataVisualizations />
        <ScalabilityExpansion />
        <DisruptiveInnovation />
        <DownfallCrisis />
        <StrategicTurnaround />
        <ESGSustainability />
        <SWOTPorter />
        <LessonsEntrepreneurship />
        <Conclusion />
        <ProfessorQA />
      </main>

      <Footer />
    </div>
  );
}
