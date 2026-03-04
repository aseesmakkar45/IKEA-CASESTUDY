import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiVolume2, FiVolumeX, FiMonitor, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'overview', label: 'Overview' },
    { id: 'opportunity', label: 'Opportunity' },
    { id: 'business-model', label: 'Business Model' },
    { id: 'cost-leadership', label: 'Cost Leadership' },
    { id: 'scalability', label: 'Scalability' },
    { id: 'disruption', label: 'Disruption' },
    { id: 'crisis', label: 'Crisis' },
    { id: 'turnaround', label: 'Turnaround' },
    { id: 'esg', label: 'ESG' },
    { id: 'swot-porter', label: 'SWOT' },
    { id: 'lessons', label: 'Lessons' },
    { id: 'conclusion', label: 'Conclusion' },
    { id: 'qa', label: 'Q&A' },
];
// Map each nav link id to its slide index in presentation mode
// Slide order: Home(0), Overview(1), Opportunity(2), BusinessModel(3), CostLeadership(4),
// DataViz(5), Scalability(6), Disruption(7), Crisis(8), Turnaround(9), ESG(10),
// SWOT(11), Lessons(12), Conclusion(13), QA(14)
const NAV_TO_SLIDE = {
    'home': 0, 'overview': 1, 'opportunity': 2, 'business-model': 3,
    'cost-leadership': 4, 'scalability': 6, 'disruption': 7, 'crisis': 8,
    'turnaround': 9, 'esg': 10, 'swot-porter': 11, 'lessons': 12,
    'conclusion': 13, 'qa': 14,
};

// Reverse map: slide index → nav id
const SLIDE_TO_NAV = {
    ...Object.fromEntries(Object.entries(NAV_TO_SLIDE).map(([k, v]) => [v, k])),
    5: 'cost-leadership', // Keep Cost Leadership highlighted for the Data Dashboard slide
};

export default function Navbar({ darkMode, setDarkMode, audioMuted, setAudioMuted, presentationMode, setPresentationMode, currentSlide, onSlideChange }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        if (presentationMode) return; // skip scroll tracking in presentation mode
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean);
            for (let i = sections.length - 1; i >= 0; i--) {
                if (sections[i].getBoundingClientRect().top <= 120) {
                    setActiveSection(navLinks[i].id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [presentationMode]);

    // In presentation mode, derive active section from the current slide
    const effectiveActive = presentationMode ? (SLIDE_TO_NAV[currentSlide] || 'home') : activeSection;

    const handleNavClick = (e, linkId) => {
        if (presentationMode && onSlideChange) {
            e.preventDefault();
            const slideIdx = NAV_TO_SLIDE[linkId];
            if (slideIdx !== undefined) onSlideChange(slideIdx);
        }
        setMobileOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-strong shadow-lg' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <a href="#home" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 bg-ikea-blue dark:bg-ikea-yellow rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                                <span className="text-white dark:text-ikea-blue font-bold text-sm">IK</span>
                            </div>
                            <span className="font-bold text-ikea-blue dark:text-ikea-yellow hidden sm:block">IKEA Case Study</span>
                        </a>

                        {/* Desktop Nav */}
                        <div className="hidden xl:flex items-center gap-1">
                            {navLinks.map(link => (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    onClick={(e) => handleNavClick(e, link.id)}
                                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${effectiveActive === link.id
                                        ? 'bg-ikea-blue text-white dark:bg-ikea-yellow dark:text-ikea-blue'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-ikea-blue dark:hover:text-ikea-yellow hover:bg-gray-100 dark:hover:bg-dark-card'
                                        }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setPresentationMode(!presentationMode)}
                                className={`p-2 rounded-lg transition-all ${presentationMode ? 'bg-ikea-yellow text-ikea-blue' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-card'}`}
                                title="Presentation Mode"
                            >
                                <FiMonitor size={16} />
                            </button>
                            <button
                                onClick={() => setAudioMuted(!audioMuted)}
                                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-card transition-all"
                                title={audioMuted ? 'Unmute' : 'Mute'}
                            >
                                {audioMuted ? <FiVolumeX size={16} /> : <FiVolume2 size={16} />}
                            </button>
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-card transition-all"
                                title="Toggle Dark Mode"
                            >
                                {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
                            </button>
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="xl:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-card transition-all"
                            >
                                {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-16 left-0 right-0 z-40 glass-strong shadow-xl xl:hidden max-h-[70vh] overflow-y-auto"
                    >
                        <div className="p-4 grid grid-cols-2 gap-2">
                            {navLinks.map(link => (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    onClick={(e) => handleNavClick(e, link.id)}
                                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${effectiveActive === link.id
                                        ? 'bg-ikea-blue text-white dark:bg-ikea-yellow dark:text-ikea-blue'
                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-card'
                                        }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
