import SectionWrapper, { SectionHeader, StrategicInsight } from '../components/SectionWrapper';
import AnimatedElement from '../components/AnimatedElement';

export default function CostLeadership() {
    const supplyChainSteps = [
        { step: 'Design', desc: 'Price-first design — target price set before design begins. 9,500+ products designed in-house at IKEA of Sweden, Älmhult.', icon: '✏️', saving: 'Eliminates designer markup' },
        { step: 'Sourcing', desc: '1,600+ suppliers across 50+ countries compete on IKEA specifications. Long-term contracts traded for volume guarantees.', icon: '🌍', saving: '20-40% below market sourcing' },
        { step: 'Manufacturing', desc: 'Components designed for efficient mass production. Standardized parts reduce tooling costs and enable volume economies.', icon: '🏭', saving: 'Scale economies at 460+ stores' },
        { step: 'Flat-Pack', desc: 'Furniture disassembled into flat packages — revolutionary logistics innovation. 3x more product per truck vs. assembled furniture.', icon: '📦', saving: '80% shipping cost reduction' },
        { step: 'Distribution', desc: '40+ distribution centers globally. Hub-and-spoke model with automated warehousing. 70% direct supplier-to-store shipping.', icon: '🚛', saving: 'Minimal warehousing overhead' },
        { step: 'Self-Assembly', desc: 'Customer completes final assembly — eliminating labor costs while enabling immediate product availability.', icon: '🔧', saving: '15% labor cost eliminated' },
    ];

    return (
        <SectionWrapper id="cost-leadership">
            <SectionHeader
                tag="Chapter IV"
                title="Cost Leadership & Lean Operations"
                subtitle="IKEA achieves Porter's Cost Leadership not through a single tactic, but through a systemically integrated value chain where every link reinforces cost efficiency."
                align="center"
            />

            {/* Framework Context */}
            <AnimatedElement variant="slideUp">
                <div className="card mb-12">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Theoretical Foundation
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-ikea-blue dark:text-ikea-yellow mb-2">Porter's Cost Leadership <span className="text-xs text-gray-500">(1980)</span></h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                Porter's Generic Strategies framework identifies cost leadership as achieving competitive advantage by being
                                the lowest-cost producer in an industry. IKEA doesn't just pursue cost reduction — it has architected an entire
                                system where cost leadership is embedded in design, production, logistics, and even customer behavior.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-ikea-blue dark:text-ikea-yellow mb-2">Lean Operations <span className="text-xs text-gray-500">(Toyota Production System)</span></h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                IKEA's operational philosophy mirrors Toyota's lean production principles: eliminate waste (muda),
                                optimize flow, and continuously improve. The flat-pack concept itself is a manifestation of lean thinking —
                                eliminating the waste of shipping air (empty space in assembled furniture transport).
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedElement>

            {/* Animated Supply Chain */}
            <AnimatedElement variant="slideUp" delay={0.1}>
                <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">The IKEA Value Chain</h3>
            </AnimatedElement>

            <div className="relative">
                {supplyChainSteps.map((step, i) => (
                    <AnimatedElement key={i} variant="slideUp" delay={i * 0.1}>
                        <div className="flex items-start gap-4 mb-4 group">
                            <div className="flex flex-col items-center shrink-0">
                                <div className="w-12 h-12 rounded-xl bg-ikea-blue/10 dark:bg-ikea-blue/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                    {step.icon}
                                </div>
                                {i < supplyChainSteps.length - 1 && (
                                    <div className="w-0.5 h-8 bg-gradient-to-b from-ikea-blue/30 to-transparent mt-2" />
                                )}
                            </div>
                            <div className="card card-hover flex-1">
                                <div className="flex flex-wrap items-start justify-between gap-2">
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100">{step.step}</h4>
                                    <span className="tag bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">{step.saving}</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    </AnimatedElement>
                ))}
            </div>

            {/* Cost Comparison */}
            <AnimatedElement variant="scaleIn" delay={0.3}>
                <div className="card mt-12 bg-gradient-to-br from-green-50 to-transparent dark:from-green-900/10">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">The IKEA Cost Advantage — By the Numbers</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {[
                            { metric: '80%', desc: 'Lower shipping costs via flat-pack' },
                            { metric: '30-50%', desc: 'Lower retail prices than competitors' },
                            { metric: '40+', desc: 'Distribution centers globally' },
                            { metric: '25,000', desc: 'Quality tests annually' },
                        ].map((item, i) => (
                            <div key={i} className="p-4">
                                <div className="text-2xl font-bold text-ikea-blue dark:text-ikea-yellow">{item.metric}</div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedElement>

            <StrategicInsight>
                IKEA's cost leadership derives from what economists call "economies of integration" — the value created by
                coordinating an entire system rather than optimizing individual components. Competitors can replicate any
                single element (flat-pack, self-assembly, large stores), but replicating the systemic integration requires
                decades of organizational learning and cultural embedding. This is the essence of a sustainable competitive moat.
            </StrategicInsight>
        </SectionWrapper>
    );
}
