import { motion } from 'framer-motion';
import AnimatedElement from '../components/AnimatedElement';

export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-dark-bg">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-ikea-yellow/10 rounded-full blur-3xl animate-float" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-ikea-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gray-200/20 dark:border-gray-700/20 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-200/15 dark:border-gray-700/15 rounded-full" />
            </div>

            <div className="section-container text-center relative z-10">
                <AnimatedElement variant="fadeIn">
                    <span className="tag bg-ikea-blue/10 text-ikea-blue dark:bg-ikea-yellow/10 dark:text-ikea-yellow mb-6 inline-block">
                        Entrepreneurship Exploration — Case Study
                    </span>
                </AnimatedElement>

                <AnimatedElement variant="slideUp" delay={0.2}>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
                        <span className="text-gray-400 dark:text-gray-600 italic font-light text-2xl md:text-3xl lg:text-4xl block mb-4">
                            "Imagine a world where only the rich could afford design…"
                        </span>
                        <span className="gradient-text gradient-text-dark">IKEA</span>
                        <span className="text-gray-900 dark:text-gray-100"> Disrupted It.</span>
                    </h1>
                </AnimatedElement>

                <AnimatedElement variant="slideUp" delay={0.4}>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                        An exploration of how a 17-year-old from rural Sweden
                        built a €47.6 billion empire that democratized design, redefined retail economics,
                        and pioneered sustainable business architecture.
                    </p>
                </AnimatedElement>

                <AnimatedElement variant="slideUp" delay={0.6}>
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                        <a href="#overview" className="btn-primary">
                            Begin Exploration →
                        </a>

                    </div>
                </AnimatedElement>

                <AnimatedElement variant="fadeIn" delay={0.8}>
                    <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 dark:text-gray-500 mb-10">
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-ikea-blue dark:text-ikea-yellow">€47.6B</span>
                            <span>Revenue (2023)</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-ikea-blue dark:text-ikea-yellow">62</span>
                            <span>Markets</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-ikea-blue dark:text-ikea-yellow">460+</span>
                            <span>Stores</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-ikea-blue dark:text-ikea-yellow">228K</span>
                            <span>Employees</span>
                        </div>
                    </div>
                </AnimatedElement>

                {/* Team Credits */}
                <AnimatedElement variant="slideUp" delay={1.0}>
                    <div className="mt-2 mb-4">
                        <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-3">Presented by</p>
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                            {['Asees Jot Singh', 'Astitav Gupta', 'Md. Wasim', 'Harshit'].map((name, i) => (
                                <span key={i} className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-ikea-yellow" />
                                    {name}
                                </span>
                            ))}
                        </div>
                        <p className="text-xs text-gray-400 dark:text-gray-600 mt-2">B.E. Computer Engineering — Entrepreneurship Exploration</p>
                    </div>
                </AnimatedElement>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center pt-2">
                    <div className="w-1.5 h-1.5 bg-ikea-blue dark:bg-ikea-yellow rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
