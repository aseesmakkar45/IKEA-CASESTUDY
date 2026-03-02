import SectionWrapper, { SectionHeader, StrategicInsight } from '../components/SectionWrapper';
import AnimatedElement from '../components/AnimatedElement';
import { entrepreneurshipLessons } from '../data/ikeaData';

export default function LessonsEntrepreneurship() {
    return (
        <SectionWrapper id="lessons" dark>
            <SectionHeader
                tag="Chapter XI"
                title="Lessons in Technical Entrepreneurship"
                subtitle="Six key principles from IKEA's 80-year entrepreneurial journey — each tied to strategy theory and directly applicable to technology ventures."
                align="center"
            />

            <div className="grid md:grid-cols-2 gap-6">
                {entrepreneurshipLessons.map((lesson, i) => (
                    <AnimatedElement key={i} variant="scaleIn" delay={i * 0.08}>
                        <div className="card card-hover h-full group">
                            <div className="flex items-start gap-4">
                                <span className="text-3xl group-hover:scale-110 transition-transform">{lesson.icon}</span>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{lesson.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{lesson.description}</p>
                                    <span className="tag bg-ikea-blue/10 text-ikea-blue dark:bg-ikea-yellow/10 dark:text-ikea-yellow text-xs">
                                        {lesson.framework}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </AnimatedElement>
                ))}
            </div>

            {/* Application to Tech Ventures */}
            <AnimatedElement variant="slideUp" delay={0.3}>
                <div className="card mt-12 bg-gradient-to-br from-ikea-blue/5 to-ikea-yellow/5 dark:from-ikea-blue/10 dark:to-ikea-yellow/10">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Application to Technical Entrepreneurship</h3>
                    <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600 dark:text-gray-400">
                        <div>
                            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">For Software/SaaS Ventures</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-ikea-blue dark:text-ikea-yellow">→</span>
                                    Start with available means (your skills, network, resources) — not with a grand vision requiring capital you don't have
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-ikea-blue dark:text-ikea-yellow">→</span>
                                    Design your cost structure before your product — if you can't sustain low pricing, you can't achieve scale
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-ikea-blue dark:text-ikea-yellow">→</span>
                                    Build systems that get more efficient with scale, not more complex
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">For Hardware/Deep Tech Ventures</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-ikea-blue dark:text-ikea-yellow">→</span>
                                    Innovation doesn't require invention — recombining existing technologies in novel ways can be disruptive
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-ikea-blue dark:text-ikea-yellow">→</span>
                                    Treat each crisis as strategic intelligence — it reveals what your model cannot yet handle
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-ikea-blue dark:text-ikea-yellow">→</span>
                                    Build interlocking advantages — a single differentiator is replicable; a system is not
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </AnimatedElement>

            <StrategicInsight>
                The fundamental lesson from IKEA for technical entrepreneurs: sustainable competitive advantage comes not from any
                single innovation — not flat-pack, not self-assembly, not the showroom experience — but from the systemic integration
                of multiple reinforcing elements. In technology terms: your moat is not your technology; it's your architecture.
            </StrategicInsight>
        </SectionWrapper>
    );
}
