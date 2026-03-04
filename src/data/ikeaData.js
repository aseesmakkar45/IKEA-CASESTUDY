// IKEA Data Module
// All data used across visualizations and sections

export const revenueData = {
    labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [{
        label: 'IKEA Group Revenue (€ Billions)',
        data: [23.1, 25.2, 27.0, 28.5, 29.3, 31.9, 34.2, 36.3, 38.8, 41.3, 39.6, 41.9, 44.6, 47.6],
        borderColor: '#003399',
        backgroundColor: 'rgba(0, 51, 153, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: '#FFDA1A',
        pointBorderColor: '#003399',
        pointBorderWidth: 2,
        pointHoverRadius: 8,
    }]
};

export const milestones = [
    { year: 1943, event: 'Ingvar Kamprad founds IKEA as a mail-order business in Älmhult, Sweden, at age 17', category: 'founding' },
    { year: 1951, event: 'First IKEA furniture catalog published — democratizing design access', category: 'innovation' },
    { year: 1953, event: 'First furniture showroom opens in Älmhult, pioneering experiential retail', category: 'expansion' },
    { year: 1956, event: 'Flat-pack furniture concept invented — revolutionizing logistics economics', category: 'innovation' },
    { year: 1958, event: 'First full-scale IKEA store opens in Älmhult (6,700 sqm)', category: 'expansion' },
    { year: 1963, event: 'First international store opens in Oslo, Norway — beginning Nordic expansion', category: 'expansion' },
    { year: 1969, event: 'First store in Denmark — Scandinavian market consolidation', category: 'expansion' },
    { year: 1973, event: 'Expansion beyond Scandinavia into Switzerland — targeting Central Europe', category: 'expansion' },
    { year: 1974, event: 'Entry into Germany — becomes largest market outside Sweden', category: 'expansion' },
    { year: 1985, event: 'First US store opens in Philadelphia — entering the world\'s largest consumer market', category: 'expansion' },
    { year: 1998, event: 'Entry into China — bet on emerging middle-class consumer growth', category: 'expansion' },
    { year: 2000, event: 'IKEA launches e-commerce platform — early digital retail adoption', category: 'digital' },
    { year: 2012, event: 'Inter IKEA restructuring — modernizing complex ownership structure', category: 'strategy' },
    { year: 2017, event: 'Acquisition of TaskRabbit — building services ecosystem for assembly', category: 'digital' },
    { year: 2018, event: 'Partnership with Sonos — smart home integration strategy', category: 'innovation' },
    { year: 2020, event: 'COVID-19 accelerates digital transformation — 45% e-commerce surge', category: 'digital' },
    { year: 2021, event: 'Commits to become climate-positive by 2030 — circular economy model', category: 'esg' },
    { year: 2023, event: 'Revenue reaches €47.6B — 460+ stores across 62 markets', category: 'expansion' },
];

export const crisisTimeline = [
    {
        year: '1990s',
        title: 'Quality Perception Crisis',
        description: 'As IKEA expanded rapidly, consumer perception shifted — products were increasingly associated with disposable, low-quality goods. The "student furniture" stigma threatened upmarket positioning.',
        impact: 'Brand devaluation risk',
        response: 'Invested in material innovation and quality testing (25,000 quality tests annually)'
    },
    {
        year: '2000s',
        title: 'Supply Chain Sustainability Backlash',
        description: 'Investigations revealed child labor in supply chain partners. NGO campaigns and media scrutiny exposed procurement vulnerabilities in developing markets.',
        impact: 'Reputational damage, consumer boycott threats',
        response: 'IWAY code of conduct, supplier auditing program, partnership with UNICEF and Save the Children'
    },
    {
        year: '2012-14',
        title: 'European Market Saturation',
        description: 'Core European markets showed declining same-store growth. New store openings delivered diminishing marginal returns. E-commerce erosion of foot traffic began.',
        impact: 'Revenue growth stagnation',
        response: 'City-center format stores, enhanced digital catalog, omnichannel strategy'
    },
    {
        year: '2016',
        title: 'Furniture Recall Crisis (MALM)',
        description: 'Eight child fatalities linked to MALM dresser tip-overs in the US. 29 million units recalled — one of the largest product recalls in retail history.',
        impact: 'Legal liability ($50M+ settlement), safety credibility crisis',
        response: 'Redesigned anchoring system, free wall-attachment kit program, enhanced safety testing protocols'
    },
    {
        year: '2020',
        title: 'COVID-19 Operational Disruption',
        description: 'Temporary closure of 75% of global stores. Supply chain disruptions exposed over-reliance on physical retail model and just-in-time delivery vulnerabilities.',
        impact: '€1.4B revenue drop, 10% workforce impact',
        response: 'Accelerated digital transformation, BOPIS (Buy Online, Pick Up In Store), last-mile delivery partnerships'
    },
];

export const expansionData = [
    { region: 'Europe', countries: 30, stores: 290, revenue: '70%', x: 48, y: 30 },
    { region: 'North America', countries: 3, stores: 68, revenue: '18%', x: 22, y: 35 },
    { region: 'Asia-Pacific', countries: 12, stores: 85, revenue: '9%', x: 75, y: 45 },
    { region: 'Middle East & Africa', countries: 6, stores: 15, revenue: '2%', x: 55, y: 50 },
    { region: 'South America', countries: 3, stores: 5, revenue: '1%', x: 30, y: 65 },
];

export const swotData = {
    strengths: [
        'Globally recognized brand with 70+ years of equity',
        'Vertically integrated supply chain (1,600+ suppliers)',
        'Flat-pack logistics reducing shipping costs by 80%',
        'Democratic Design philosophy — unique value proposition',
        'Economies of scale — purchasing power across 62 markets',
        'In-house product design (9,500+ products)',
    ],
    weaknesses: [
        'Quality perception challenges in premium segments',
        'Complex corporate ownership structure (foundations)',
        'Self-assembly model excludes elderly and disabled consumers',
        'Store-dependent model — high capital expenditure per location',
        'Limited product customization vs. competitors',
        'Over-reliance on European market (70% revenue)',
    ],
    opportunities: [
        'Emerging market expansion (India, South America, Africa)',
        'Smart home ecosystem integration (IoT)',
        'Circular economy & furniture-as-a-service model',
        'Small-format urban stores for city centers',
        'AI-driven personalization in e-commerce',
        'B2B office and hospitality market penetration',
    ],
    threats: [
        'D2C furniture startups (Wayfair, Article, Floyd)',
        'Amazon & Alibaba entering furniture retail',
        'Rising raw material costs and supply chain disruption',
        'Changing consumer preference (quality over quantity)',
        'Trade policy uncertainty (tariffs, Brexit effects)',
        'Sustainability regulation tightening globally',
    ],
};

export const porterForcesData = [
    {
        force: 'Supplier Power',
        level: 25,
        analysis: 'LOW — IKEA\'s scale provides immense bargaining power over 1,600+ suppliers. Long-term contracts and in-house design reduce dependency.',
        color: '#22c55e'
    },
    {
        force: 'Buyer Power',
        level: 55,
        analysis: 'MODERATE — Price-sensitive consumers have alternatives, but IKEA\'s brand loyalty and unique experience create switching costs.',
        color: '#FFDA1A'
    },
    {
        force: 'Competitive Rivalry',
        level: 70,
        analysis: 'HIGH — Intense competition from Wayfair, Ashley, West Elm, and local retailers. E-commerce has lowered barriers significantly.',
        color: '#ef4444'
    },
    {
        force: 'Threat of Substitutes',
        level: 45,
        analysis: 'MODERATE — Second-hand furniture marketplaces, rental models, and DIY alternatives offer substitution but lack IKEA\'s scale.',
        color: '#FFDA1A'
    },
    {
        force: 'Threat of New Entrants',
        level: 30,
        analysis: 'LOW — Massive capital requirements, supply chain complexity, and brand equity create formidable barriers to entry.',
        color: '#22c55e'
    },
];

export const qaData = [
    {
        question: 'Is IKEA truly disruptive or merely incremental?',
        answer: `According to Clayton Christensen's theory, disruption occurs when a simpler, more affordable product displaces established competitors by initially targeting overlooked market segments. IKEA fits this framework precisely: in the 1950s, quality furniture was exclusively accessible to upper-middle-class consumers through specialized retailers. IKEA created a new market by targeting young, cost-conscious consumers with functional yet aesthetically appealing furniture. The flat-pack model wasn't just a cost optimization — it fundamentally restructured the value chain. However, critics argue IKEA represents "new market disruption" rather than "low-end disruption," as it created an entirely new consumption category rather than undercutting existing products. The distinction matters: IKEA didn't make existing furniture cheaper — it made previously unavailable design accessible. This aligns more closely with Kim & Mauborgne's Blue Ocean Strategy, creating uncontested market space.`,
        frameworks: ['Disruptive Innovation Theory (Christensen, 1997)', 'Blue Ocean Strategy (Kim & Mauborgne, 2005)']
    },
    {
        question: 'Is self-assembly cost-shifting or genuine value co-creation?',
        answer: `This question reveals a fundamental tension in IKEA's model. From a traditional economics perspective, self-assembly represents cost externalization — transferring labor costs to the consumer. The consumer provides unpaid labor, reducing IKEA\'s operational costs. However, through the lens of Prahalad & Ramaswamy's Value Co-Creation framework, IKEA enables customers to participate in the creation process, potentially increasing perceived value through the "IKEA Effect" (Norton et al., 2012) — people value products they helped create more highly. IKEA has further evolved this model: TaskRabbit acquisition (2017) provides professional assembly for those who prefer it, while the self-assembly option remains for those who derive satisfaction from it. This represents a strategic resolution: acknowledging that co-creation is not universal while maintaining the cost advantage as an option.`,
        frameworks: ['Value Co-Creation (Prahalad & Ramaswamy, 2004)', 'IKEA Effect (Norton et al., 2012)', 'Service-Dominant Logic (Vargo & Lusch, 2004)']
    },
    {
        question: 'Can IKEA\'s model sustain in emerging markets like India?',
        answer: `IKEA's emerging market strategy faces structural challenges that test the universality of its model. In India (entered 2018), the company confronted: (1) Consumer preferences for solid wood over engineered wood, (2) Prevalence of local carpenters offering custom furniture at low cost, (3) Smaller living spaces requiring different product portfolios, (4) Price sensitivity requiring India-specific sourcing (40% local procurement target). Using Ghemawat's CAGE Distance Framework, IKEA faces cultural distance (assembly culture vs. service culture), administrative distance (complex retail regulations), geographic distance (vast distribution challenges), and economic distance (price point recalibration needed). The company has adapted by reducing prices 30-40% below global averages and introducing delivery/assembly services. However, the fundamental question remains whether the self-assembly discovery model can achieve cultural resonance. Early evidence from Hyderabad (first store: 40M visitors in 7 years) suggests cautious optimism.`,
        frameworks: ['CAGE Distance Framework (Ghemawat, 2007)', 'Institutional Theory (North, 1990)', 'Global Value Chain Theory (Gereffi, 1999)']
    },
    {
        question: 'What are IKEA\'s structural vulnerabilities?',
        answer: `IKEA's structural vulnerabilities cluster around four dimensions: (1) Ownership Opacity — The Inter IKEA / Ingka Group structure involving Dutch foundations makes governance opaque and strategic pivots slow; (2) Cannibalization Risk — Growing e-commerce threatens the showroom model that drives 60% of impulse purchases; (3) Sustainability Paradox — The disposable furniture model conflicts with circular economy imperatives. Fast furniture generates 12M tons of furniture waste annually; (4) Talent Model — The consensus-driven Swedish management culture can slow innovation cycles vs. agile competitors. Using Porter's Value Chain Analysis, the primary vulnerability lies at the intersection of inbound logistics (long supply chains vulnerable to disruption) and operations (store-dependent model with high fixed costs). The company's mitigation strategy — urban format stores, circular services, and digital investment — addresses these systematically but represents a 5-10 year transformation timeline.`,
        frameworks: ['Porter\'s Value Chain (Porter, 1985)', 'Dynamic Capabilities Theory (Teece, 2007)', 'Organizational Ambidexterity (O\'Reilly & Tushman, 2008)']
    },
    {
        question: 'How does IKEA\'s franchising model affect strategic agility?',
        answer: `IKEA operates through a complex franchising system: Inter IKEA Systems B.V. owns the concept and brand, while franchisees (primarily Ingka Group, holding ~90% of stores) operate the retail business. This creates a principal-agent dynamic: Inter IKEA earns 3% franchise fees on revenue, creating incentive misalignment — Inter IKEA benefits from top-line growth while Ingka bears operational risks. This structure historically enabled tax-efficient global scaling but now creates strategic friction. Independent franchisees (e.g., Al-Futtaim in Middle East, Dairy Farm in Southeast Asia) may prioritize local optimization over global brand coherence. Using Transaction Cost Economics (Williamson, 1985), the franchise model reduces IKEA's asset intensity but increases coordination costs. The recent trend toward Ingka Group directly operating more stores suggests recognition that tighter vertical integration may be necessary for the digital transformation era.`,
        frameworks: ['Transaction Cost Economics (Williamson, 1985)', 'Agency Theory (Jensen & Meckling, 1976)', 'Resource-Based View (Barney, 1991)']
    },
];

export const entrepreneurshipLessons = [
    {
        title: 'Effectuation Over Causation',
        description: 'Kamprad didn\'t start with a grand plan to dominate global furniture. He started with available means — a small mail-order business — and let opportunities emerge. This exemplifies Sarasvathy\'s Effectuation Theory: expert entrepreneurs don\'t predict the future, they create it with what they have.',
        framework: 'Effectuation Theory (Sarasvathy, 2001)',
        icon: '🔬'
    },
    {
        title: 'Value Innovation, Not Technology Innovation',
        description: 'IKEA\'s disruption wasn\'t technological — it was a business model innovation that recombined existing elements (flat-pack, self-assembly, showroom) into a new value architecture. This teaches that entrepreneurial innovation is rarely about invention; it\'s about reconfiguration.',
        framework: 'Blue Ocean Strategy (Kim & Mauborgne, 2005)',
        icon: '💡'
    },
    {
        title: 'Cost Leadership Through Design',
        description: 'IKEA\'s product design begins with price — designers are given a target price and work backward. This "design for manufacturing" approach embeds cost leadership into the DNA of every product, achieving Porter\'s Cost Leadership without sacrificing perceived quality.',
        framework: 'Porter\'s Generic Strategies (Porter, 1980)',
        icon: '📐'
    },
    {
        title: 'Scalable Simplicity',
        description: 'The flat-pack model solved the classic scale-complexity tradeoff: as IKEA grew, logistics costs decreased rather than increased. This demonstrates that the best scalable systems are those that simplify rather than complicate with growth.',
        framework: 'Economies of Scale Theory',
        icon: '📦'
    },
    {
        title: 'Crisis as Strategic Catalyst',
        description: 'Each crisis (quality, safety, digital disruption) forced strategic evolution. The MALM recall led to industry-leading safety protocols. COVID-19 accelerated a delayed digital transformation. This demonstrates dynamic capabilities — the organizational ability to sense, seize, and transform.',
        framework: 'Dynamic Capabilities (Teece, 2007)',
        icon: '🔄'
    },
    {
        title: 'Sustainable Competitive Moat',
        description: 'IKEA\'s moat isn\'t a single advantage — it\'s a system of interlocking advantages (brand, supply chain, store experience, design) that are individually replicable but collectively inimitable. This systems-level thinking defines enduring competitive advantage.',
        framework: 'Resource-Based View (Barney, 1991)',
        icon: '🏰'
    },
];
