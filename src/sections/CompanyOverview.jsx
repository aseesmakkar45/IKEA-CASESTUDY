import SectionWrapper, { SectionHeader, StrategicInsight } from '../components/SectionWrapper';
import AnimatedElement from '../components/AnimatedElement';
import { milestones } from '../data/ikeaData';

export default function CompanyOverview() {
    const keyFacts = [
        { label: 'Founded', value: '1943', sub: 'Älmhult, Sweden' },
        { label: 'Founder', value: 'Ingvar Kamprad', sub: 'Age 17 at founding' },
        { label: 'Structure', value: 'Foundation-owned', sub: 'Inter IKEA + Ingka Group' },
        { label: 'Products', value: '9,500+', sub: 'Designed in-house' },
        { label: 'Suppliers', value: '1,600+', sub: 'Across 50+ countries' },
        { label: 'Store Visits', value: '680M+', sub: 'Annual foot traffic' },
    ];

    const earlyMilestones = milestones.filter(m => m.year <= 1985);

    return (
        <SectionWrapper id="overview" dark>
            <SectionHeader
                tag="Chapter I"
                title="Company Overview"
                subtitle="From a mail-order catalog in rural Sweden to the world's largest furniture retailer — the IKEA story is a masterclass in entrepreneurial vision and systemic execution."
                align="center"
            />

            {/* Key Facts Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
                {keyFacts.map((fact, i) => (
                    <AnimatedElement key={i} variant="scaleIn" delay={i * 0.1}>
                        <div className="card card-hover text-center">
                            <div className="text-2xl md:text-3xl font-bold text-ikea-blue dark:text-ikea-yellow mb-1">{fact.value}</div>
                            <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">{fact.label}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{fact.sub}</div>
                        </div>
                    </AnimatedElement>
                ))}
            </div>

            {/* Founder Narrative */}
            <AnimatedElement variant="slideUp">
                <div className="card mb-16">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">The Founder's Journey</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        Ingvar Kamprad's entrepreneurial journey began at age 5, selling matches to neighbors. By 17, he registered IKEA —
                        an acronym from his initials (I.K.) and the first letters of Elmtaryd and Agunnaryd, the farm and village where he grew up.
                        What started as a mail-order business selling pens, wallets, and picture frames transformed into a furniture enterprise
                        that would fundamentally alter global retail economics.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Kamprad's genius was not in furniture design per se, but in recognizing that the furniture industry's value chain was
                        profoundly inefficient. Traditional furniture moved through layers of middlemen — manufacturers, wholesalers, retailers —
                        each adding cost without proportional value. Kamprad saw the opportunity to vertically integrate, cut intermediaries,
                        and pass savings to consumers. This insight, refined over decades, became the IKEA system.
                    </p>
                </div>
            </AnimatedElement>

            {/* Timeline */}
            <AnimatedElement variant="slideUp">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Founding Timeline</h3>
            </AnimatedElement>
            <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ikea-blue to-ikea-yellow hidden md:block" />
                {earlyMilestones.map((m, i) => (
                    <AnimatedElement key={i} variant={i % 2 === 0 ? 'slideLeft' : 'slideRight'} delay={i * 0.08}>
                        <div className={`flex items-center mb-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                                <div className="card card-hover">
                                    <span className="text-sm font-bold text-ikea-blue dark:text-ikea-yellow">{m.year}</span>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">{m.event}</p>
                                </div>
                            </div>
                            <div className="hidden md:flex items-center justify-center w-4 h-4 bg-ikea-yellow border-2 border-ikea-blue rounded-full z-10 shrink-0" />
                            <div className="flex-1 hidden md:block" />
                        </div>
                    </AnimatedElement>
                ))}
            </div>

            <StrategicInsight>
                IKEA's founding narrative exemplifies Sarasvathy's Effectuation Theory — Kamprad didn't begin with a grand vision
                for global furniture domination. He began with available means (a small catalog business), identified an emerging
                opportunity (furniture demand among young Swedish families), and iteratively built capabilities. The "IKEA system"
                emerged through experimentation, not predetermined strategy.
            </StrategicInsight>
        </SectionWrapper>
    );
}
