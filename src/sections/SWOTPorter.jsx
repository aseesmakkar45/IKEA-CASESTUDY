import { useState, useRef, useEffect } from 'react';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import SectionWrapper, { SectionHeader, StrategicInsight } from '../components/SectionWrapper';
import AnimatedElement from '../components/AnimatedElement';
import { swotData, porterForcesData } from '../data/ikeaData';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function SWOTPorter() {
    const [activeSwot, setActiveSwot] = useState('strengths');
    const [activeForce, setActiveForce] = useState(null);

    const swotColors = {
        strengths: { bg: 'bg-green-50 dark:bg-green-900/10', border: 'border-green-400', text: 'text-green-700 dark:text-green-400', tag: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
        weaknesses: { bg: 'bg-red-50 dark:bg-red-900/10', border: 'border-red-400', text: 'text-red-700 dark:text-red-400', tag: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
        opportunities: { bg: 'bg-blue-50 dark:bg-blue-900/10', border: 'border-blue-400', text: 'text-blue-700 dark:text-blue-400', tag: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
        threats: { bg: 'bg-orange-50 dark:bg-orange-900/10', border: 'border-orange-400', text: 'text-orange-700 dark:text-orange-400', tag: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' },
    };

    const radarData = {
        labels: porterForcesData.map(f => f.force),
        datasets: [{
            label: 'Force Intensity',
            data: porterForcesData.map(f => f.level),
            backgroundColor: 'rgba(0, 51, 153, 0.15)',
            borderColor: '#003399',
            borderWidth: 2,
            pointBackgroundColor: porterForcesData.map(f => f.color),
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
        }]
    };

    const radarOptions = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            r: {
                beginAtZero: true,
                max: 100,
                ticks: { stepSize: 25, display: false },
                grid: { color: 'rgba(128,128,128,0.15)' },
                angleLines: { color: 'rgba(128,128,128,0.15)' },
                pointLabels: { font: { size: 11, family: 'Inter' }, color: '#666' },
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (ctx) => `Intensity: ${ctx.raw}/100`
                }
            }
        },
        onClick: (e, elements) => {
            if (elements.length > 0) {
                setActiveForce(elements[0].index);
            }
        }
    };

    return (
        <SectionWrapper id="swot-porter">
            <SectionHeader
                tag="Chapter X"
                title="SWOT + Porter's Five Forces"
                subtitle="Two foundational strategic analysis frameworks applied to IKEA — revealing the interplay of internal capabilities and external competitive dynamics."
                align="center"
            />

            {/* SWOT Analysis */}
            <AnimatedElement variant="slideUp">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">SWOT Analysis</h3>
            </AnimatedElement>

            <AnimatedElement variant="slideUp" delay={0.1}>
                <div className="flex flex-wrap gap-2 mb-6">
                    {Object.keys(swotData).map(key => (
                        <button
                            key={key}
                            onClick={() => setActiveSwot(key)}
                            className={`px-4 py-2 rounded-xl text-sm font-semibold capitalize transition-all ${activeSwot === key ? swotColors[key].tag : 'bg-gray-100 dark:bg-dark-card text-gray-500'
                                }`}
                        >
                            {key}
                        </button>
                    ))}
                </div>
            </AnimatedElement>

            <AnimatedElement variant="fadeIn">
                <div className={`card ${swotColors[activeSwot].bg} border-l-4 ${swotColors[activeSwot].border} mb-16`}>
                    <h4 className={`font-bold capitalize mb-4 ${swotColors[activeSwot].text}`}>{activeSwot}</h4>
                    <ul className="space-y-3">
                        {swotData[activeSwot].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                                <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${swotColors[activeSwot].border.replace('border-', 'bg-')}`} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </AnimatedElement>

            {/* Porter's Five Forces */}
            <AnimatedElement variant="slideUp">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Porter's Five Forces Analysis</h3>
            </AnimatedElement>

            <div className="grid md:grid-cols-2 gap-8 items-start">
                <AnimatedElement variant="slideLeft">
                    <div className="card">
                        <div className="max-w-sm mx-auto">
                            <Radar data={radarData} options={radarOptions} />
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">Click a point to view detailed analysis</p>
                    </div>
                </AnimatedElement>

                <AnimatedElement variant="slideRight" delay={0.2}>
                    <div className="space-y-3">
                        {porterForcesData.map((force, i) => (
                            <div
                                key={i}
                                onClick={() => setActiveForce(i)}
                                className={`card cursor-pointer transition-all ${activeForce === i ? 'ring-2 ring-ikea-blue dark:ring-ikea-yellow shadow-lg' : 'card-hover'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-bold text-sm text-gray-900 dark:text-gray-100">{force.force}</h4>
                                    <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: force.color + '20', color: force.color }}>
                                        {force.level}/100
                                    </span>
                                </div>
                                <div className="w-full h-2 bg-gray-200 dark:bg-dark-border rounded-full overflow-hidden mb-2">
                                    <div className="h-full rounded-full transition-all duration-500" style={{ width: `${force.level}%`, backgroundColor: force.color }} />
                                </div>
                                {activeForce === i && (
                                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mt-2">{force.analysis}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </AnimatedElement>
            </div>

            <StrategicInsight>
                Combining SWOT with Porter's Five Forces reveals IKEA's strategic position: strong internal capabilities (strengths)
                aligned with favorable industry structure (low supplier power, high barriers to entry). However, the convergence of
                high competitive rivalry and the opportunity/threat of digital transformation creates a strategic inflection point.
                The key question: can IKEA's physical-store moat translate into a digital competitive advantage?
            </StrategicInsight>
        </SectionWrapper>
    );
}
