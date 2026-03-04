import AnimatedElement from './AnimatedElement';

export default function SectionWrapper({ id, children, className = '', dark = false }) {
    return (
        <section
            id={id}
            className={`relative overflow-hidden ${dark ? 'bg-gray-50 dark:bg-dark-card' : 'bg-white dark:bg-dark-bg'} ${className}`}
        >
            <div className="section-container relative z-10">
                {children}
            </div>
        </section>
    );
}

export function SectionHeader({ tag, title, subtitle, align = 'left' }) {
    return (
        <AnimatedElement variant="slideUp">
            <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''}`}>
                {tag && (
                    <span className="tag bg-ikea-yellow/20 text-ikea-blue dark:bg-ikea-yellow/10 dark:text-ikea-yellow mb-4 block w-fit mx-auto">
                        {tag}
                    </span>
                )}
                <h2 className="section-title">
                    <span className="gradient-text gradient-text-dark">{title}</span>
                </h2>
                {subtitle && <p className={`section-subtitle ${align === 'center' ? 'mx-auto' : ''} mt-4`}>{subtitle}</p>}
            </div>
        </AnimatedElement>
    );
}

export function StrategicInsight({ children }) {
    return (
        <AnimatedElement variant="scaleIn" delay={0.3}>
            <div className="insight-box">
                <div className="flex items-start gap-3">
                    <span className="text-2xl">💡</span>
                    <div>
                        <h4 className="font-bold text-ikea-blue dark:text-ikea-yellow text-lg mb-2">Key Takeaway</h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{children}</p>
                    </div>
                </div>
            </div>
        </AnimatedElement>
    );
}
