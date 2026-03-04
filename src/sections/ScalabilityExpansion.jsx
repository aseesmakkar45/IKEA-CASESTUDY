import SectionWrapper, { SectionHeader, StrategicInsight } from '../components/SectionWrapper';
import AnimatedElement from '../components/AnimatedElement';
import { expansionData } from '../data/ikeaData';

export default function ScalabilityExpansion() {
    const phases = [
        { era: '1943-1963', title: 'Swedish Foundation', regions: 'Sweden only', stores: '1-4', strategy: 'Prove the concept in home market, iterate on flat-pack model, establish brand identity' },
        { era: '1963-1973', title: 'Nordic Consolidation', regions: 'Norway, Denmark', stores: '~10', strategy: 'Test international replicability in culturally similar markets with shared Scandinavian values' },
        { era: '1973-1985', title: 'European Expansion', regions: 'Switzerland, Germany, Netherlands, UK', stores: '~50', strategy: 'Adapt model to diverse European consumer cultures while maintaining cost structure' },
        { era: '1985-2000', title: 'Global Scaling', regions: 'USA, Canada, China, Russia', stores: '~200', strategy: 'Enter diverse markets — test whether the IKEA model transcends cultural boundaries' },
        { era: '2000-Present', title: 'Digital + Emerging Markets', regions: 'India, South America, Philippines', stores: '460+', strategy: 'Omnichannel transformation, urban format stores, emerging market localization' },
    ];

    return (
        <SectionWrapper id="scalability" dark>
            <SectionHeader
                tag="Chapter V"
                title="Scalability & Global Expansion Architecture"
                subtitle="IKEA's expansion from a single Swedish store to 460+ locations across 62 markets reveals a sophisticated scaling playbook rooted in Global Value Chain theory."
                align="center"
            />

            {/* Global Value Chain Framework */}
            <AnimatedElement variant="slideUp">
                <div className="card mb-12">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Global Value Chain Theory
                        <span className="text-sm font-normal text-gray-500 ml-2">(Gereffi, 1999)</span>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Gereffi's Global Value Chain (GVC) framework distinguishes between "producer-driven" and "buyer-driven" chains.
                        IKEA represents a hybrid: it exercises buyer-driven governance over 1,600+ suppliers while maintaining
                        producer-driven control over design and retail. This dual governance enables simultaneous cost optimization
                        (through supplier competition) and quality control (through in-house design standards). The IWAY code of conduct
                        further extends governance to labor and environmental standards across the entire supply network.
                    </p>
                </div>
            </AnimatedElement>

            {/* World Map Visualization */}
            <AnimatedElement variant="scaleIn" delay={0.1}>
                <div className="card mb-12">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6">Global Footprint</h3>
                    <div className="relative w-full" style={{ paddingBottom: '80%' }}>
                        <svg viewBox="0 0 100 80" className="absolute inset-0 w-full h-full xl:overflow-visible">
                            {/* Simplified world outline */}
                            <ellipse cx="50" cy="35" rx="48" ry="33" fill="none" stroke="currentColor" className="text-gray-200 dark:text-gray-700" strokeWidth="0.3" />

                            {/* Grid lines */}
                            {[20, 35, 50].map(y => (
                                <line key={y} x1="2" y1={y} x2="98" y2={y} stroke="currentColor" className="text-gray-100 dark:text-gray-800" strokeWidth="0.2" strokeDasharray="1,1" />
                            ))}

                            {/* Region dots */}
                            {expansionData.map((region, i) => (
                                <g key={i}>
                                    <circle cx={region.x} cy={region.y} r="3" className="fill-ikea-blue/20 dark:fill-ikea-yellow/20" />
                                    <circle cx={region.x} cy={region.y} r="1.5" className="fill-ikea-blue dark:fill-ikea-yellow" />
                                    <text x={region.x} y={region.y - 5} textAnchor="middle" className="fill-gray-700 dark:fill-gray-300" fontSize="2.5" fontWeight="bold">{region.region}</text>
                                    <text x={region.x} y={region.y + 6} textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="2">{region.stores} stores · {region.revenue} revenue</text>
                                </g>
                            ))}
                        </svg>
                    </div>
                </div>
            </AnimatedElement>

            {/* Store visual */}
            <AnimatedElement variant="scaleIn">
                <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
                    <img src="/store.png" alt="Modern IKEA-style blue and yellow retail store exterior" className="w-full h-56 md:h-72 object-cover" />
                    <div className="bg-white/5 dark:bg-white/5 px-6 py-3">
                        <p className="text-xs text-gray-500 dark:text-gray-400 italic">The iconic blue-and-yellow store format — replicated across 460+ locations in 62 markets worldwide.</p>
                    </div>
                </div>
            </AnimatedElement>

            {/* Expansion Phases */}
            <AnimatedElement variant="slideUp">
                <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">Expansion Phases</h3>
            </AnimatedElement>

            <div className="space-y-4">
                {phases.map((phase, i) => (
                    <AnimatedElement key={i} variant="slideUp" delay={i * 0.08}>
                        <div className="card card-hover">
                            <div className="flex flex-col md:flex-row md:items-start gap-4">
                                <div className="shrink-0">
                                    <span className="tag bg-ikea-yellow/20 text-ikea-blue dark:text-ikea-yellow font-mono">{phase.era}</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100">{phase.title}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Regions: {phase.regions} · Stores: {phase.stores}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">{phase.strategy}</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedElement>
                ))}
            </div>

            {/* Economies of Scale */}
            <AnimatedElement variant="scaleIn" delay={0.2}>
                <div className="card mt-12 bg-gradient-to-br from-ikea-blue/5 to-transparent dark:from-ikea-blue/10">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">Economies of Scale — The Flywheel Effect</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        IKEA's scale creates a self-reinforcing virtuous cycle: more stores → higher volumes → greater supplier bargaining power
                        → lower costs → lower prices → more customers → more stores. This flywheel, once spinning, creates a structural
                        advantage that is nearly impossible for smaller competitors to replicate. The economic concept of economies of scale
                        operates at every level — purchasing, manufacturing, distribution, and marketing.
                    </p>
                </div>
            </AnimatedElement>

            <StrategicInsight>
                IKEA's global expansion reveals the "Internationalization Paradox" — the standardized model that enables efficiency
                also creates tension with local market needs. The company's resolution (80% standardized products, 20% locally adapted)
                mirrors Ghemawat's AAA Framework: Adaptation (local products), Aggregation (standardized operations), and Arbitrage
                (global sourcing to exploit cost differentials). This tri-modal strategy explains how IKEA maintains a coherent global
                identity while serving culturally diverse markets.
            </StrategicInsight>
        </SectionWrapper>
    );
}
