import SectionWrapper, { SectionHeader, StrategicInsight } from '../components/SectionWrapper';
import AnimatedElement from '../components/AnimatedElement';

export default function OpportunityRecognition() {
    const gaps = [
        {
            traditional: 'High prices — furniture as luxury investment',
            ikea: 'Affordable design for the many',
            icon: '💰'
        },
        {
            traditional: 'Exclusive showrooms, intimidating sales staff',
            ikea: 'Self-service, open warehouse browsing',
            icon: '🏪'
        },
        {
            traditional: 'Weeks-long delivery wait times',
            ikea: 'Immediate take-home via flat-pack',
            icon: '📦'
        },
        {
            traditional: 'Custom craftsmanship, artisan premium',
            ikea: 'Standardized design, democratic aesthetics',
            icon: '🎨'
        },
        {
            traditional: 'Fragmented supply chain, multiple middlemen',
            ikea: 'Vertically integrated value chain',
            icon: '🔗'
        },
    ];

    return (
        <SectionWrapper id="opportunity">
            <SectionHeader
                tag="Chapter II"
                title="Opportunity Recognition & Market Gap"
                subtitle="In 1950s Sweden, beautifully designed furniture existed — but only for those who could afford it. Kamprad saw a structural market failure."
                align="center"
            />

            {/* Blue Ocean Framework */}
            <AnimatedElement variant="slideUp">
                <div className="card mb-12">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Blue Ocean Strategy Framework
                        <span className="text-sm font-normal text-gray-500 ml-2">(Kim & Mauborgne, 2005)</span>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        Kim and Mauborgne's Blue Ocean Strategy posits that the most successful enterprises don't compete in existing
                        "red ocean" markets saturated with rivals — they create entirely new market spaces where competition is irrelevant.
                        IKEA's founding represents a textbook blue ocean move: rather than competing with established furniture retailers
                        on their terms (quality, craftsmanship, exclusivity), IKEA created an entirely new value curve.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        The company simultaneously <strong>eliminated</strong> (sales assistance, delivery services),
                        <strong> reduced</strong> (material costs, retail square footage per product),
                        <strong> raised</strong> (product variety, store experience, design accessibility), and
                        <strong> created</strong> (flat-pack logistics, self-assembly model, in-store restaurants) —
                        the four-action framework that defines blue ocean value innovation.
                    </p>
                </div>
            </AnimatedElement>

            {/* Market Gap Comparison */}
            <AnimatedElement variant="slideUp" delay={0.1}>
                <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">The Market Gap IKEA Identified</h3>
            </AnimatedElement>

            <div className="space-y-4 mb-12">
                {gaps.map((gap, i) => (
                    <AnimatedElement key={i} variant="slideUp" delay={i * 0.08}>
                        <div className="card card-hover">
                            <div className="flex items-center gap-4">
                                <span className="text-3xl shrink-0">{gap.icon}</span>
                                <div className="flex-1 grid md:grid-cols-2 gap-4">
                                    <div>
                                        <span className="text-xs font-semibold text-red-500 uppercase tracking-wide">Traditional Model</span>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">{gap.traditional}</p>
                                    </div>
                                    <div>
                                        <span className="text-xs font-semibold text-green-500 uppercase tracking-wide">IKEA Innovation</span>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">{gap.ikea}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedElement>
                ))}
            </div>

            {/* Value Curve */}
            <AnimatedElement variant="scaleIn">
                <div className="card bg-gradient-to-br from-ikea-blue/5 to-transparent dark:from-ikea-blue/10">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">IKEA's Value Innovation Canvas</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {[
                            { action: 'Eliminate', items: 'Sales staff, Delivery service, Showroom snobbery', color: 'text-red-500' },
                            { action: 'Reduce', items: 'Material costs, Assembly labor, Retail markup', color: 'text-orange-500' },
                            { action: 'Raise', items: 'Product range, Design quality, Store experience', color: 'text-blue-500' },
                            { action: 'Create', items: 'Flat-pack model, Self-assembly, In-store dining', color: 'text-green-500' },
                        ].map((item, i) => (
                            <div key={i} className="p-4 rounded-xl bg-white/50 dark:bg-dark-bg/50">
                                <div className={`font-bold text-lg ${item.color}`}>{item.action}</div>
                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">{item.items}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedElement>

            <StrategicInsight>
                IKEA identified what Christensen would later term a "jobs-to-be-done" gap: millions of young, mobile consumers needed
                to furnish homes affordably and immediately. The existing industry was structurally incapable of serving this need
                because its cost structure — artisan production, retail overhead, delivery logistics — required premium pricing.
                IKEA's innovation was not a product; it was a system-level redesign of the entire value chain.
            </StrategicInsight>
        </SectionWrapper>
    );
}
