import SectionWrapper, { SectionHeader, StrategicInsight } from '../components/SectionWrapper';
import AnimatedElement from '../components/AnimatedElement';

export default function BusinessModelInnovation() {
    const modelPillars = [
        {
            title: 'Democratic Design',
            description: 'Every IKEA product must satisfy five dimensions: form, function, quality, sustainability, and low price. This "Democratic Design" philosophy operationalizes value innovation at the product level.',
            detail: 'Designers begin with a target price point — often 30-50% below competitors — and engineer backward to achieve it without compromising aesthetics.',
            icon: '🎨'
        },
        {
            title: 'Flat-Pack Revolution',
            description: 'The 1956 invention of flat-pack packaging transformed furniture from a bulky, high-logistics-cost product into a standardized, efficiently shippable commodity.',
            detail: 'A single IKEA truck carries 3x more product than a traditional furniture truck. This reduces shipping costs by up to 80% and eliminates the need for expensive last-mile delivery.',
            icon: '📦'
        },
        {
            title: 'Self-Service Showroom',
            description: 'IKEA stores are designed as experiential journeys. The one-way floor layout (averaging 2.5 hours per visit) exposes customers to the full product range, driving impulse purchases.',
            detail: 'The average IKEA customer spends 60% more than planned. In-store restaurants (serving 660M+ meatballs annually) extend dwell time and transform shopping into an experience.',
            icon: '🏬'
        },
        {
            title: 'Vertical Integration',
            description: 'IKEA controls the entire value chain: in-house design → contracted manufacturing → owned distribution → retail. This eliminates intermediary margins at every stage.',
            detail: 'IKEA owns Swedwood (manufacturing), has 1,600+ supplier contracts, operates 40+ distribution centers, and manages its own logistics fleet.',
            icon: '🔗'
        },
        {
            title: 'Customer as Co-Producer',
            description: 'By shifting assembly labor to the customer, IKEA reduces costs while creating the "IKEA Effect" — consumers value products they assemble more highly.',
            detail: 'This represents Prahalad & Ramaswamy\'s Value Co-Creation framework: the customer isn\'t just a consumer but an active participant in value creation.',
            icon: '🔧'
        },
    ];

    return (
        <SectionWrapper id="business-model" dark>
            <SectionHeader
                tag="Chapter III"
                title="Business Model Innovation"
                subtitle="IKEA didn't invent furniture. It reinvented the business model of furniture — creating a vertically integrated system where every component reinforces cost leadership."
                align="center"
            />

            {/* Showroom visual */}
            <AnimatedElement variant="scaleIn">
                <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
                    <img src="/showroom.png" alt="IKEA showroom with staged room setups" className="w-full h-64 md:h-80 object-cover" />
                    <div className="bg-white/5 dark:bg-white/5 px-6 py-3">
                        <p className="text-xs text-gray-500 dark:text-gray-400 italic">The IKEA showroom experience — a curated, self-service walkthrough designed to maximize product exposure and inspire home solutions.</p>
                    </div>
                </div>
            </AnimatedElement>

            {/* Business Model Comparison */}
            <AnimatedElement variant="slideUp">
                <div className="card mb-12 overflow-hidden">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Traditional vs. IKEA Business Model</h3>
                    <div className="grid md:grid-cols-2 gap-0 md:gap-6">
                        <div className="p-6 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200/50 dark:border-red-800/30">
                            <h4 className="font-bold text-red-700 dark:text-red-400 mb-4">Traditional Furniture Retail</h4>
                            <div className="space-y-3 text-sm">
                                {['Designer → Manufacturer', 'Manufacturer → Wholesaler (+25%)', 'Wholesaler → Retailer (+30%)', 'Retailer → Delivery (+15%)', 'Total: ~70-100% markup chain'].map((step, i) => (
                                    <div key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                        <span className="w-2 h-2 bg-red-400 rounded-full shrink-0" />
                                        {step}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-200/50 dark:border-green-800/30 mt-4 md:mt-0">
                            <h4 className="font-bold text-green-700 dark:text-green-400 mb-4">IKEA Integrated Model</h4>
                            <div className="space-y-3 text-sm">
                                {['In-house Design (cost-first)', 'Direct Supplier Contracts (-40%)', 'Flat-pack Logistics (-80% shipping)', 'Customer Self-Assembly (-15% labor)', 'Total: ~50-60% cost advantage'].map((step, i) => (
                                    <div key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                        <span className="w-2 h-2 bg-green-400 rounded-full shrink-0" />
                                        {step}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedElement>

            {/* Five Pillars */}
            <div className="space-y-6">
                {modelPillars.map((pillar, i) => (
                    <AnimatedElement key={i} variant="slideUp" delay={i * 0.08}>
                        <div className="card card-hover group">
                            <div className="flex gap-4">
                                <span className="text-3xl shrink-0 group-hover:scale-110 transition-transform">{pillar.icon}</span>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{pillar.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">{pillar.description}</p>
                                    <p className="text-gray-500 dark:text-gray-500 text-xs leading-relaxed italic">{pillar.detail}</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedElement>
                ))}
            </div>

            <StrategicInsight>
                IKEA's business model represents what Amit & Zott (2012) call a "business model innovation" — value creation not
                through new products or technologies, but through a novel configuration of activities. Each element (flat-pack,
                self-assembly, showroom, vertical integration) is individually replicable. The competitive moat lies in their
                systemic integration — competitors would need to replicate the entire system, not just individual components.
            </StrategicInsight>
        </SectionWrapper>
    );
}
