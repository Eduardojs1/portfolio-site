import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillCardProps {
  category: string;
  items: string[];
  index: number;
}

export function SkillCard({ category, items, index }: SkillCardProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-bold mb-4 text-indigo-600">{category}</h3>
      <ul className="space-y-2">
        {items.map((item, itemIndex) => (
          <motion.li
            key={itemIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.1 }}
            className="flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            <span className="text-gray-700">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}