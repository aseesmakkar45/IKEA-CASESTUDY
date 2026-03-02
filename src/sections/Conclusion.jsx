import { motion } from 'framer-motion';
import SectionWrapper, { SectionHeader } from '../components/SectionWrapper';
import AnimatedElement from '../components/AnimatedElement';

export default function Conclusion() {
    const reflections = [
        'Disruption doesn\'t require technology — it requires a system-level rethinking of value creation and delivery.',
        'Cost leadership is sustainable only when embedded in culture, design processes, and supply chain architecture — not just pricing.',
        'Global scaling demands the discipline of standardization with the flexibility of localization.',
        'Crises are not failures — they are the most potent catalysts for strategic evolution and organizational learning.',
        'Sustainability transitions from cost to advantage when integrated into core business model architecture.',
        'The ultimate entrepreneurial moat is not a single innovation — it\'s an interlocking system of reinforcing advantages.',
    ];

    return (
        <SectionWrapper id="conclusion" dark>
            <SectionHeader
                tag="Final Chapter"
                title="Strategic Reflection"
                subtitle="What IKEA's 80-year journey teaches us about the nature of entrepreneurial value creation."
                align="center"
            />

            {/* Closing Narrative */}
            <AnimatedElement variant="slideUp">
                <div className="card mb-12 text-center">
                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6">
                        "We started with a simple question: imagine a world where only the rich could afford design."
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        Ingvar Kamprad answered that question not with a product, but with a system. A system that connected
                        Swedish design philosophy to global manufacturing economics to self-service retail to customer co-creation —
                        each element reinforcing the others in a virtuous cycle that competitors have spent 70 years trying to replicate.
                    </p>
                </div>
            </AnimatedElement>

            {/* Key Reflections */}
            <AnimatedElement variant="slideUp" delay={0.1}>
                <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">Key Strategic Reflections</h3>
            </AnimatedElement>

            <div className="space-y-4 mb-12">
                {reflections.map((reflection, i) => (
                    <AnimatedElement key={i} variant="slideUp" delay={i * 0.06}>
                        <div className="card card-hover flex items-start gap-4">
                            <span className="w-8 h-8 rounded-lg bg-ikea-yellow/20 flex items-center justify-center shrink-0 text-sm font-bold text-ikea-blue dark:text-ikea-yellow">
                                {i + 1}
                            </span>
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{reflection}</p>
                        </div>
                    </AnimatedElement>
                ))}
            </div>

            {/* Frameworks Summary */}
            <AnimatedElement variant="scaleIn" delay={0.2}>
                <div className="card bg-gradient-to-br from-ikea-blue/5 to-ikea-yellow/5 dark:from-ikea-blue/10 dark:to-ikea-yellow/10 mb-12">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Frameworks Referenced</h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'Blue Ocean Strategy', 'Porter\'s Generic Strategies', 'Disruptive Innovation Theory',
                            'Lean Operations / TPS', 'Economies of Scale', 'Value Co-Creation',
                            'Effectuation Theory', 'ESG Framework', 'Global Value Chain Theory',
                            'Dynamic Capabilities', 'CAGE Distance Framework', 'Resource-Based View',
                            'Organizational Ambidexterity', 'Transaction Cost Economics',
                            'Creating Shared Value', 'SWOT Analysis', 'Porter\'s Five Forces'
                        ].map((fw, i) => (
                            <span key={i} className="tag bg-ikea-blue/10 text-ikea-blue dark:bg-ikea-yellow/10 dark:text-ikea-yellow text-xs">
                                {fw}
                            </span>
                        ))}
                    </div>
                </div>
            </AnimatedElement>

            {/* Final Quote */}
            <AnimatedElement variant="fadeIn" delay={0.4}>
                <div className="text-center py-12">
                    <motion.p
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-2xl md:text-3xl font-light text-gray-500 dark:text-gray-400 italic max-w-3xl mx-auto leading-relaxed"
                    >
                        "Most of the things still remain to be done. A glorious future!"
                    </motion.p>
                    <p className="text-sm text-gray-400 dark:text-gray-600 mt-4">— Ingvar Kamprad, IKEA Founder (1926–2018)</p>
                </div>
            </AnimatedElement>
        </SectionWrapper>
    );
}
