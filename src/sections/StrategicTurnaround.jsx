import SectionWrapper, { SectionHeader, StrategicInsight } from '../components/SectionWrapper';
import AnimatedElement from '../components/AnimatedElement';

export default function StrategicTurnaround() {
    const pivots = [
        {
            title: 'E-Commerce Acceleration',
            before: 'Only 7% online sales (2019)',
            after: '26% online sales (2023)',
            detail: 'Invested €3B+ in digital infrastructure. IKEA app redesigned with AR room planning (IKEA Place). Online order fulfillment from stores enabled same-day delivery in 30+ markets.',
            icon: '🌐'
        },
        {
            title: 'City-Center Format Stores',
            before: 'Suburban-only mega-stores (avg 30,000 sqm)',
            after: 'Urban planning studios (800-3,000 sqm)',
            detail: 'Recognizing urbanization trends, IKEA launched small-format "planning studios" in city centers (Paris, New York, Tokyo). These showrooms drive online orders while maintaining tactile brand experience.',
            icon: '🏙️'
        },
        {
            title: 'Services Ecosystem',
            before: 'Product-only sales model',
            after: 'Full-service home furnishing ecosystem',
            detail: 'TaskRabbit acquisition (2017) for assembly services. Partnerships with Sonos for smart home speakers. Kitchen planning, interior design services, and furniture rental programs.',
            icon: '🔧'
        },
        {
            title: 'Supply Chain Resilience',
            before: 'JIT (Just-In-Time) global supply chain',
            after: 'Regionalized, resilient supply network',
            detail: 'Post-COVID shift from pure efficiency to resilience. Increased regional sourcing, expanded buffer inventory, and invested in supply chain digitization for real-time visibility.',
            icon: '📦'
        },
        {
            title: 'AI & Data Integration',
            before: 'Limited digital personalization',
            after: 'AI-driven customer experience',
            detail: 'Machine learning for demand forecasting, reducing waste by 10%. Computer vision for room scanning (IKEA Kreativ). Personalized product recommendations driving 15% higher basket value.',
            icon: '🤖'
        },
    ];

    return (
        <SectionWrapper id="turnaround">
            <SectionHeader
                tag="Chapter VIII"
                title="Strategic Turnaround & Digital Pivot"
                subtitle="IKEA's response to existential threats demonstrates strategic renewal — the capacity to fundamentally reinvent while preserving core identity."
                align="center"
            />

            {/* Digital Transformation Context */}
            <AnimatedElement variant="slideUp">
                <div className="card mb-12">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">The Digital Imperative</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        By 2019, IKEA faced a strategic inflection point. The very model that made it dominant — massive suburban stores
                        requiring physical visits — became a liability as consumer behavior shifted online. Competitors like Wayfair
                        (founded 2002, purely digital) demonstrated that furniture could be sold without the warehouse showroom experience.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        COVID-19 accelerated this transition from a long-term strategic challenge to an immediate existential threat.
                        With 75% of stores temporarily closed, IKEA's e-commerce revenue surged 45% in 2020 — revealing both the
                        demand for digital and the organization's under-investment. The subsequent transformation represents what
                        O'Reilly & Tushman call <strong>"organizational ambidexterity"</strong> — simultaneously exploiting existing
                        strengths while exploring fundamentally new capabilities.
                    </p>
                </div>
            </AnimatedElement>

            {/* Digital Pivot Cards */}
            <div className="space-y-6">
                {pivots.map((pivot, i) => (
                    <AnimatedElement key={i} variant="slideUp" delay={i * 0.08}>
                        <div className="card card-hover group">
                            <div className="flex gap-4">
                                <span className="text-3xl shrink-0 group-hover:scale-110 transition-transform">{pivot.icon}</span>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">{pivot.title}</h3>
                                    <div className="grid md:grid-cols-2 gap-3 mb-3">
                                        <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/10">
                                            <span className="text-xs font-semibold text-red-500 uppercase">Before</span>
                                            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{pivot.before}</p>
                                        </div>
                                        <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/10">
                                            <span className="text-xs font-semibold text-green-500 uppercase">After</span>
                                            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{pivot.after}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{pivot.detail}</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedElement>
                ))}
            </div>

            <StrategicInsight>
                IKEA's digital pivot demonstrates a key principle of strategic management: timing matters more than speed.
                IKEA was "late" to digital by startup standards, but its transformation was executed from a position of strength —
                with massive brand equity, physical infrastructure for fulfillment, and financial resources that pure digital
                competitors lack. This validates the "fast follower" advantage theory: in some markets, the first mover bears
                the cost of educating the market, while the fast follower deploys at scale with proven demand.
            </StrategicInsight>
        </SectionWrapper>
    );
}
