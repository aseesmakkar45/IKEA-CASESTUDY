import SectionWrapper, { SectionHeader, StrategicInsight } from '../components/SectionWrapper';
import AnimatedElement from '../components/AnimatedElement';
import { crisisTimeline } from '../data/ikeaData';

export default function DownfallCrisis() {
    return (
        <SectionWrapper id="crisis" dark>
            <SectionHeader
                tag="Chapter VII"
                title="Downfall & Crisis Phases"
                subtitle="No entrepreneurial journey is linear. IKEA's history includes significant crises that tested the resilience of its model and forced strategic evolution."
                align="center"
            />

            {/* Crisis Context */}
            <AnimatedElement variant="slideUp">
                <div className="card mb-12">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        The narrative of IKEA as an unstoppable growth machine obscures critical periods of crisis that reveal structural
                        vulnerabilities in the model. Understanding these crises is essential for any entrepreneurship analysis —
                        they demonstrate how even the most successful business models face existential challenges that require strategic adaptation.
                        Each crisis below tested different dimensions of IKEA's competitive advantage and forced evolution.
                    </p>
                </div>
            </AnimatedElement>

            {/* Crisis Timeline */}
            <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-400 via-orange-400 to-yellow-400 hidden md:block" />

                {crisisTimeline.map((crisis, i) => (
                    <AnimatedElement key={i} variant="slideUp" delay={i * 0.1}>
                        <div className="flex gap-4 mb-8">
                            <div className="hidden md:flex flex-col items-center shrink-0">
                                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center z-10">
                                    <span className="text-lg">⚠️</span>
                                </div>
                            </div>
                            <div className="card card-hover flex-1 border-l-4 border-red-400 dark:border-red-500">
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <span className="tag bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 font-mono">{crisis.year}</span>
                                    <h3 className="font-bold text-gray-900 dark:text-gray-100">{crisis.title}</h3>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{crisis.description}</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/10">
                                        <span className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase">Impact</span>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{crisis.impact}</p>
                                    </div>
                                    <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/10">
                                        <span className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase">Strategic Response</span>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{crisis.response}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedElement>
                ))}
            </div>

            {/* Founder Controversy */}
            <AnimatedElement variant="slideUp" delay={0.2}>
                <div className="card border-l-4 border-orange-400 dark:border-orange-500">
                    <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Founder Controversy</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Ingvar Kamprad's past association with fascist organizations in 1940s Sweden, and subsequent apology in 1994,
                        created a reputational challenge. The crisis raised questions about the relationship between founder legacy
                        and corporate identity — a tension particularly relevant in founder-led enterprises. IKEA's response (Kamprad's
                        public apology, gradual leadership transition, and focus on corporate values) illustrates how organizations
                        can evolve beyond founder limitations.
                    </p>
                </div>
            </AnimatedElement>

            <StrategicInsight>
                IKEA's crisis history demonstrates Teece's Dynamic Capabilities framework: the organizational capacity to "sense"
                emerging threats, "seize" opportunities for adaptation, and "transform" existing capabilities. The MALM crisis led to
                industry-leading safety protocols. COVID-19 catalyzed overdue digital transformation. Each crisis forced IKEA to
                evolve capabilities it wouldn't have developed in stable environments — validating the strategic principle that
                <strong> crisis is the most powerful catalyst for organizational learning</strong>.
            </StrategicInsight>
        </SectionWrapper>
    );
}
