import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper, { SectionHeader, StrategicInsight } from '../components/SectionWrapper';
import AnimatedElement from '../components/AnimatedElement';
import { qaData } from '../data/ikeaData';

export default function ProfessorQA() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <SectionWrapper id="qa">
            <SectionHeader
                tag="Chapter XII"
                title="Strategic Q&A"
                subtitle="Exploring the most challenging questions regarding IKEA's strategic choices with well-reasoned, framework-backed analysis."
                align="center"
            />

            <AnimatedElement variant="slideUp">
                <div className="card mb-8 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10">
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        <strong className="text-ikea-blue dark:text-ikea-yellow">Insightful Analysis:</strong> The questions below represent
                        some of the most thought-provoking inquiries regarding IKEA's business model. Each answer draws on
                        established strategic frameworks to provide comprehensive, well-reasoned perspectives on their approach.
                    </p>
                </div>
            </AnimatedElement>

            <div className="space-y-4">
                {qaData.map((qa, i) => (
                    <AnimatedElement key={i} variant="slideUp" delay={i * 0.08}>
                        <div className="card overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-start gap-4 text-left"
                            >
                                <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold transition-colors ${openIndex === i
                                    ? 'bg-ikea-blue text-white dark:bg-ikea-yellow dark:text-ikea-blue'
                                    : 'bg-gray-100 dark:bg-dark-card text-gray-500'
                                    }`}>
                                    {i + 1}
                                </span>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm md:text-base pr-4">
                                        {qa.question}
                                    </h3>
                                </div>
                                <span className={`text-lg transition-transform shrink-0 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-4 mt-4 border-t border-gray-200 dark:border-dark-border">
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                                                {qa.answer}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {qa.frameworks.map((fw, j) => (
                                                    <span key={j} className="tag bg-ikea-blue/10 text-ikea-blue dark:bg-ikea-yellow/10 dark:text-ikea-yellow text-xs">
                                                        {fw}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </AnimatedElement>
                ))}
            </div>

            <StrategicInsight>
                A robust understanding of IKEA's strategy requires critical analysis rather than simple observation. By examining
                IKEA's limitations—such as the sustainability paradox, cultural assumptions, and governance opacity—we gain a deeper
                appreciation of the complex trade-offs inherent in their global operations.
            </StrategicInsight>
        </SectionWrapper>
    );
}
