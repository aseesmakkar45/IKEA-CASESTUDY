import SectionWrapper, { SectionHeader, StrategicInsight } from '../components/SectionWrapper';
import AnimatedElement from '../components/AnimatedElement';

export default function ESGSustainability() {
    const esgPillars = [
        {
            pillar: 'Environmental',
            color: 'green',
            initiatives: [
                { title: 'Climate Positive by 2030', desc: 'Commitment to reduce more greenhouse gas emissions than the IKEA value chain emits' },
                { title: 'Renewable Energy', desc: '100% renewable electricity in all IKEA operations. Invested €2.5B in wind and solar farms' },
                { title: 'Circular Design', desc: 'Products designed for disassembly, repair, and recycling. Furniture buy-back programs in 27 markets' },
                { title: 'Sustainable Materials', desc: '98% of wood FSC-certified or recycled. Transition to renewable and recycled plastics by 2030' },
            ]
        },
        {
            pillar: 'Social',
            color: 'blue',
            initiatives: [
                { title: 'Fair Wages & Labor', desc: 'IWAY Code of Conduct enforced across 1,600+ suppliers with regular third-party audits' },
                { title: 'Refugee Employment', desc: 'Skills for Employment program training 2,500+ refugees annually across European operations' },
                { title: 'Community Investment', desc: 'IKEA Foundation is one of the world\'s largest philanthropic foundations (€178M grants in 2023)' },
                { title: 'Diversity & Inclusion', desc: '47% female managers globally. Country-specific D&I targets with transparent reporting' },
            ]
        },
        {
            pillar: 'Governance',
            color: 'purple',
            initiatives: [
                { title: 'Foundation Ownership', desc: 'Owned by Stichting INGKA Foundation — profits cannot be extracted, only reinvested or donated' },
                { title: 'Supply Chain Transparency', desc: 'Published supplier list (one of the first major retailers to do so)' },
                { title: 'Anti-Corruption', desc: 'Mandatory ethics training, whistleblower protections, third-party compliance audits' },
                { title: 'Tax Transparency', desc: 'Country-by-country reporting adopted amid historical criticism of tax optimization structures' },
            ]
        },
    ];

    const colorMap = { green: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400', blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400', purple: 'bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400' };

    return (
        <SectionWrapper id="esg" dark>
            <SectionHeader
                tag="Chapter IX"
                title="ESG & Sustainable Competitive Advantage"
                subtitle="IKEA's sustainability strategy reveals how ESG integration can transition from compliance cost to competitive advantage — creating what Porter calls 'shared value'."
                align="center"
            />

            {/* ESG Framework */}
            <AnimatedElement variant="slideUp">
                <div className="card mb-12">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        The ESG Framework in Strategic Context
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        Environmental, Social, and Governance (ESG) criteria have evolved from peripheral corporate social responsibility
                        to a central strategic imperative. For IKEA, this transition creates a fundamental paradox: the company's success
                        was built on making furniture affordable and accessible through mass production — inherently a high-resource-consumption
                        model. The strategic question is whether IKEA can maintain its cost leadership while transitioning to circular,
                        sustainable operations.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Porter & Kramer's "Creating Shared Value" framework (2011) argues that business value and social value are
                        not zero-sum — companies can create economic value by addressing societal needs. IKEA's sustainability investments
                        exemplify this: renewable energy reduces long-term energy costs, circular design creates new revenue streams
                        (furniture resale), and sustainable material sourcing reduces supply chain risk.
                    </p>
                </div>
            </AnimatedElement>

            {/* Three Pillars */}
            {esgPillars.map((section, i) => (
                <AnimatedElement key={i} variant="slideUp" delay={i * 0.1}>
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-3">
                            <span className={`tag ${colorMap[section.color]}`}>{section.pillar}</span>
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {section.initiatives.map((init, j) => (
                                <div key={j} className="card card-hover">
                                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">{init.title}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{init.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedElement>
            ))}

            {/* The Sustainability Paradox */}
            <AnimatedElement variant="scaleIn" delay={0.2}>
                <div className="card bg-gradient-to-br from-orange-50 to-transparent dark:from-orange-900/10 border-orange-200/50 dark:border-orange-800/30">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">The "Fast Furniture" Paradox</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        IKEA's business model depends on volume: selling millions of affordable items requires massive production.
                        This creates an inherent tension with circularity — if furniture lasts longer, consumers buy less.
                        IKEA's resolution (furniture-as-a-service, buy-back programs, refurbishment) aims to decouple revenue from
                        virgin resource consumption, but the economic viability of this transition at IKEA's scale remains academia's
                        most compelling open question about the company's future.
                    </p>
                </div>
            </AnimatedElement>

            <StrategicInsight>
                IKEA's ESG trajectory demonstrates the evolution from "defensive CSR" (responding to criticism) to "strategic sustainability"
                (embedding ESG into competitive advantage). The company's €2.5B renewable energy investments are not philanthropic —
                they hedge against energy price volatility. Its circular design initiatives create new revenue streams. This validates
                Hart's Natural-Resource-Based View: environmental strategy can be a source of competitive advantage, not merely a cost.
            </StrategicInsight>
        </SectionWrapper>
    );
}
