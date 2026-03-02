import SectionWrapper, { SectionHeader, StrategicInsight } from '../components/SectionWrapper';
import AnimatedElement from '../components/AnimatedElement';

export default function DisruptiveInnovation() {
    const dimensions = [
        {
            criterion: 'Targets non-consumption',
            applies: true,
            explanation: 'IKEA targeted young consumers who couldn\'t afford traditional furniture — creating consumption where none existed.'
        },
        {
            criterion: 'Simpler and more affordable',
            applies: true,
            explanation: 'Flat-pack, self-assembly products were fundamentally simpler and 30-50% cheaper than traditional alternatives.'
        },
        {
            criterion: 'Initially inferior to incumbents',
            applies: true,
            explanation: 'Early IKEA furniture was perceived as lower quality — "disposable" compared to heirloom-quality incumbent products.'
        },
        {
            criterion: 'Improves over time to capture mainstream',
            applies: true,
            explanation: 'IKEA progressively improved quality, design, and sustainability — now competing with mid-range traditional retailers.'
        },
        {
            criterion: 'Incumbents unable to respond',
            applies: true,
            explanation: 'Traditional retailers couldn\'t adopt flat-pack without cannibalizing their premium positioning and service model.'
        },
        {
            criterion: 'Technology-driven',
            applies: false,
            explanation: 'IKEA\'s disruption was business model-driven, not technology-driven — challenging Christensen\'s typical tech focus.'
        },
    ];

    return (
        <SectionWrapper id="disruption">
            <SectionHeader
                tag="Chapter VI"
                title="Disruptive Innovation Analysis"
                subtitle="Applying Clayton Christensen's Disruptive Innovation Theory to IKEA reveals a textbook case — with one critical deviation that enriches the framework."
                align="center"
            />

            {/* Christensen Framework */}
            <AnimatedElement variant="slideUp">
                <div className="card mb-12">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Christensen's Disruptive Innovation Theory
                        <span className="text-sm font-normal text-gray-500 ml-2">(1997)</span>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        Clayton Christensen's seminal theory argues that disruption occurs when a simpler, cheaper product targets
                        overlooked market segments, gradually improving until it displaces established competitors. The critical insight
                        is that incumbents rationally ignore the disruptor — the new product initially doesn't serve their profitable
                        customers. By the time it does, the incumbent's response comes too late.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        IKEA's trajectory precisely mirrors this pattern: traditional furniture makers dismissed flat-pack as "cheap furniture"
                        — not realizing that the rapidly growing segment of young, mobile, cost-conscious consumers would become the dominant
                        market. The <strong>"innovator's dilemma"</strong> was that responding to IKEA would have required traditional retailers
                        to cannibalize their high-margin, service-intensive model.
                    </p>
                </div>
            </AnimatedElement>

            {/* Disruption Criteria Assessment */}
            <AnimatedElement variant="slideUp" delay={0.1}>
                <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">Disruption Assessment Matrix</h3>
            </AnimatedElement>

            <div className="space-y-3 mb-12">
                {dimensions.map((dim, i) => (
                    <AnimatedElement key={i} variant="slideUp" delay={i * 0.06}>
                        <div className="card card-hover">
                            <div className="flex items-start gap-4">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-lg ${dim.applies
                                    ? 'bg-green-100 dark:bg-green-900/30'
                                    : 'bg-orange-100 dark:bg-orange-900/30'
                                    }`}>
                                    {dim.applies ? '✅' : '⚠️'}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm">{dim.criterion}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{dim.explanation}</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedElement>
                ))}
            </div>

            {/* The Critical Deviation */}
            <AnimatedElement variant="scaleIn">
                <div className="card bg-gradient-to-br from-orange-50 to-transparent dark:from-orange-900/10 border-orange-200/50 dark:border-orange-800/30">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">The Key Question</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        <strong>Is IKEA truly disruptive or "new market" creation?</strong> Christensen's framework focuses on technology-driven
                        disruption where performance improves along a defined trajectory. IKEA's disruption was business model-driven —
                        it didn't improve an existing technology but reconfigured the value chain. This better aligns with
                        Kim & Mauborgne's Blue Ocean Strategy (creating new market space) than with pure Christensen disruption.
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        The resolution: IKEA represents <strong>"new market disruption"</strong> (one of Christensen's two disruption types) —
                        it competed against non-consumption rather than stealing customers from incumbents. This distinction has significant
                        implications for how we analyze IKEA's competitive dynamics and predict future threats.
                    </p>
                </div>
            </AnimatedElement>

            <StrategicInsight>
                IKEA's case enriches disruption theory by demonstrating that business model innovation can be as disruptive as
                technological innovation. This has profound implications for technical entrepreneurs: you don't need a breakthrough
                technology to disrupt an industry. You need a breakthrough system — a novel configuration of activities that
                creates value in a way incumbents cannot replicate without fundamentally restructuring their business.
            </StrategicInsight>
        </SectionWrapper>
    );
}
