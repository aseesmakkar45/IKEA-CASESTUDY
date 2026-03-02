import { motion } from 'framer-motion';

const variants = {
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } }
    },
    slideUp: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
    },
    slideLeft: {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
    },
    slideRight: {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
    },
};

export default function AnimatedElement({ children, variant = 'slideUp', delay = 0, className = '' }) {
    const v = variants[variant] || variants.slideUp;
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
                hidden: v.hidden,
                visible: { ...v.visible, transition: { ...v.visible.transition, delay } }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
